{
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const YEAR=new Date().getFullYear();
const SAMPLE={found:true,confidence:"haute",label_text:"E. GUIGAL · CÔTES DU RHÔNE · Appellation Côtes du Rhône Contrôlée · 2020",name:"Côtes du Rhône Rouge",producer:"E. Guigal",appellation:"Côtes du Rhône AOC",classification:"AOC régionale",region:"Vallée du Rhône",country:"France",vintage:"2020",color:"rouge",grapes:[{name:"Syrah"},{name:"Grenache"},{name:"Mourvèdre"}],abv:"≈ 14 %",
essentiel:{style:"Rouge fruité et épicé, souple et généreux",verdict_short:"Bon achat",food:"Viandes grillées, plats mijotés, pizza",when:"Maintenant, jusqu'en 2027"},
summary:"Un rouge du Rhône généreux et rassurant, signé par l'une des maisons les plus réputées de la vallée. Fruits noirs, épices douces, tanins souples : un vin du quotidien fiable qui vaut souvent plus que son prix.",
score:88,score_label:"Très bon",quality_notes:"Guigal met dans ce Côtes du Rhône plus de Syrah que la moyenne de l'appellation, d'où sa couleur sombre et sa note poivrée. Très régulier d'une année sur l'autre.",
price:{low:10,high:14,source:"estimation",note:"Prix habituel en caviste et en grande surface en France."},
value:{score:8.5,verdict:"Excellent rapport qualité/prix pour un vin de tous les jours d'un grand producteur.",buy_below:13},shop_verdict:"",
profile:{body:4,acidity:3,tannin:3,sweetness:1,fruit:4,oak:2},
appearance:"Robe grenat profond, reflets violacés.",nose:["mûre","cassis","poivre noir","garrigue","réglisse"],palate:"Attaque ronde et fruitée, milieu de bouche dense, tanins fondus, finale épicée de longueur moyenne.",
serve:{temp:"16–17 °C",decant:"Pas indispensable : 30 minutes d'aération l'ouvrent bien.",glass:"Verre à rouge de type bordeaux ou universel",window_from:2022,window_to:2027,peak:"2023–2025",status:"Prêt à boire"},
food:["Agneau grillé aux herbes","Daube provençale","Burger maison","Pizza à la saucisse","Comté 18 mois"],avoid:["Poissons délicats","Desserts sucrés"],
vintage_note:"2020 est un millésime solaire dans le Rhône sud : vins mûrs, concentrés, au fruit généreux.",
terroir:"Raisins issus de plusieurs secteurs de l'appellation, surtout au sud de la vallée : climat méditerranéen, sols de galets roulés, d'argile et de calcaire.",
producer_story:"Maison fondée en 1946 à Ampuis par Étienne Guigal, devenue une référence mondiale grâce à ses Côte-Rôtie surnommées « les La La » (La Mouline, La Landonne, La Turque).",
label_decode:[{term:"Appellation Côtes du Rhône Contrôlée",meaning:"AOC : le vin suit un cahier des charges (zone, cépages, rendements). C'est l'étage de base de la vallée."},{term:"E. Guigal, Ampuis",meaning:"Négociant-éleveur : il achète raisins ou vins, puis assemble, élève et met en bouteille dans ses chais."},{term:"2020",meaning:"Le millésime : l'année de la vendange, pas celle de la mise en bouteille."}],
lesson:["Le Rhône a deux visages : le nord, où la Syrah règne seule, et le sud, terre d'assemblages menés par le Grenache.","La hiérarchie : Côtes du Rhône, puis Côtes du Rhône Villages, puis les crus comme Gigondas ou Châteauneuf-du-Pape.","Négociant n'est pas un défaut : chez Guigal, l'assemblage de nombreux lots est justement le savoir-faire."],
glossary:[{term:"Tanins",def:"Composés du raisin qui assèchent la bouche, comme un thé trop infusé."},{term:"Assemblage",def:"Mélange de cépages ou de parcelles pour équilibrer le vin."},{term:"Garrigue",def:"Arômes d'herbes sèches méditerranéennes : thym, romarin, laurier."}],
alternatives:[{type:"Même style, moins cher",name:"Côtes du Rhône d'un vigneron indépendant",why:"Même profil fruité et épicé, souvent moins connu donc moins cher",price:"7–10 €"},{type:"Montée en gamme",name:"Guigal Crozes-Hermitage",why:"100 % Syrah du Rhône nord : plus de fraîcheur et de poivre",price:"18–25 €"},{type:"Pour découvrir",name:"Un Gigondas",why:"Le grand frère du sud, plus profond et plus long",price:"20–30 €"}],
questions:["Pourquoi ce vin est-il si régulier chaque année ?","Quelle différence avec un Châteauneuf-du-Pape ?","Je peux le garder combien de temps ?","Quel plat de tous les jours ira le mieux ?"]};

let cur={data:SAMPLE,img:null,thumb:null,id:null,chat:[],mine:{rating:0,status:'',notes:''},price:null,sample:true};
let S=null,MCP=null,DIC=null,TTS=null,cave=[],ac=null;

const toast=t=>{const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),4200)};
const BOTTLE=`<svg viewBox="0 0 200 470" role="img" aria-label="Bouteille de vin rouge"><defs>
<radialGradient id="bgl" cx="50%" cy="45%" r="55%"><stop offset="0" stop-color="#ffd9a0" stop-opacity=".38"/><stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/></radialGradient>
<linearGradient id="bg1" x1="0" x2="1"><stop offset="0" stop-color="#050102"/><stop offset=".22" stop-color="#2b0a14"/><stop offset=".42" stop-color="#4a1424"/><stop offset=".6" stop-color="#1c050c"/><stop offset="1" stop-color="#030001"/></linearGradient>
<linearGradient id="bg2" x1="0" x2="1"><stop offset="0" stop-color="#4a0a14"/><stop offset=".3" stop-color="#a8283c"/><stop offset=".55" stop-color="#7a1424"/><stop offset="1" stop-color="#32050c"/></linearGradient>
<linearGradient id="bg3" x1="0" x2="1"><stop offset="0" stop-color="#d9ccb0"/><stop offset=".4" stop-color="#fbf5e8"/><stop offset="1" stop-color="#d2c4a6"/></linearGradient>
<linearGradient id="bg4" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
</defs>
<circle cx="100" cy="230" r="190" fill="url(#bgl)"/>
<ellipse cx="100" cy="452" rx="70" ry="9" fill="#000" opacity=".5"/>
<path d="M84 22h32v108c0 30 34 46 34 92v196c0 12-8 20-20 20H70c-12 0-20-8-20-20V222c0-46 34-62 34-92z" fill="url(#bg1)"/>
<path d="M84 22h32v108c0 30 34 46 34 92v196c0 12-8 20-20 20H70c-12 0-20-8-20-20V222c0-46 34-62 34-92z" fill="none" stroke="#fff" stroke-opacity=".12"/>
<rect x="81" y="12" width="38" height="62" rx="5" fill="url(#bg2)"/>
<rect x="81" y="12" width="38" height="9" rx="4" fill="#d8b45a" opacity=".85"/>
<rect x="81" y="66" width="38" height="4" fill="#d8b45a" opacity=".6"/>
<rect x="50" y="262" width="100" height="138" fill="url(#bg3)"/>
<rect x="57" y="269" width="86" height="124" fill="none" stroke="#c9a24a" stroke-width="1.2"/>
<rect x="60" y="272" width="80" height="118" fill="none" stroke="#c9a24a" stroke-opacity=".5" stroke-width=".6"/>
<text x="100" y="296" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-size="9" letter-spacing="2.5" fill="#7a1a33">GRAND VIN</text>
<path d="M72 304h56" stroke="#c9a24a" stroke-width=".8"/>
<text x="100" y="334" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-size="25" font-weight="600" fill="#3d0a18">Domaine</text>
<text x="100" y="354" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-size="13" font-style="italic" fill="#5a1024">Cuvée Prestige</text>
<path d="M72 364h56" stroke="#c9a24a" stroke-width=".8"/>
<text x="100" y="382" text-anchor="middle" font-family="Inter,sans-serif" font-size="9" letter-spacing="1.5" fill="#5a1024">2020 · AOC</text>
<path d="M60 154c4-40 22-62 22-110" stroke="url(#bg4)" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M62 224c-2 60-2 120 0 190" stroke="url(#bg4)" stroke-width="7" fill="none" stroke-linecap="round" opacity=".7"/>
<path d="M136 232c2 50 2 110 0 170" stroke="#fff" stroke-opacity=".14" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="100" cy="430" rx="44" ry="6" fill="#000" opacity=".4"/>
</svg>`;

