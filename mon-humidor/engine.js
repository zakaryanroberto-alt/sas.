/* Moteur autonome : remplace l'environnement Claude des artifacts.
   Appelle directement l'API Anthropic avec la clé de l'utilisateur (stockée dans cet appareil uniquement). */
(() => {
  const K = 'sommelier-settings';
  const DEF = { complex: 'claude-sonnet-5-5', fast: 'claude-haiku-5-5' };
  const get = () => { try { return JSON.parse(localStorage.getItem(K) || '{}'); } catch (e) { return {}; } };
  const set = o => { try { localStorage.setItem(K, JSON.stringify(Object.assign(get(), o))); return true; } catch (e) { return false; } };
  const b64 = blob => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = rej; r.readAsDataURL(blob); });
  const err = (code, msg) => Object.assign(new Error(msg || code), { code });

  async function S(input, opts = {}) {
    const st = get();
    if (!st.key) { window.dispatchEvent(new Event('need-key')); throw err('not_granted'); }
    let messages = typeof input === 'string' ? [{ role: 'user', content: input }] : input.map(m => ({ role: m.role, content: m.content }));
    if (opts.images && opts.images.length) {
      const imgs = await Promise.all(opts.images.map(async b => ({ type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: await b64(b) } })));
      const last = messages[messages.length - 1];
      messages[messages.length - 1] = { role: 'user', content: [...imgs, { type: 'text', text: String(last.content) }] };
    }
    const body = { model: opts.modelTier === 'complex' ? (st.complex || DEF.complex) : (st.fast || DEF.fast), max_tokens: 4096, messages };
    if (opts.tools && opts.tools.length) body.tools = [{ type: 'web_search_20250305', name: 'web_search', max_uses: 2 }];
    let text = '';
    for (let i = 0; i < 4; i++) {
      let r;
      try {
        r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST', signal: opts.signal,
          headers: { 'content-type': 'application/json', 'x-api-key': st.key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
          body: JSON.stringify(body)
        });
      } catch (e) { if (e.name === 'AbortError') throw e; throw err('network', 'Réseau indisponible'); }
      if (!r.ok) {
        if (r.status === 429) throw err('rate_limited');
        if (r.status === 401 || r.status === 403) { window.dispatchEvent(new Event('need-key')); throw err('not_granted'); }
        throw err('http_' + r.status);
      }
      const j = await r.json();
      text += (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
      if (j.stop_reason === 'pause_turn') { messages = [...messages, { role: 'assistant', content: j.content }]; body.messages = messages; continue; }
      break;
    }
    if (opts.onText) opts.onText({ text });
    return { text };
  }
  S.limits = async () => ({ images: true });

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const DIC = SR ? (() => {
    let r = null, st = () => {}, pa = () => {}, fi = () => {};
    return {
      onState: f => { st = f; }, onPartial: f => { pa = f; }, onFinal: f => { fi = f; },
      async start() {
        r = new SR(); r.lang = 'fr-FR'; r.interimResults = true;
        r.onstart = () => st({ state: 'listening' }); r.onend = () => st({ state: 'idle' });
        r.onresult = e => { let t = '', f = ''; for (const x of e.results) { if (x.isFinal) f += x[0].transcript; else t += x[0].transcript; } if (f) fi({ text: f.trim() }); else pa({ text: t }); };
        r.start();
      },
      async stop() { if (r) r.stop(); }
    };
  })() : null;

  const TTS = window.speechSynthesis ? {
    speak: (t, o = {}) => new Promise(res => { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.lang = o.language === 'fr' ? 'fr-FR' : (o.language || 'fr-FR'); u.onend = res; u.onerror = res; speechSynthesis.speak(u); })
  } : null;

  window.sommelierSettings = { get, set, DEF };
  window.claude = {
    use(name) {
      switch (name) {
        case 'sample': return S;
        case 'mcp': return {};      // active la case « Vérifier les prix sur le web » (recherche web native Anthropic)
        case 'dictation': return DIC;
        case 'tts': return TTS;
        default: return null;       // db, user : la cave est locale (localStorage)
      }
    }
  };
})();