const n=v=>{const x=Number(v);return isFinite(x)?x:null};
const fmtP=p=>p&&n(p.low)!=null?(n(p.high)&&n(p.high)!==n(p.low)?`${n(p.low)}–${n(p.high)} €`:`${n(p.low)} €`):'—';
const arr=v=>Array.isArray(v)?v:[];
const str=v=>v==null?'':String(v);
function norm(d){
  d=d&&typeof d==='object'?d:{};
  const o=Object.assign({found:true},d);
  ['name','producer','appellation','region','country','vintage','summary','appearance','palate','terroir','producer_story','vintage_note','quality_notes','abv','classification','shop_verdict','score_label'].forEach(k=>o[k]=str(o[k]));
  o.color=['rouge','blanc','rosé','effervescent','liquoreux','orange'].includes(o.color)?o.color:'rouge';
  o.grapes=arr(o.grapes).map(g=>typeof g==='string'?{name:g}:g).filter(g=>g&&g.name);
  ['nose','food','avoid','lesson','questions'].forEach(k=>o[k]=arr(o[k]).map(str).filter(Boolean));
  ['label_decode','glossary','alternatives'].forEach(k=>o[k]=arr(o[k]).filter(x=>x&&typeof x==='object'));
  const p=o.profile&&typeof o.profile==='object'?o.profile:{};o.profile={};
  ['body','acidity','tannin','sweetness','fruit','oak'].forEach(k=>o.profile[k]=Math.max(1,Math.min(5,Math.round(n(p[k])||3))));
  o.essentiel=o.essentiel&&typeof o.essentiel==='object'?o.essentiel:{};
  o.serve=Object.assign({temp:'',decant:'',glass:'',peak:'',status:''},o.serve&&typeof o.serve==='object'?o.serve:{});
  o.price=o.price&&typeof o.price==='object'&&n(o.price.low)!=null?Object.assign({},o.price):null;
  if(o.price&&n(o.price.high)!=null&&n(o.price.high)<n(o.price.low)){const t=o.price.low;o.price.low=o.price.high;o.price.high=t}
  o.value=Object.assign({},o.value&&typeof o.value==='object'?o.value:{});
  const s=n(o.score);o.score=s==null?null:Math.max(0,Math.min(100,Math.round(s)));
  const v=n(o.value.score);o.value.score=v==null?null:Math.max(0,Math.min(10,v));
  if(!o.price||o.price.source!=='web')o.value.buy_below=null;
  return o;
}
const drinkNow=d=>{const s=d.serve||{},a=n(s.window_from),b=n(s.window_to);return !!(a&&b&&YEAR>=a&&YEAR<=b)};

/* ---------- stockage local ---------- */
const LS='mon-sommelier-cave',LSL='mon-sommelier-last';
const lsGet=()=>{try{const a=JSON.parse(localStorage.getItem(LS)||'[]');return Array.isArray(a)?a:[]}catch(e){return[]}};
const lsPut=a=>{try{localStorage.setItem(LS,JSON.stringify(a));return true}catch(e){return false}};
const keyOf=d=>[d.producer,d.name,d.vintage].map(x=>String(x||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'')).join('|');
const lastSave=()=>{try{localStorage.setItem(LSL,JSON.stringify({data:cur.data,price:cur.price}))}catch(e){}};

function renderFinder(){const ok=cur.img&&String(cur.img).startsWith('data:image/');$('#vfIn').innerHTML=ok?`<img src="${esc(cur.img)}" alt="Photo de la bouteille">`:BOTTLE;const im=$('#vfIn img');if(im)im.onerror=()=>{$('#vfIn').innerHTML=BOTTLE}}

const WORDS={body:['Très léger','Léger','Moyen','Ample','Très puissant'],acidity:['Très douce','Douce','Équilibrée','Fraîche','Très vive'],tannin:['Aucun','Très souples','Souples','Présents','Puissants'],sweetness:['Sec','Sec','Demi-sec','Moelleux','Très doux'],fruit:['Discret','Léger','Fruité','Très fruité','Explosif'],oak:['Aucun bois','Léger','Discret','Marqué','Très boisé']};
const lvl=(k,v)=>{v=Math.max(1,Math.min(5,Math.round(n(v)||0)));return {v,w:(WORDS[k]||[])[v-1]||''}};
const badCls=t=>/pass|trop cher|évit|décev|cher pour/i.test(t||'')?'bad':'good';
function ess(d){
  const e=d.essentiel||{},sv=d.serve||{};
  return {style:e.style||[d.color,(d.nose||[]).slice(0,2).join(' et ')].filter(Boolean).join(', '),
    verdict:e.verdict_short||((n(d.value?.score)??0)>=7?'Bon achat':(n(d.value?.score)??10)<5?'Plutôt cher':'Prix correct'),
    food:e.food||(d.food||[]).slice(0,2).join(', '),
    when:e.when||[sv.status,n(sv.window_to)?"jusqu'en "+n(sv.window_to):''].filter(Boolean).join(', '),
    serve:[sv.temp,/pas indisp|inutile|non/i.test(sv.decant||'')?'':'carafe conseillée'].filter(Boolean).join(' · ')};
}
function renderCard(){
  const d=cur.data;
  if(!d.found){$('#cardIn').innerHTML=`<h2>Étiquette illisible</h2><p>${esc(d.summary||"Je n'ai pas réussi à identifier ce vin.")}</p><p class="conf">Conseil : cadrez l'étiquette de face, bien éclairée, sans reflet. Vous pouvez aussi taper le nom du vin.</p>`;return}
  const vs=n(d.value?.score),sc=n(d.score),E=ess(d);
  const shop=cur.price&&d.shop_verdict?`<div class="verdict ${badCls(d.shop_verdict)}"><b>À ${esc(cur.price)} € :</b> ${esc(d.shop_verdict)}${d.price?.source==='web'?'':' <small>(d’après un prix estimé, à vérifier)</small>'}</div>`:'';
  $('#cardIn').innerHTML=`<div class="appel">${esc([d.appellation,d.region,d.country].filter(Boolean).join(' · '))}</div>
  <h2>${esc(d.name)}${d.vintage?' '+esc(d.vintage):''}</h2>
  <div class="prod">${esc(d.producer)}<span class="chip c-${esc(d.color)}" style="margin-left:8px">${esc(d.color)}</span></div>
  <div class="big ${badCls(E.verdict)}"><b>${esc(E.verdict)}</b><span>${esc(d.value?.verdict||'')}</span></div>${shop}
  <div class="nums"><div><b>${sc??'—'}<small>/100</small></b><span>${esc(d.score_label||'Qualité')}</span></div><div><b>${vs??'—'}<small>/10</small></b><span>Qualité/prix</span></div><div><b>${fmtP(d.price)}</b><span>${d.price?.source==='web'?'Prix constaté':'Prix estimé (approx.)'}</span></div></div>
  <dl class="ess"><div><dt>Le goût</dt><dd>${esc(E.style)}</dd></div><div><dt>Avec quoi</dt><dd>${esc(E.food)}</dd></div><div><dt>Quand le boire</dt><dd>${esc(E.when)}</dd></div><div><dt>Le servir</dt><dd>${esc(E.serve)}</dd></div></dl>
  <p class="sum">${esc(d.summary)}</p>
  <div class="qk"><b>Une question sur ce vin ?</b>${(d.questions||[]).slice(0,3).map(q=>`<button type="button">${esc(q)}</button>`).join('')}</div>`;
}
let tab='gout';
const TABS=[['gout','Le goût'],['service','Servir et accorder'],['comprendre','Comprendre'],['acheter','Acheter malin']];
function renderDetails(){
  const d=cur.data,box=$('#details');
  $('#sampleLine').hidden=!cur.sample;
  if(!d.found){box.innerHTML='';$('#tabs').innerHTML='';return}
  $('#tabs').innerHTML=TABS.map(([k,t])=>`<button type="button" role="tab" data-t="${k}" aria-selected="${tab===k}">${t}</button>`).join('');
  const P=d.profile||{},L=[['Corps','body'],['Acidité','acidity'],['Tanins','tannin'],['Sucre','sweetness'],['Fruit','fruit'],['Boisé','oak']];
  const sv=d.serve||{},wf=n(sv.window_from),wt=n(sv.window_to);
  let win='';
  if(wf&&wt){const a=Math.min(wf,YEAR)-1,b=Math.max(wt,YEAR)+1,sp=b-a,pc=y=>((y-a)/sp*100).toFixed(1);win=`<div class="win"><div class="rail"><div class="ok" style="left:${pc(wf)}%;width:${pc(wt)-pc(wf)}%"><span>${wf}–${wt}</span></div><div class="now" style="left:${pc(YEAR)}%"><em>${YEAR}</em></div></div><div class="lab"><span>${a}</span><span>En vert : la bonne période pour le boire</span><span>${b}</span></div></div>`}
  const P1={
  gout:`<section class="sec"><h3>Son caractère</h3><div class="chars">${L.map(([t,k])=>{const x=lvl(k,P[k]);return `<div class="dot"><span>${t}</span><span class="pips" aria-label="${x.v} sur 5">${[1,2,3,4,5].map(i=>`<i class="${i<=x.v?'on':''}"></i>`).join('')}</span><b>${esc(x.w)}</b></div>`}).join('')}</div></section>
  <section class="sec"><h3>Ce que vous allez sentir</h3><div class="tags">${(d.nose||[]).map(aromaChip).join('')}</div><p><b>En bouche :</b> ${esc(d.palate)}</p><p class="conf"><b>À l'œil :</b> ${esc(d.appearance)}</p></section>`+gameHtml(d.nose),
  service:`<section class="sec"><h3>Le servir</h3><dl class="kv"><dt>Température</dt><dd><b>${esc(sv.temp)}</b></dd><dt>Carafe</dt><dd>${esc(sv.decant)}</dd><dt>Verre</dt><dd>${esc(sv.glass)}</dd><dt>Aujourd'hui</dt><dd><b>${esc(sv.status)}</b>${sv.peak?` · apogée ${esc(sv.peak)}`:''}</dd></dl>${win}</section>
  <section class="sec"><h3>Avec quoi le boire</h3><ul class="food">${(d.food||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${(d.avoid||[]).length?`<p class="conf" style="margin-top:12px">À éviter : ${d.avoid.map(esc).join(', ')}</p>`:''}</section>`,
  comprendre:`<section class="sec full"><h3>L'étiquette expliquée</h3><div class="scroll"><table class="dec"><tbody>${(d.label_decode||[]).map(r=>`<tr><td>${esc(r.term)}</td><td>${esc(r.meaning)}</td></tr>`).join('')}</tbody></table></div></section>
  <section class="sec"><h3>À retenir</h3><ol class="les">${(d.lesson||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol><dl class="kv" style="margin-top:14px">${(d.glossary||[]).map(g=>`<dt><b>${esc(g.term)}</b></dt><dd>${esc(g.def)}</dd>`).join('')}</dl></section>
  <section class="sec"><h3>Son histoire</h3><p><b>Le producteur :</b> ${esc(d.producer_story)}</p><p><b>Le terroir :</b> ${esc(d.terroir)}</p><p><b>L'année ${esc(d.vintage||'')} :</b> ${esc(d.vintage_note)}</p>${d.quality_notes?`<p class="conf">${esc(d.quality_notes)}</p>`:''}<p class="conf">${esc([(d.grapes||[]).map(g=>g.name+(n(g.pct)?' '+n(g.pct)+' %':'')).join(', '),d.abv,d.classification].filter(Boolean).join(' · '))}</p></section>`,
  acheter:`<section class="sec full"><h3>Le bon prix</h3><div class="pricebar">${priceBar(d)}</div><p class="conf">${esc(d.price?.note||'')}${d.confidence?` · Identification : confiance ${esc(d.confidence)}`:''}</p></section>
  <section class="sec full"><h3>Si vous aimez ce vin</h3><div class="alts">${(d.alternatives||[]).map(a=>`<div class="alt"><small>${esc(a.type)}</small><b>${esc(a.name)}</b><div class="conf">${esc(a.why)}</div><span>${esc(a.price)}</span></div>`).join('')}</div></section>`};
  box.innerHTML=(P1[tab]||P1.gout)+`
  <section class="sec full"><h3>Ma bouteille</h3><div class="mine"><div class="stars" id="stars">${[1,2,3,4,5].map(i=>`<button type="button" data-s="${i}" class="${i<=cur.mine.rating?'on':''}" aria-label="${i} sur 5">★</button>`).join('')}</div><select id="mStatus" aria-label="Statut"><option value="">Statut…</option>${['À goûter','Goûté','En cave','Envie'].map(s=>`<option ${cur.mine.status===s?'selected':''}>${s}</option>`).join('')}</select><button class="btn solid" id="bSave">${cur.id?'Enregistré dans ma cave':'Ajouter à ma cave'}</button>${cur.id?'<button class="del" id="bDel">Retirer</button>':''}<textarea id="mNotes" placeholder="Mes notes de dégustation, avec qui, à quelle occasion…">${esc(cur.mine.notes)}</textarea></div><p class="conf" id="saveNote"></p></section>`;
  bindMine();
}
function priceBar(d){
  const lo=n(d.price?.low),hi=n(d.price?.high)||lo,bb=n(d.value?.buy_below),me=cur.price?n(cur.price):null;
  if(lo==null)return '<p>Prix inconnu.</p>';
  const vals=[lo,hi,bb,me].filter(v=>v!=null),min=Math.max(0,Math.min(...vals)*.7),max=Math.max(...vals)*1.25,pc=v=>((v-min)/(max-min)*100).toFixed(1),al=v=>{const q=+pc(v);return q<18?'transform:none':q>82?'transform:translateX(-100%)':''};
  return `<div class="prail"><div class="pr" style="left:${pc(lo)}%;width:${Math.max(1,pc(hi)-pc(lo))}%"></div>${bb!=null?`<div class="pm good" style="left:${pc(bb)}%"><span style="${al(bb)}">Bonne affaire sous ${bb} €</span></div>`:''}${me!=null?`<div class="pm me" style="left:${pc(me)}%"><span style="${al(me)}">Votre prix : ${me} €</span></div>`:''}</div><div class="plab"><span>Prix habituel : <b>${fmtP(d.price)}</b></span></div>`;
}

function bindMine(){
  $('#stars').onclick=e=>{const b=e.target.closest('button');if(!b)return;cur.mine.rating=+b.dataset.s;[...$('#stars').children].forEach((x,i)=>x.classList.toggle('on',i<cur.mine.rating));autoSave()};
  $('#mStatus').onchange=e=>{cur.mine.status=e.target.value;autoSave()};
  $('#mNotes').oninput=e=>{cur.mine.notes=e.target.value;clearTimeout(bindMine._t);bindMine._t=setTimeout(autoSave,900)};
  $('#bSave').onclick=()=>save(true);
  const del=$('#bDel');if(del)del.onclick=remove;
  $('#saveNote').textContent='Votre cave est gardée sur cet appareil.';
}
const autoSave=()=>{if(cur.id)save(false)};

function renderChat(){
  const d=cur.data;$('#dWine').textContent=d.found?[d.producer,d.name,d.vintage].filter(Boolean).join(' · '):'Aucun vin identifié';
  const m=$('#msgs');
  m.innerHTML=(cur.chat.length?'':`<div class="m a">Bonjour ! Posez-moi n'importe quelle question sur ce vin : son goût, sa garde, un accord, le prix, ou un mot de l'étiquette que vous ne comprenez pas.</div>`)+cur.chat.map((x,i)=>`<div class="m ${x.role==='user'?'u':'a'}">${fmt(x.content)}${x.role==='assistant'&&TTS?`<button class="say" data-i="${i}">Écouter</button>`:''}</div>`).join('');
  m.scrollTop=m.scrollHeight;
  $('#sugg').innerHTML=(cur.chat.length?[]:(d.questions||[])).map(q=>`<button type="button">${esc(q)}</button>`).join('');
}
const fmt=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');

function renderAll(){$('#hero').classList.toggle('hasRes',!cur.sample);renderFinder();renderCard();renderDetails();renderChat()}

/* ---------- photo + analyse ---------- */
async function prep(file){
  const url=URL.createObjectURL(file);const im=new Image();
  await new Promise((r,j)=>{im.onload=r;im.onerror=j;im.src=url});
  const draw=(max,q,type)=>{const k=Math.min(1,max/Math.max(im.naturalWidth,im.naturalHeight));const c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*k);c.height=Math.round(im.naturalHeight*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);return type==='url'?c.toDataURL('image/jpeg',q):new Promise(r=>c.toBlob(r,'image/jpeg',q))};
  const blob=await draw(1500,.85),view=draw(900,.8,'url'),thumb=draw(240,.7,'url');URL.revokeObjectURL(url);return {blob,view,thumb};
}
const SCHEMA=`{"found":bool,"confidence":"haute|moyenne|faible","label_text":"texte lu sur l'étiquette","name":"nom de la cuvée","producer":"","appellation":"","classification":"ex. Grand Cru Classé, AOC, IGP, DOCG ou vide","region":"","country":"","vintage":"année ou NV","color":"rouge|blanc|rosé|effervescent|liquoreux|orange","grapes":[{"name":"","pct":nombre ou null}],"abv":"ex. 13,5 %",
"essentiel":{"style":"le goût en 6 mots max (ex. Rouge fruité et épicé, souple)","verdict_short":"2-3 mots : Excellent achat|Bon achat|Prix correct|Plutôt cher|À éviter","food":"2-3 plats en quelques mots","when":"quand le boire en quelques mots (ex. Maintenant, jusqu'en 2027)"},"summary":"2 phrases simples pour un débutant passionné","score":note sur 100 réaliste (consensus critique),"score_label":"Correct|Bon|Très bon|Excellent|Exceptionnel","quality_notes":"réputation du producteur et de la cuvée, 1-2 phrases",
"price":{"low":nombre,"high":nombre,"source":"web|estimation","note":"où et comment le prix a été établi"},"value":{"score":note sur 10 du rapport qualité/prix,"verdict":"1 phrase","buy_below":prix en € sous lequel c'est une bonne affaire},"shop_verdict":"si un prix magasin est fourni : bonne affaire, prix juste ou trop cher, et pourquoi ; sinon vide",
"profile":{"body":1-5,"acidity":1-5,"tannin":1-5,"sweetness":1-5,"fruit":1-5,"oak":1-5},"appearance":"","nose":["4-6 arômes"],"palate":"",
"serve":{"temp":"","decant":"","glass":"","window_from":année,"window_to":année,"peak":"","status":"Trop jeune|Prêt à boire|À son apogée|Sur le déclin"},"food":["4-6 plats concrets"],"avoid":["1-3"],
"vintage_note":"","terroir":"","producer_story":"","label_decode":[{"term":"mention lue sur l'étiquette","meaning":"explication simple"}],"lesson":["3 choses à retenir qui font progresser"],"glossary":[{"term":"","def":""}],
"alternatives":[{"type":"Même style, moins cher|Montée en gamme|Pour découvrir","name":"","why":"","price":"fourchette en €"}],"questions":["4 questions intéressantes à poser sur ce vin"]}`;
function prompt(text,price,web){
  return `Tu es un sommelier expert et pédagogue qui aide un amateur passionné, basé en France, à progresser. ${text?`Le vin à analyser est : « ${text} ».`:"Analyse la bouteille de vin sur la photo : lis attentivement l'étiquette."}
Nous sommes en ${YEAR}. Prix en euros, prix de vente public en France (caviste, grande surface, site marchand).${price?` Le client voit ce vin à ${price} € en magasin.`:''}
${web?"Utilise l'outil web_search (1 à 2 appels) pour vérifier le prix de vente actuel et la réputation de ce vin précis, puis mets price.source à \"web\" et indique dans price.note les sources ou sites consultés.":"Tu n'as pas accès au web : donne une estimation prudente et mets price.source à \"estimation\"."}
Règles : n'invente rien de précis que tu ne sais pas ; si un élément n'est pas lisible, déduis-le avec prudence et baisse la confiance. Si ce n'est pas une bouteille de vin ou si l'étiquette est illisible, renvoie found=false et explique dans summary ce qu'il faut refaire. Écris tout en français, avec des mots simples de tous les jours : phrases courtes (20 mots maximum par champ texte), pas de jargon sans explication.
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, selon ce schéma : ${SCHEMA}`;
}
const searchTool={name:'web_search'};
function parse(t){const s=String(t||''),a=s.indexOf('{'),b=s.lastIndexOf('}');if(a<0||b<a)throw new Error('json');return JSON.parse(s.slice(a,b+1))}
function busy(on,web){$('#hero').classList.toggle('busy',on);['#bCam','#bGal','#byName'].forEach(s=>$(s).disabled=on);if(on)$('#loadT').textContent=web?'Analyse et vérification des prix':'Analyse de la bouteille'}

async function analyze({blob,text,view,thumb}){
  if(!window.sommelierSettings.get().key){openSet();return}
  const price=n(String($('#price').value).replace(',','.'));const web=!!(MCP&&$('#web').checked);
  ac=new AbortController();busy(true,web);
  if(view){cur.img=view;renderFinder()}
  const opts={modelTier:'complex',signal:ac.signal};if(blob)opts.images=[blob];if(web)opts.tools=[searchTool];
  const p=prompt(text,price,web);
  try{
    const r=await S(p,opts);const d=parse(r.text);
    cur={data:norm(d),img:view||null,thumb:thumb||null,id:null,chat:[],mine:{rating:0,status:'',notes:''},price:price||null,sample:false};
    tab='gout';renderAll();lastSave();const cd=$('#card');cd.classList.remove('pop');void cd.offsetWidth;cd.classList.add('pop');cd.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(e){
    if(e?.name==='AbortError'||e?.code==='aborted'){toast('Analyse annulée.')}
    else if(e?.code==='not_granted'){toast("Clé API refusée ou absente : vérifiez-la dans Réglages.")}
    else if(e?.code==='rate_limited'){toast('Trop de demandes : patientez une minute puis réessayez.')}
    else if(e?.code==='network'){toast('Pas de connexion internet.')}
    else{toast("L'analyse a échoué. Reprenez la photo ou tapez le nom du vin.")}
  }finally{busy(false);ac=null}
}
$('#bCam').onclick=()=>$('#fCam').click();
$('#bGal').onclick=()=>$('#fGal').click();
const onFile=async e=>{const f=e.target.files?.[0];e.target.value='';if(!f)return;try{const r=await prep(f);analyze(r)}catch(err){toast("Impossible de lire cette image.")}};
$('#fCam').onchange=onFile;$('#fGal').onchange=onFile;
$('#byName').onkeydown=e=>{if(e.key==='Enter'&&e.target.value.trim()){e.preventDefault();cur.img=null;analyze({text:e.target.value.trim()})}};
$('#bStop').onclick=()=>ac?.abort();
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;tab=b.dataset.t;renderDetails()};
$('#cardIn').addEventListener('click',e=>{const b=e.target.closest('.qk button');if(b){openD();ask(b.textContent)}});

/* ---------- chat ---------- */
function ctx(){const d={...cur.data};delete d.questions;return `Tu es un sommelier chaleureux et pédagogue. Tu réponds aux questions d'un amateur passionné qui veut progresser, à propos de CE vin précis. Réponds en français, de façon concrète, en 60 à 160 mots, sans titres ; tu peux mettre un mot clé en **gras**. Si la question sort du vin, ramène-la gentiment au vin. Si tu n'es pas sûr d'un fait, dis-le. Nous sommes en ${YEAR}.${cur.price?` Prix vu en magasin : ${cur.price} €.`:''}
Fiche du vin (JSON) : ${JSON.stringify(d)}`}
let asking=false;
async function ask(q){
  q=String(q||'').trim();if(!q||asking)return;
  if(!window.sommelierSettings.get().key){closeD();openSet();return}
  if(!cur.data.found){toast("Identifiez d'abord un vin.");return}
  asking=true;$('#askB').disabled=true;$('#askI').value='';
  cur.chat.push({role:'user',content:q});cur.chat.push({role:'assistant',content:'…'});renderChat();
  const msgs=[{role:'user',content:ctx()},{role:'assistant',content:"Compris, j'ai la fiche sous les yeux. Je vous écoute."},...cur.chat.slice(0,-1).slice(-15)];
  const opts={modelTier:'default'};
  if(MCP&&$('#web').checked)opts.tools=[searchTool];
  try{const r=await S(msgs,opts);cur.chat[cur.chat.length-1].content=r.text||'…'}
  catch(e){cur.chat.pop();cur.chat.pop();toast(e?.code==='rate_limited'?'Trop de questions d’un coup : patientez un peu.':e?.code==='not_granted'?'Clé API refusée : vérifiez-la dans Réglages.':"Je n'ai pas pu répondre. Réessayez.")}
  finally{asking=false;$('#askB').disabled=false;renderChat();autoSave()}
}
$('#askF').onsubmit=e=>{e.preventDefault();ask($('#askI').value)};
$('#sugg').onclick=e=>{const b=e.target.closest('button');if(b)ask(b.textContent)};
$('#msgs').onclick=e=>{const b=e.target.closest('.say');if(!b||!TTS)return;const t=cur.chat[+b.dataset.i]?.content||'';TTS.speak(t.replace(/\*\*/g,'').slice(0,2000),{language:'fr'}).catch(()=>{})};
const bg=()=>document.querySelectorAll('header.top,main,.toast');
const openD=()=>{$('#drawer').classList.add('open');$('#drawer').setAttribute('aria-hidden','false');bg().forEach(e=>e.inert=true);$('#fab').hidden=true;setTimeout(()=>$('#askI').focus(),200)};
const closeD=()=>{const was=$('#drawer').classList.contains('open');$('#drawer').classList.remove('open');$('#drawer').setAttribute('aria-hidden','true');bg().forEach(e=>e.inert=false);$('#fab').hidden=$('#vScan').hidden;if(was&&!$('#fab').hidden)$('#fab').focus()};
$('#fab').onclick=openD;$('#dClose').onclick=closeD;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeD()});
let dicOn=false;
$('#mic').onclick=()=>{if(!DIC)return;if(dicOn){DIC.stop().catch(()=>{});return}DIC.start().catch(()=>{toast('Micro indisponible : tapez votre question.')})};

/* ---------- cave ---------- */
let dupMsgG='';
async function save(manual){
  if(!cur.data.found)return;
  let dupMsg='';
  if(!cur.id){const dup=cave.find(w=>w.data&&keyOf(w.data)===keyOf(cur.data));if(dup){cur.id=dup.id;cur.created=dup.created;dupMsg='Cette bouteille était déjà dans votre cave : fiche mise à jour.'}else cur.id='w'+Date.now().toString(36)}
  const doc={data:cur.data,thumb:cur.thumb||'',mine:cur.mine,price:cur.price||null,chat:cur.chat.slice(-20),created:cur.created||Date.now(),updated:Date.now()};
  cur.created=doc.created;
  const a=cave.filter(w=>w.id!==cur.id);a.push(Object.assign({id:cur.id},doc));
  if(!lsPut(a))toast('Stockage local plein ou indisponible : la cave ne sera pas conservée.');
  cave=a;
  if(manual){toast(dupMsg||'Ajouté à votre cave.');renderDetails()}
  const sn=$('#saveNote');if(sn)sn.textContent='Enregistré.';
}
async function remove(){if(!cur.id)return;cave=cave.filter(w=>w.id!==cur.id);lsPut(cave);cur.id=null;toast('Retiré de votre cave.');renderDetails()}
const SORTS={recent:(a,b)=>(b.updated||0)-(a.updated||0),score:(a,b)=>(n(b.data?.score)||0)-(n(a.data?.score)||0),value:(a,b)=>(n(b.data?.value?.score)||0)-(n(a.data?.value?.score)||0),price:(a,b)=>(n(a.data?.price?.low)??1e9)-(n(b.data?.price?.low)??1e9),mine:(a,b)=>(b.mine?.rating||0)-(a.mine?.rating||0)};
let cmpOn=false,cmpSel=[];
function renderCmp(){
  const box=$('#cmp');$('#bCmp').textContent=cmpOn?'Quitter la comparaison':'Comparer deux vins';
  if(!cmpOn){box.innerHTML='';return}
  const ws=cmpSel.map(id=>cave.find(w=>w.id===id)).filter(Boolean);
  if(ws.length<2){box.innerHTML=`<div class="empty">Touchez deux bouteilles de votre cave pour les comparer (${ws.length}/2).</div>`;return}
  const R=[['Note',w=>n(w.data.score)!=null?w.data.score+'/100':'—',w=>n(w.data.score)],['Qualité/prix',w=>n(w.data.value?.score)!=null?w.data.value.score+'/10':'—',w=>n(w.data.value?.score)],['Prix',w=>fmtP(w.data.price),w=>n(w.data.price?.low)!=null?-n(w.data.price.low):null],['Style',w=>esc(ess(w.data).style)],['Corps',w=>esc(lvl('body',w.data.profile?.body).w)],['Tanins',w=>esc(lvl('tannin',w.data.profile?.tannin).w)],['Acidité',w=>esc(lvl('acidity',w.data.profile?.acidity).w)],['À boire',w=>esc(ess(w.data).when)],['Accords',w=>esc(ess(w.data).food)],['Mes étoiles',w=>'★'.repeat(w.mine?.rating||0)||'—',w=>w.mine?.rating||null]];
  const body=R.map(([t,f,k])=>{const ks=k?ws.map(k):[],win=k&&ks[0]!=null&&ks[1]!=null&&ks[0]!==ks[1]?(ks[0]>ks[1]?0:1):-1;return `<tr><td>${t}</td>${ws.map((w,i)=>`<td>${i===win?`<b>${f(w)}</b>`:f(w)}</td>`).join('')}</tr>`}).join('');
  const qv=ws.map(w=>n(w.data.value?.score)||0),best=qv[0]===qv[1]?null:ws[qv[0]>qv[1]?0:1];
  box.innerHTML=`<div class="scroll"><table class="cmpT"><thead><tr><th></th>${ws.map(w=>`<th>${esc(w.data.name)} ${esc(w.data.vintage)}<br><small style="font-family:Inter,sans-serif;font-weight:400;color:var(--mute)">${esc(w.data.producer)}</small></th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div><p class="conf">En vert : le meilleur des deux sur la ligne.${best?` Meilleur rapport qualité/prix : <b>${esc(best.data.name)}</b>.`:''}</p>`;
}
function renderCave(){
  renderCmp();
  const all=cave,q=$('#q').value.toLowerCase().trim(),fc=$('#fColor').value,fs=$('#fStatus').value;
  const reg=new Set(),gr=new Set(),ctry=new Set();let sum=0,k=0;
  all.forEach(w=>{const d=w.data||{};d.region&&reg.add(d.region);d.country&&ctry.add(d.country);(d.grapes||[]).forEach(g=>g.name&&gr.add(g.name));if(n(d.score)){sum+=n(d.score);k++}});
  $('#stats').innerHTML=[[all.length,'bouteilles scannées'],[reg.size,'régions explorées'],[gr.size,'cépages découverts'],[ctry.size,'pays'],[k?Math.round(sum/k):'—','note moyenne /100']].map(([v,l])=>`<div class="stat"><b>${esc(v)}</b><span>${l}</span></div>`).join('');
  $('#know').innerHTML=[...gr].sort().map(g=>`<span class="chip">${esc(g)}</span>`).join('');
  const list=all.filter(w=>{const d=w.data||{};const hay=[d.name,d.producer,d.appellation,d.region,d.country,...(d.grapes||[]).map(g=>g.name)].join(' ').toLowerCase();return(!q||hay.includes(q))&&(!fc||d.color===fc)&&(!fs||w.mine?.status===fs)&&(!$('#fNow').checked||drinkNow(d))}).sort(SORTS[$('#fSort').value]||SORTS.recent);
  const L=$('#caveList');
  if(!all.length){L.innerHTML=`<div class="empty">Aucune bouteille pour l'instant. Scannez un vin puis touchez « Ajouter à ma cave ».</div>`;return}
  if(!list.length){L.innerHTML='<div class="empty">Aucun vin ne correspond à ces filtres.</div>';return}
  L.innerHTML=list.map(w=>{const d=w.data||{};const st='★'.repeat(w.mine?.rating||0);return `<button class="bt${cmpSel.includes(w.id)?' sel':''}" data-id="${esc(w.id)}">${w.thumb&&String(w.thumb).startsWith('data:image/')?`<img src="${esc(w.thumb)}" alt="">`:'<span class="ph"></span>'}<span><b>${esc(d.name)} ${esc(d.vintage||'')}</b><small>${esc(d.producer)} · ${esc(d.appellation)}</small><small>${esc(w.mine?.status||'')} ${st?`<span style="color:#c9932a">${st}</span>`:''}</small></span><span class="sc">${n(d.score)??'—'}<small>/100</small><br><small>Q/P ${n(d.value?.score)??'—'}</small></span></button>`}).join('');
}
$('#caveList').onclick=e=>{const b=e.target.closest('.bt');if(!b)return;const w=cave.find(x=>x.id===b.dataset.id);if(!w)return;if(cmpOn){cmpSel=cmpSel.includes(w.id)?cmpSel.filter(x=>x!==w.id):[...cmpSel,w.id].slice(-2);renderCave();return}tab='gout';cur={data:w.data,img:w.thumb||null,thumb:w.thumb||null,id:w.id,created:w.created,chat:w.chat||[],mine:Object.assign({rating:0,status:'',notes:''},w.mine),price:w.price||null,sample:false};location.hash='scan';renderAll()};
['#q','#fColor','#fStatus','#fSort','#fNow'].forEach(s=>$(s).addEventListener('input',renderCave));
$('#fNow').addEventListener('change',renderCave);
$('#bCmp').onclick=()=>{cmpOn=!cmpOn;cmpSel=[];renderCave()};

/* ---------- réglages, export / import ---------- */
function openSet(){
  const st=window.sommelierSettings.get();
  $('#sKey').value=st.key||'';$('#sComplex').value=st.complex||'';$('#sFast').value=st.fast||'';
  $('#sComplex').placeholder=window.sommelierSettings.DEF.complex;$('#sFast').placeholder=window.sommelierSettings.DEF.fast;
  const d=$('#dSet');if(!d.open)d.showModal();
}
$('#bSet').onclick=openSet;
window.addEventListener('need-key',()=>{toast('Ajoutez votre clé API dans Réglages.');openSet()});
$('#setF').addEventListener('submit',e=>{
  if(e.submitter&&e.submitter.value==='save'){
    const ok=window.sommelierSettings.set({key:$('#sKey').value.trim(),complex:$('#sComplex').value.trim(),fast:$('#sFast').value.trim()});
    toast(ok?'Réglages enregistrés.':'Impossible d’enregistrer sur cet appareil.');
  }
});
$('#bExp').onclick=()=>{
  if(!cave.length){toast('Votre cave est vide.');return}
  const blob=new Blob([JSON.stringify({app:'mon-sommelier',version:1,cave},null,1)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ma-cave-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);
};
$('#bImp').onclick=()=>$('#fImp').click();
$('#fImp').onchange=async e=>{
  const f=e.target.files?.[0];e.target.value='';if(!f)return;
  try{
    const j=JSON.parse(await f.text());const items=arr(j.cave||j).filter(w=>w&&w.id&&w.data);
    if(!items.length){toast('Fichier sans bouteille valide.');return}
    const m=new Map(cave.map(w=>[w.id,w]));items.forEach(w=>m.set(w.id,Object.assign(w,{data:norm(w.data)})));
    cave=[...m.values()];lsPut(cave);toast(items.length+' bouteille(s) importée(s).');renderCave();
  }catch(err){toast('Fichier illisible.')}
};
$('#bWipe').onclick=()=>{
  if($('#bWipe').dataset.sure!=='1'){$('#bWipe').dataset.sure='1';$('#bWipe').textContent='Confirmer l’effacement';setTimeout(()=>{$('#bWipe').dataset.sure='';$('#bWipe').textContent='Tout effacer'},4000);return}
  cave=[];lsPut([]);try{localStorage.removeItem(LSL)}catch(e){}$('#bWipe').dataset.sure='';$('#bWipe').textContent='Tout effacer';toast('Cave effacée.');renderCave();
};

const CFG={doneStatus:'Goûté',itemWord:'un vin',caveWord:'cave',
gameTitle:'Testez votre nez',gameHint:'Faites tourner le vin dans le verre, sentez, puis touchez les familles d’arômes que vous reconnaissez. Ensuite, comparez avec l’expert.',
pointsRule:'Vous gagnez 1 point par vin enregistré, 2 par vin goûté, 2 par test de nez et 1 par note de dégustation écrite.',
mustTitle:'Les 12 vins à connaître',mustHint:'Ils se cochent tout seuls quand vous enregistrez un vin du bon style dans votre cave.',
families:[
{k:'fr',name:'Fruits rouges',col:'#d43a4f',kw:['fruits rouges','fraise','framboise','cerise','groseille','canneberge','grenade']},
{k:'fn',name:'Fruits noirs',col:'#4b1a3a',kw:['fruits noirs','mûre','cassis','myrtille','prune','pruneau']},
{k:'ag',name:'Agrumes',col:'#e8b923',kw:['agrume','citron','pamplemousse','orange','zeste','mandarine','bergamote']},
{k:'fb',name:'Fruits blancs et jaunes',col:'#a9b83a',kw:['pomme','poire','pêche','abricot','coing','fruits blancs','fruits jaunes']},
{k:'ex',name:'Fruits exotiques',col:'#f08a24',kw:['exotique','ananas','mangue','passion','litchi','banane']},
{k:'fl',name:'Floral',col:'#d77fb3',kw:['floral','fleur','violette','rose','acacia','aubépine','tilleul','jasmin','pivoine']},
{k:'ep',name:'Épices',col:'#9a4a1d',kw:['épice','poivre','cannelle','clou de girofle','réglisse','muscade','anis']},
{k:'bo',name:'Boisé et toasté',col:'#8a6440',kw:['boisé','bois','chêne','vanille','toast','fumé','grillé','café','cacao','moka','cèdre']},
{k:'ve',name:'Herbes et végétal',col:'#5f8a2c',kw:['herbe','garrigue','thym','romarin','menthe','poivron','foin','laurier','eucalyptus','buis','végétal']},
{k:'mi',name:'Minéral',col:'#8c99a3',kw:['minéral','pierre','silex','craie','iodé','salin','pétrole','graphite']},
{k:'go',name:'Gourmand',col:'#d9a35b',kw:['miel','beurre','brioche','caramel','amande','noisette','pain','pâtisserie','cire']},
{k:'te',name:'Terre et sous-bois',col:'#5b4636',kw:['sous-bois','champignon','cuir','tabac','truffe','terre','humus','gibier']}],
musts:(()=>{const h=d=>[d.appellation,d.region,d.name,d.country,d.classification,(d.grapes||[]).map(g=>g.name).join(' ')].join(' ').toLowerCase(),has=(d,a)=>a.some(k=>h(d).includes(k));return [
{t:'Un Bordeaux rouge',d:'Merlot et Cabernet, la référence mondiale',test:d=>d.color==='rouge'&&has(d,['bordeaux','médoc','saint-émilion','pauillac','margaux','pessac','graves','pomerol','saint-julien','saint-estèphe'])},
{t:'Un Pinot Noir de Bourgogne',d:'Le rouge fin et délicat',test:d=>d.color==='rouge'&&has(d,['pinot noir','bourgogne','côte de nuits','côte de beaune','gevrey','beaune','volnay','pommard','mercurey'])},
{t:'Un Beaujolais',d:'Le Gamay, fruité et léger',test:d=>has(d,['gamay','beaujolais','morgon','fleurie','moulin-à-vent','brouilly','juliénas','chiroubles'])},
{t:'Un rouge du Rhône',d:'Syrah et Grenache, chaleur et épices',test:d=>d.color==='rouge'&&has(d,['rhône','syrah','grenache','châteauneuf','gigondas','crozes','vacqueyras','côte-rôtie'])},
{t:'Un Sauvignon de Loire',d:'Blanc vif aux agrumes',test:d=>has(d,['sancerre','pouilly-fumé','sauvignon','quincy','menetou','reuilly','touraine'])},
{t:'Un Chardonnay de Bourgogne',d:'Le grand blanc, de Chablis à Meursault',test:d=>d.color==='blanc'&&has(d,['chablis','chardonnay','meursault','mâcon','pouilly-fuissé','puligny','chassagne'])},
{t:'Un Riesling d’Alsace',d:'Blanc tendu et minéral',test:d=>has(d,['riesling','alsace'])},
{t:'Un Champagne ou un crémant',d:'Les bulles et leur méthode',test:d=>d.color==='effervescent'||has(d,['champagne','crémant'])},
{t:'Un rosé de Provence',d:'Pâle, sec et frais',test:d=>d.color==='rosé'},
{t:'Un vin liquoreux',d:'Sauternes et vins doux',test:d=>d.color==='liquoreux'||has(d,['sauternes','barsac','monbazillac','loupiac','coteaux du layon','vendanges tardives'])},
{t:'Un Rioja',d:'L’Espagne et le Tempranillo',test:d=>has(d,['rioja','tempranillo','ribera','espagne'])},
{t:'Un rouge italien',d:'Chianti, Barolo, Sangiovese…',test:d=>has(d,['italie','chianti','sangiovese','barolo','nebbiolo','toscane','valpolicella','montepulciano','primitivo'])}]})(),
basics:[
['Lire une étiquette',['<b>Appellation</b> : le lieu d’origine, avec ses règles (cépages, rendements). Plus le lieu est précis, plus le vin est en général ambitieux.','<b>Millésime</b> : l’année de la vendange.','<b>Domaine, château</b> : le vigneron fait le vin avec ses propres raisins. <b>Négociant</b> : il achète raisins ou vins et les assemble.','<b>Mis en bouteille au domaine (ou au château)</b> : tout est fait sur place, du raisin à la bouteille.']],
['Déguster en 4 temps',['<b>Regarder</b> : la couleur et son intensité.','<b>Sentir</b> : d’abord sans bouger le verre, puis en le faisant tourner pour libérer les arômes.','<b>Goûter</b> : une petite gorgée, gardée quelques secondes. Notez le début, le milieu et la fin.','<b>Conclure</b> : plus le goût reste longtemps après avoir avalé, plus le vin est en général de qualité.']],
['Les bonnes températures',['Bulles : 6 à 8 °C.','Blancs secs et rosés : 8 à 12 °C.','Rouges légers (Beaujolais, Pinot Noir) : 13 à 15 °C.','Rouges puissants (Bordeaux, Rhône) : 16 à 18 °C.','Liquoreux : 8 à 10 °C.','Astuce : un rouge trop chaud paraît lourd et alcoolisé. 15 minutes au frigo le réveillent.']],
['Les accords simples',['Ce qui vient de la même région va souvent bien ensemble.','Un plat gras ou crémeux aime un vin vif.','Une viande rouge aime un rouge avec des tanins.','Avec un dessert, choisissez un vin au moins aussi sucré que le dessert.','Fromage de chèvre et Sauvignon blanc : un classique.']],
['Conserver ses bouteilles',['Couchées, dans le noir, au calme.','Idéal : 12 à 14 °C, stable, et environ 70 % d’humidité.','Une bouteille ouverte se garde 2 à 3 jours, rebouchée, au réfrigérateur (même un rouge).']]]};

/* ---------- familles d'arômes, jeu, apprendre ---------- */
const FAM=CFG.families;
const famOf=s=>{s=String(s||'').toLowerCase();return FAM.find(f=>f.kw.some(k=>s.includes(k)))};
const aromaChip=x=>{const f=famOf(x);return `<span class="tag ar" title="${f?esc(f.name):''}"><i style="background:${f?f.col:'var(--line)'}"></i>${esc(x)}</span>`};
const gMsg=(h,n)=>!n?'':h===n?'Sans faute, bravo !':h/n>=.5?'Très bien, votre nez progresse.':h?'Bon début : ça s’apprend en pratiquant.':'C’est normal au début. Relisez les arômes de l’expert et sentez de nouveau.';
function gameHtml(list){
  const exp=[...new Set((list||[]).map(famOf).filter(Boolean).map(f=>f.k))];
  const t=cur.mine.tasting||{picked:[],done:false};
  const chips=FAM.map(f=>{const on=t.picked.includes(f.k);let c=on?'on':'';if(t.done)c+=exp.includes(f.k)?(on?' hit':' miss'):(on?' extra':' off');return `<button type="button" class="fam ${c}" data-f="${f.k}" aria-pressed="${on}" ${t.done?'disabled':''}><i style="background:${f.col}"></i>${esc(f.name)}</button>`}).join('');
  let r;
  if(t.done){const h=exp.filter(k=>t.picked.includes(k)).length;r=`<div class="gres"><b>${h} sur ${exp.length}</b><span>${gMsg(h,exp.length)}</span></div><p class="conf">Vert : trouvé. Pointillé : à chercher la prochaine fois. Gris : non cité par l'expert, votre nez a peut-être raison.</p><button type="button" class="btn line" id="gRe">Recommencer</button>`}
  else r=`<button type="button" class="btn solid" id="gGo" ${t.picked.length?'':'disabled'}>Comparer avec l'expert</button>`;
  return `<section class="sec full game"><h3>${CFG.gameTitle}</h3><p>${CFG.gameHint}</p><div class="fams">${chips}</div>${r}</section>`;
}
$('#details').addEventListener('click',e=>{
  const f=e.target.closest('.fam');
  if(f&&!f.disabled){const t=cur.mine.tasting||(cur.mine.tasting={picked:[],done:false});const k=f.dataset.f;t.picked=t.picked.includes(k)?t.picked.filter(x=>x!==k):[...t.picked,k];renderDetails();return}
  if(e.target.closest('#gGo')){cur.mine.tasting.done=true;cur.mine.tasting.date=Date.now();renderDetails();autoSave();return}
  if(e.target.closest('#gRe')){cur.mine.tasting={picked:[],done:false};renderDetails();autoSave()}
});
const LEVELS=[[0,'Curieux'],[5,'Apprenti'],[15,'Amateur'],[30,'Initié'],[60,'Connaisseur']];
function renderLearn(){
  const all=cave,done=all.filter(w=>w.mine?.status===CFG.doneStatus).length,games=all.filter(w=>w.mine?.tasting?.done).length;
  const pts=all.length+done*2+games*2+all.filter(w=>(w.mine?.notes||'').trim().length>20).length;let i=0;LEVELS.forEach((x,j)=>{if(pts>=x[0])i=j});const nx=LEVELS[i+1];
  const pct=nx?Math.round((pts-LEVELS[i][0])/(nx[0]-LEVELS[i][0])*100):100;
  const musts=CFG.musts.map(m=>({...m,ok:all.some(w=>m.test(w.data||{}))})),nOk=musts.filter(m=>m.ok).length;
  const lex=new Map();all.forEach(w=>(w.data?.glossary||[]).forEach(g=>{const k=String(g.term||'').toLowerCase().trim();if(k&&!lex.has(k))lex.set(k,g)}));
  const L=[...lex.values()].sort((a,b)=>String(a.term).localeCompare(String(b.term),'fr'));
  $('#lvl').innerHTML=`<div class="lvlTop"><div><span class="conf" style="color:rgba(255,255,255,.75)">Votre niveau</span><b class="lvlName">${LEVELS[i][1]}</b></div><div class="lvlPts"><b>${pts}</b><span>points</span></div></div><div class="lvlBar"><i style="width:${pct}%"></i></div><p class="lvlNext">${nx?`Encore ${nx[0]-pts} points pour devenir <b>${nx[1]}</b>.`:'Niveau maximum atteint, chapeau !'} ${CFG.pointsRule}</p>`;
  $('#learnBody').innerHTML=`
  <section class="sec full"><h3>${CFG.mustTitle} <small class="cnt">${nOk}/${musts.length}</small></h3><p class="conf">${CFG.mustHint}</p><div class="musts">${musts.map(m=>`<div class="must ${m.ok?'ok':''}"><span class="ck" aria-hidden="true"></span><b>${esc(m.t)}</b><small>${esc(m.d)}</small></div>`).join('')}</div></section>
  <section class="sec full"><h3>Les bases en 2 minutes</h3><div class="basics">${CFG.basics.map((b,j)=>`<details ${j===0?'open':''}><summary>${esc(b[0])}</summary><ul>${b[1].map(x=>`<li>${x}</li>`).join('')}</ul></details>`).join('')}</div></section>
  <section class="sec full"><h3>Mon lexique <small class="cnt">${L.length} mots</small></h3>${L.length?`<dl class="lex">${L.map(g=>`<div><dt>${esc(g.term)}</dt><dd>${esc(g.def)}</dd></div>`).join('')}</dl>`:`<p class="conf">Les mots appris sur chaque fiche s'ajoutent ici quand vous enregistrez ${CFG.itemWord} dans votre ${CFG.caveWord}.</p>`}</section>`;
}

function route(){const h=location.hash,v=h==='#cave'?'cave':h==='#learn'?'learn':'scan';$('#vScan').hidden=v!=='scan';$('#vCave').hidden=v!=='cave';$('#vLearn').hidden=v!=='learn';document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===v)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});if(v==='cave')renderCave();if(v==='learn')renderLearn();$('#fab').hidden=v!=='scan'||$('#drawer').classList.contains('open');window.scrollTo(0,0)}
window.addEventListener('hashchange',route);

/* ---------- démarrage ---------- */
S=window.claude.use('sample');MCP=window.claude.use('mcp');DIC=window.claude.use('dictation');TTS=window.claude.use('tts');
cave=lsGet().filter(w=>w&&w.data).map(w=>Object.assign(w,{data:norm(w.data)}));
try{const l=JSON.parse(localStorage.getItem(LSL)||'null');if(l&&l.data&&l.data.found){cur={data:norm(l.data),img:null,thumb:null,id:null,chat:[],mine:{rating:0,status:'',notes:''},price:l.price||null,sample:false}}}catch(e){}
if(DIC){$('#mic').hidden=false;DIC.onState(({state})=>{dicOn=state==='listening';$('#mic').classList.toggle('on',dicOn);$('#mic').textContent=dicOn?'Stop':'Micro'});DIC.onPartial(({text})=>{$('#askI').placeholder=text||'Je vous écoute…'});DIC.onFinal(({text})=>{const i=$('#askI');i.value=(i.value?i.value+' ':'')+text;i.placeholder='Posez votre question sur ce vin'})}
renderAll();route();
if(!window.sommelierSettings.get().key)setTimeout(openSet,600);
}
