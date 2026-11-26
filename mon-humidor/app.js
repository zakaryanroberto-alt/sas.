{
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const YEAR=new Date().getFullYear();
const SAMPLE={found:true,confidence:"haute",band_text:"MONTECRISTO · HABANA",brand:"Montecristo",line:"Línea Clásica",vitola:"No. 4",format:"Petit Corona (vitola de galera : Mareva)",length_mm:129,ring:42,country:"Cuba",factory:"",wrapper:"Cubaine, Vuelta Abajo",binder:"Cubaine",filler:"Cubaine, Vuelta Abajo",cuban:true,
essentiel:{style:"Boisé, cacao et café, rond",verdict_short:"Bon achat",when:"45 min · après le déjeuner",drink:"Espresso ou rhum vieux"},
summary:"Le Habano le plus célèbre du monde, et une excellente porte d'entrée. Format court, force moyenne, arômes de cèdre, de cacao et de café : un cigare régulier qu'on fume en moins d'une heure.",
score:88,score_label:"Très bon",quality_notes:"Référence absolue des petits coronas cubains. Grande constance de fabrication grâce à des volumes très importants, avec parfois quelques variations d'une boîte à l'autre.",
price:{low:12,high:15,source:"estimation",note:"En France, le prix est homologué : il est identique dans tous les bureaux de tabac."},
value:{score:7.5,verdict:"Bon rapport qualité/prix pour un Habano classique, idéal pour apprendre.",buy_below:14},shop_verdict:"",
profile:{strength:3,body:3,sweetness:2,spice:3,earth:3,wood:4,cream:2},
aromas:["bois de cèdre","cacao","café","cuir","épices douces"],draw:"Tirage facile et régulier quand le cigare est bien conservé.",burn:"Combustion assez droite, cendre grise et compacte.",
thirds:{first:"Ouverture boisée et légèrement poivrée, avec le cèdre au premier plan.",second:"Arrivée du cacao et du café, la fumée devient plus ronde et plus douce.",last:"Plus de terre et de cuir, l'intensité monte doucement en fin de cigare."},
smoke:{duration:"40 à 50 min",moment:"Après le déjeuner ou avec un café",level:"Débutant à intermédiaire",cut:"Coupe droite au coupe-cigare, 2 à 3 mm sous la tête",light:"Chauffez le pied à distance avec une allumette longue ou un briquet torche, en tournant, sans que la flamme touche le tabac"},
pairings:["Espresso","Rhum vieux","Cognac VSOP","Whisky du Speyside"],avoid:["Boissons très sucrées","Vin blanc léger"],
storage:{humidity:"65 à 70 % d'humidité",temp:"16 à 18 °C",aging:"Gagne en rondeur après 2 à 5 ans en humidor",note:"Gardez-le dans son cellophane si vous n'avez pas d'humidor, quelques jours maximum."},
authenticity:["Sceau de garantie du gouvernement cubain sur la boîte","Étiquette Habanos et sceau holographique sur les boîtes récentes","Bague nette, dorure précise, texte sans faute","Cigare ferme et homogène au toucher, cape fine sans grosses veines","En France, achetez en bureau de tabac : la filière est contrôlée"],
history:"Marque créée en 1935 à La Havane. Son nom vient du roman d'Alexandre Dumas « Le Comte de Monte-Cristo », très apprécié des rouleurs à qui un lecteur lisait des livres pendant le travail. Le No. 4 est souvent cité comme le Habano le plus vendu au monde.",
terroir:"Tabacs de la Vuelta Abajo, dans la province de Pinar del Río, à l'ouest de Cuba : la région la plus réputée au monde pour le tabac à cigare.",
band_decode:[{term:"Montecristo",meaning:"La marque, l'une des plus connues des Habanos."},{term:"Habana",meaning:"Indique un cigare cubain, fabriqué à Cuba avec du tabac cubain."},{term:"Épées croisées et fleur de lys",meaning:"Le logo de la marque, inspiré des mousquetaires et du roman de Dumas."},{term:"No. 4",meaning:"Le numéro du format dans la gamme. En fabrique, ce format s'appelle Mareva : 129 mm, cepo 42."}],
lesson:["Un cigare a trois parties : la tripe au cœur, qui donne surtout la force, la sous-cape qui tient l'ensemble, et la cape extérieure, qui apporte beaucoup d'arôme.","Le cepo (ring gauge) mesure le diamètre en 64es de pouce : un cepo 42 fait environ 16,7 mm.","Ne secouez pas la cendre : laissez-la tomber seule, elle protège la combustion et refroidit la fumée."],
glossary:[{term:"Vitola",def:"Le format d'un cigare : longueur, diamètre et forme."},{term:"Cape",def:"La feuille extérieure, la plus belle, qui donne son aspect et une bonne part du goût."},{term:"Tirage",def:"La facilité avec laquelle la fumée passe quand on aspire."}],
alternatives:[{type:"Même style, moins cher",name:"Un petit corona Romeo y Julieta",why:"Cubain aussi, un peu plus doux et floral",price:"≈ 9–12 €"},{type:"Montée en gamme",name:"Cohiba Siglo II",why:"Même format Mareva, plus raffiné, notes de miel et de foin",price:"≈ 20–25 €"},{type:"Pour découvrir",name:"Un robusto du Nicaragua",why:"Plus poivré et terreux, pour comparer avec Cuba",price:"≈ 10–15 €"}],
questions:["Comment bien couper et allumer ce cigare ?","Quelle boisson pour le sublimer ?","Combien de temps le garder en humidor ?","Comment reconnaître un faux Montecristo ?"]};

let cur={data:SAMPLE,img:null,thumb:null,id:null,chat:[],mine:{rating:0,status:'',notes:'',qty:''},price:null,sample:true};
let S=null,MCP=null,DIC=null,TTS=null,cave=[],ac=null;
const toast=t=>{const e=$('#toast');e.textContent=t;e.classList.add('show');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('show'),4200)};
const CIGAR=`<svg viewBox="0 0 400 300" role="img" aria-label="Cigare"><defs><linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b8784a"/><stop offset=".45" stop-color="#7a4626"/><stop offset="1" stop-color="#3a1e0d"/></linearGradient><linearGradient id="bd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8c56a"/><stop offset=".5" stop-color="#c9932a"/><stop offset="1" stop-color="#8a5f12"/></linearGradient></defs><ellipse cx="205" cy="232" rx="160" ry="10" fill="#000" opacity=".3"/><g transform="rotate(-12 200 160)"><path d="M48 140h270c22 0 36 9 36 20s-14 20-36 20H48z" fill="url(#cg)"/><rect x="40" y="140" width="10" height="40" fill="#9a9087"/><rect x="34" y="141" width="8" height="38" rx="2" fill="#c8c0b6"/><path d="M60 146c60-4 170-4 240 0" stroke="#fff" stroke-opacity=".2" stroke-width="3" fill="none"/><path d="M120 142l-20 36M200 142l-14 36" stroke="#2a1408" stroke-opacity=".25" stroke-width="1.5"/><rect x="248" y="139" width="34" height="42" fill="url(#bd)"/><rect x="248" y="149" width="34" height="22" fill="#b3302a"/><circle cx="265" cy="160" r="7" fill="#e8c56a"/></g><path d="M40 176c-14-22 10-34-2-58s8-36 0-58" stroke="#fff" stroke-opacity=".28" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`;
const n=v=>{const x=Number(v);return isFinite(x)&&v!==null&&v!==''?x:null};
const fmtP=p=>p&&n(p.low)!=null?(n(p.high)&&n(p.high)!==n(p.low)?`${n(p.low)}–${n(p.high)} €`:`${n(p.low)} €`):'—';
const mm=d=>n(d.length_mm)?`${n(d.length_mm)} mm × cepo ${n(d.ring)??'?'}`:'';
const arr=v=>Array.isArray(v)?v:[];
const str=v=>v==null?'':String(v);
function norm(d){
  d=d&&typeof d==='object'?d:{};
  const o=Object.assign({found:true},d);
  ['band_text','brand','line','vitola','format','country','factory','wrapper','binder','filler','summary','draw','burn','history','terroir','quality_notes','shop_verdict','score_label'].forEach(k=>o[k]=str(o[k]));
  o.cuban=o.cuban===true;
  o.length_mm=n(o.length_mm);o.ring=n(o.ring);
  ['aromas','pairings','avoid','authenticity','lesson','questions'].forEach(k=>o[k]=arr(o[k]).map(str).filter(Boolean));
  ['band_decode','glossary','alternatives'].forEach(k=>o[k]=arr(o[k]).filter(x=>x&&typeof x==='object'));
  const p=o.profile&&typeof o.profile==='object'?o.profile:{};o.profile={};
  ['strength','body','sweetness','spice','earth','wood','cream'].forEach(k=>o.profile[k]=Math.max(1,Math.min(5,Math.round(n(p[k])||3))));
  o.essentiel=o.essentiel&&typeof o.essentiel==='object'?o.essentiel:{};
  o.thirds=Object.assign({first:'',second:'',last:''},o.thirds&&typeof o.thirds==='object'?o.thirds:{});
  o.smoke=Object.assign({duration:'',moment:'',level:'',cut:'',light:''},o.smoke&&typeof o.smoke==='object'?o.smoke:{});
  o.storage=Object.assign({humidity:'',temp:'',aging:'',note:''},o.storage&&typeof o.storage==='object'?o.storage:{});
  o.price=o.price&&typeof o.price==='object'&&n(o.price.low)!=null?Object.assign({},o.price):null;
  if(o.price&&n(o.price.high)!=null&&n(o.price.high)<n(o.price.low)){const t=o.price.low;o.price.low=o.price.high;o.price.high=t}
  o.value=Object.assign({},o.value&&typeof o.value==='object'?o.value:{});
  const s=n(o.score);o.score=s==null?null:Math.max(0,Math.min(100,Math.round(s)));
  const v=n(o.value.score);o.value.score=v==null?null:Math.max(0,Math.min(10,v));
  if(!o.price||o.price.source!=='web')o.value.buy_below=null;
  return o;
}
/* ---------- stockage local ---------- */
const LS='mon-humidor-cave',LSL='mon-humidor-last';
const lsGet=()=>{try{const a=JSON.parse(localStorage.getItem(LS)||'[]');return Array.isArray(a)?a:[]}catch(e){return[]}};
const lsPut=a=>{try{localStorage.setItem(LS,JSON.stringify(a));return true}catch(e){return false}};
const keyOf=d=>[d.brand,d.vitola].map(x=>String(x||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'')).join('|');
const lastSave=()=>{try{localStorage.setItem(LSL,JSON.stringify({data:cur.data,price:cur.price}))}catch(e){}};

function renderFinder(){const ok=cur.img&&String(cur.img).startsWith('data:image/');$('#vfIn').innerHTML=ok?`<img src="${esc(cur.img)}" alt="Photo du cigare">`:CIGAR;const im=$('#vfIn img');if(im)im.onerror=()=>{$('#vfIn').innerHTML=CIGAR}}
const WORDS={strength:['Très légère','Légère','Moyenne','Corsée','Très corsée'],body:['Très léger','Léger','Moyen','Plein','Très plein'],sweetness:['Aucune','Légère','Présente','Marquée','Très douce'],spice:['Aucune','Légères','Présentes','Marquées','Très poivré'],earth:['Aucune','Légère','Présente','Marquée','Très terreux'],wood:['Discret','Léger','Présent','Marqué','Très boisé'],cream:['Aucune','Légère','Présente','Crémeux','Très crémeux']};
const lvl=(k,v)=>{v=Math.max(1,Math.min(5,Math.round(n(v)||0)));return {v,w:(WORDS[k]||[])[v-1]||''}};
const badCls=t=>/pass|trop cher|évit|décev|cher pour|plutôt cher/i.test(t||'')?'bad':'good';
function ess(d){
  const e=d.essentiel||{},sm=d.smoke||{};
  return {style:e.style||(d.aromas||[]).slice(0,3).join(', '),
    verdict:e.verdict_short||((n(d.value?.score)??0)>=7?'Bon achat':(n(d.value?.score)??10)<5?'Plutôt cher':'Prix correct'),
    force:lvl('strength',d.profile?.strength).w+(sm.level?' · '+sm.level:''),
    when:e.when||[sm.duration,sm.moment].filter(Boolean).join(' · '),
    drink:e.drink||(d.pairings||[]).slice(0,2).join(', ')};
}
function renderCard(){
  const d=cur.data;
  if(!d.found){$('#cardIn').innerHTML=`<h2>Bague illisible</h2><p>${esc(d.summary||"Je n'ai pas réussi à identifier ce cigare.")}</p><p class="conf">Conseil : photographiez la bague de face et de près, bien éclairée, ou la boîte. Vous pouvez aussi taper le nom du cigare.</p>`;return}
  const vs=n(d.value?.score),sc=n(d.score),E=ess(d);
  const shop=cur.price&&d.shop_verdict?`<div class="verdict ${badCls(d.shop_verdict)}"><b>À ${esc(cur.price)} € :</b> ${esc(d.shop_verdict)}${d.price?.source==='web'?'':' <small>(d’après un prix estimé, à vérifier)</small>'}</div>`:'';
  $('#cardIn').innerHTML=`<div class="appel">${esc([d.format,d.country].filter(Boolean).join(' · '))}</div>
  <h2>${esc(d.brand)} ${esc(d.vitola)}</h2>
  <div class="prod">${esc(mm(d))}${d.cuban?'<span class="chip k" style="margin-left:8px">Habano</span>':''}</div>
  <div class="big ${badCls(E.verdict)}"><b>${esc(E.verdict)}</b><span>${esc(d.value?.verdict||'')}</span></div>${shop}
  <div class="nums"><div><b>${sc??'—'}<small>/100</small></b><span>${esc(d.score_label||'Qualité')}</span></div><div><b>${vs??'—'}<small>/10</small></b><span>Qualité/prix</span></div><div><b>${fmtP(d.price)}</b><span>${d.price?.source==='web'?'Prix constaté':'Prix estimé (approx.)'}</span></div></div>
  <dl class="ess"><div><dt>Le goût</dt><dd>${esc(E.style)}</dd></div><div><dt>La force</dt><dd>${esc(E.force)}</dd></div><div><dt>Durée et moment</dt><dd>${esc(E.when)}</dd></div><div><dt>Avec quoi</dt><dd>${esc(E.drink)}</dd></div></dl>
  <p class="sum">${esc(d.summary)}</p>
  <div class="qk"><b>Une question sur ce cigare ?</b>${(d.questions||[]).slice(0,3).map(q=>`<button type="button">${esc(q)}</button>`).join('')}</div>`;
}
const REF=[{t:'Petit Corona',l:129,r:42},{t:'Robusto',l:124,r:50},{t:'Churchill',l:178,r:47}];
let tab='gout';
const TABS=[['gout','Le goût'],['fumer','Le fumer'],['comprendre','Comprendre'],['acheter','Acheter malin']];
function priceBar(d){
  const lo=n(d.price?.low),hi=n(d.price?.high)||lo,bb=n(d.value?.buy_below),me=cur.price?n(cur.price):null;
  if(lo==null)return '<p>Prix inconnu.</p>';
  const vals=[lo,hi,bb,me].filter(v=>v!=null),min=Math.max(0,Math.min(...vals)*.7),max=Math.max(...vals)*1.25,pc=v=>((v-min)/(max-min)*100).toFixed(1),al=v=>{const q=+pc(v);return q<18?'transform:none':q>82?'transform:translateX(-100%)':''};
  return `<div class="prail"><div class="pr" style="left:${pc(lo)}%;width:${Math.max(1,pc(hi)-pc(lo))}%"></div>${bb!=null?`<div class="pm good" style="left:${pc(bb)}%"><span style="${al(bb)}">Bonne affaire sous ${bb} €</span></div>`:''}${me!=null?`<div class="pm me" style="left:${pc(me)}%"><span style="${al(me)}">Votre prix : ${me} €</span></div>`:''}</div><div class="plab"><span>Prix habituel à la pièce : <b>${fmtP(d.price)}</b></span></div>`;
}
function renderDetails(){
  const d=cur.data,box=$('#details');$('#sampleLine').hidden=!cur.sample;
  if(!d.found){box.innerHTML='';$('#tabs').innerHTML='';return}
  $('#tabs').innerHTML=TABS.map(([k,t])=>`<button type="button" role="tab" data-t="${k}" aria-selected="${tab===k}">${t}</button>`).join('');
  const P=d.profile||{},L=[['Force','strength'],['Corps','body'],['Douceur','sweetness'],['Épices','spice'],['Terre','earth'],['Boisé','wood'],['Crème','cream']];
  const sm=d.smoke||{},st=d.storage||{},th=d.thirds||{};
  const me=n(d.length_mm)?[{t:'Ce cigare',l:n(d.length_mm),r:n(d.ring)||42,me:1}]:[];
  const rows=[...me,...REF.filter(x=>!(me.length&&x.l===me[0].l&&x.r===me[0].r))],maxL=200;
  const P1={
  gout:`<section class="sec"><h3>Son caractère</h3><div class="chars">${L.map(([t,k])=>{const x=lvl(k,P[k]);return `<div class="dot${k==='strength'?' st':''}"><span>${t}</span><span class="pips" aria-label="${x.v} sur 5">${[1,2,3,4,5].map(i=>`<i class="${i<=x.v?'on':''}"></i>`).join('')}</span><b>${esc(x.w)}</b></div>`}).join('')}</div></section>
  <section class="sec"><h3>Ce que vous allez sentir</h3><div class="tags">${(d.aromas||[]).map(aromaChip).join('')}</div><p><b>Tirage :</b> ${esc(d.draw)}</p><p class="conf"><b>Combustion :</b> ${esc(d.burn)}</p></section>
  <section class="sec full"><h3>Comment il évolue</h3><div class="thirds">${[['Début',th.first,33],['Milieu',th.second,66],['Fin',th.last,100]].map(([t,v,w])=>`<div class="third"><div class="burn"><i style="width:${w}%"></i></div><b>${t}</b>${esc(v)}</div>`).join('')}</div></section>`+gameHtml(d.aromas),
  fumer:`<section class="sec"><h3>Le fumer</h3><dl class="kv"><dt>Durée</dt><dd><b>${esc(sm.duration)}</b></dd><dt>Moment</dt><dd>${esc(sm.moment)}</dd><dt>Niveau</dt><dd><b>${esc(sm.level)}</b></dd><dt>Coupe</dt><dd>${esc(sm.cut)}</dd><dt>Allumage</dt><dd>${esc(sm.light)}</dd></dl></section>
  <section class="sec"><h3>Avec quoi le déguster</h3><ul class="food">${(d.pairings||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${(d.avoid||[]).length?`<p class="conf" style="margin-top:12px">À éviter : ${d.avoid.map(esc).join(', ')}</p>`:''}</section>
  <section class="sec full"><h3>Le conserver</h3><div class="nums"><div><b>${esc(st.humidity)}</b><span>Humidité</span></div><div><b>${esc(st.temp)}</b><span>Température</span></div><div><b style="white-space:normal;font-size:17px">${esc(st.aging)}</b><span>Vieillissement</span></div></div><p class="conf" style="margin-top:10px">${esc(st.note)}</p></section>`,
  comprendre:`<section class="sec full"><h3>La bague expliquée</h3><div class="scroll"><table class="dec"><tbody>${(d.band_decode||[]).map(r=>`<tr><td>${esc(r.term)}</td><td>${esc(r.meaning)}</td></tr>`).join('')}</tbody></table></div></section>
  <section class="sec"><h3>Sa taille</h3><div class="sizes">${rows.map(x=>`<div class="sz"><span>${esc(x.t)}<small>${x.l} mm · cepo ${x.r}</small></span><div class="cg ${x.me?'me':'ref'}" style="width:${(x.l/maxL*100).toFixed(1)}%;height:${Math.round(x.r*.5)}px"></div></div>`).join('')}</div><p class="conf" style="margin-top:12px">Gros diamètre : fumée plus douce et ronde. Diamètre fin : plus d'intensité.</p></section>
  <section class="sec"><h3>À retenir</h3><ol class="les">${(d.lesson||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol><dl class="kv" style="margin-top:14px">${(d.glossary||[]).map(g=>`<dt><b>${esc(g.term)}</b></dt><dd>${esc(g.def)}</dd>`).join('')}</dl></section>
  <section class="sec full"><h3>Son histoire</h3><p><b>La marque :</b> ${esc(d.history)}</p><p><b>Le tabac :</b> ${esc(d.terroir)}</p><p class="conf"><b>Composition :</b> cape ${esc(d.wrapper)} · sous-cape ${esc(d.binder)} · tripe ${esc(d.filler)}</p>${d.quality_notes?`<p class="conf">${esc(d.quality_notes)}</p>`:''}</section>`,
  acheter:`<section class="sec full"><h3>Le bon prix</h3><div class="pricebar">${priceBar(d)}</div><p class="conf">${esc(d.price?.note||'')}${d.confidence?` · Identification : confiance ${esc(d.confidence)}`:''}</p></section>
  <section class="sec"><h3>Est-ce un vrai ?</h3><ul class="checks">${(d.authenticity||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
  <section class="sec"><h3>Si vous aimez ce cigare</h3><div class="alts one">${(d.alternatives||[]).map(a=>`<div class="alt"><small>${esc(a.type)}</small><b>${esc(a.name)}</b><div class="conf">${esc(a.why)}</div><span>${esc(a.price)}</span></div>`).join('')}</div></section>`};
  box.innerHTML=(P1[tab]||P1.gout)+`
  <section class="sec full"><h3>Mon cigare</h3><div class="mine"><div class="stars" id="stars">${[1,2,3,4,5].map(i=>`<button type="button" data-s="${i}" class="${i<=cur.mine.rating?'on':''}" aria-label="${i} sur 5">★</button>`).join('')}</div><select id="mStatus" aria-label="Statut"><option value="">Statut…</option>${['À fumer','Fumé','En humidor','Envie'].map(s=>`<option ${cur.mine.status===s?'selected':''}>${s}</option>`).join('')}</select><label class="conf" for="mQty">En stock</label><input type="number" id="mQty" min="0" step="1" value="${esc(cur.mine.qty)}" placeholder="0"><button class="btn solid" id="bSave">${cur.id?'Enregistré dans mon humidor':'Ajouter à mon humidor'}</button>${cur.id?'<button class="del" id="bDel">Retirer</button>':''}<textarea id="mNotes" placeholder="Mes notes : goût, boisson associée, occasion, avec qui…">${esc(cur.mine.notes)}</textarea></div><p class="conf" id="saveNote"></p></section>`;
  bindMine();
}
function bindMine(){
  $('#stars').onclick=e=>{const b=e.target.closest('button');if(!b)return;cur.mine.rating=+b.dataset.s;[...$('#stars').children].forEach((x,i)=>x.classList.toggle('on',i<cur.mine.rating));autoSave()};
  $('#mStatus').onchange=e=>{cur.mine.status=e.target.value;autoSave()};
  $('#mQty').onchange=e=>{cur.mine.qty=e.target.value;autoSave()};
  $('#mNotes').oninput=e=>{cur.mine.notes=e.target.value;clearTimeout(bindMine._t);bindMine._t=setTimeout(autoSave,900)};
  $('#bSave').onclick=()=>save(true);
  const del=$('#bDel');if(del)del.onclick=remove;
  $('#saveNote').textContent='Votre humidor est gardé sur cet appareil.';
}
const autoSave=()=>{if(cur.id)save(false)};
const fmt=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
function renderChat(){
  const d=cur.data;$('#dWine').textContent=d.found?[d.brand,d.vitola].filter(Boolean).join(' '):'Aucun cigare identifié';
  const m=$('#msgs');
  m.innerHTML=(cur.chat.length?'':`<div class="m a">Bonjour ! Posez-moi n'importe quelle question sur ce cigare : coupe, allumage, boisson, conservation, authenticité, ou un mot de la bague.</div>`)+cur.chat.map((x,i)=>`<div class="m ${x.role==='user'?'u':'a'}">${fmt(x.content)}${x.role==='assistant'&&TTS?`<button class="say" data-i="${i}">Écouter</button>`:''}</div>`).join('');
  m.scrollTop=m.scrollHeight;
  $('#sugg').innerHTML=(cur.chat.length?[]:(d.questions||[])).map(q=>`<button type="button">${esc(q)}</button>`).join('');
}
function renderAll(){$('#hero').classList.toggle('hasRes',!cur.sample);renderFinder();renderCard();renderDetails();renderChat()}

/* ---------- photo + analyse ---------- */
async function prep(file){
  const url=URL.createObjectURL(file);const im=new Image();
  await new Promise((r,j)=>{im.onload=r;im.onerror=j;im.src=url});
  const draw=(max,q,type)=>{const k=Math.min(1,max/Math.max(im.naturalWidth,im.naturalHeight));const c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*k);c.height=Math.round(im.naturalHeight*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);return type==='url'?c.toDataURL('image/jpeg',q):new Promise(r=>c.toBlob(r,'image/jpeg',q))};
  const blob=await draw(1500,.85),view=draw(900,.8,'url'),thumb=draw(240,.7,'url');URL.revokeObjectURL(url);return {blob,view,thumb};
}
const SCHEMA=`{"found":bool,"confidence":"haute|moyenne|faible","band_text":"texte lu sur la bague ou la boîte","brand":"marque","line":"ligne ou série","vitola":"nom du modèle","format":"format générique (ex. Robusto, Toro, Corona, Churchill, Petit Corona, Torpedo) et vitola de galera si cubain","length_mm":nombre,"ring":cepo en nombre,"country":"","factory":"fabrique si connue ou vide","wrapper":"cape (origine, type : Habano, Connecticut, Maduro, Corojo…)","binder":"sous-cape","filler":"tripe","cuban":bool,
"essentiel":{"style":"le goût en 6 mots max (ex. Boisé, cacao et café, rond)","verdict_short":"2-3 mots : Excellent achat|Bon achat|Prix correct|Plutôt cher|À éviter","when":"durée et moment en quelques mots (ex. 45 min · après le déjeuner)","drink":"1-2 boissons en quelques mots"},"summary":"2 phrases simples pour un amateur qui débute","score":note sur 100 réaliste (consensus critique),"score_label":"Correct|Bon|Très bon|Excellent|Exceptionnel","quality_notes":"réputation de la marque et du modèle, 1-2 phrases",
"price":{"low":nombre,"high":nombre,"source":"web|estimation","note":"prix à la pièce ; où et comment il a été établi"},"value":{"score":note sur 10 du rapport qualité/prix,"verdict":"1 phrase","buy_below":prix à la pièce en € sous lequel c'est une bonne affaire},"shop_verdict":"si un prix est fourni : bonne affaire, prix normal ou trop cher, et pourquoi ; sinon vide",
"profile":{"strength":1-5,"body":1-5,"sweetness":1-5,"spice":1-5,"earth":1-5,"wood":1-5,"cream":1-5},"aromas":["4-6 arômes"],"draw":"tirage","burn":"combustion et cendre",
"thirds":{"first":"","second":"","last":""},"smoke":{"duration":"","moment":"","level":"Débutant|Débutant à intermédiaire|Intermédiaire|Amateur confirmé","cut":"","light":""},"pairings":["3-5 boissons"],"avoid":["1-2"],
"storage":{"humidity":"","temp":"","aging":"potentiel de vieillissement","note":""},"authenticity":["3-5 points concrets pour repérer une contrefaçon de CE cigare"],"history":"histoire de la marque","terroir":"origine des tabacs",
"band_decode":[{"term":"mention ou élément lu sur la bague/boîte","meaning":"explication simple"}],"lesson":["3 choses à retenir qui font progresser"],"glossary":[{"term":"","def":""}],
"alternatives":[{"type":"Même style, moins cher|Montée en gamme|Pour découvrir","name":"","why":"","price":"fourchette à la pièce en €"}],"questions":["4 questions intéressantes à poser sur ce cigare"]}`;
function prompt(text,price,web){
  return `Tu es un expert en cigares, pédagogue, qui aide un amateur adulte basé en France à progresser. ${text?`Le cigare à analyser est : « ${text} ».`:"Analyse le cigare (ou la boîte) sur la photo : lis attentivement la bague."}
Nous sommes en ${YEAR}. Prix en euros, à la pièce. En France les cigares se vendent uniquement en bureau de tabac à prix homologué : donne ce prix si tu le connais.${price?` Le client indique un prix de ${price} € la pièce.`:''}
${web?"Utilise l'outil web_search (1 à 2 appels) pour vérifier le prix actuel en France et la réputation de ce cigare précis, puis mets price.source à \"web\" et indique dans price.note les sources consultées.":"Tu n'as pas accès au web : donne une estimation prudente et mets price.source à \"estimation\"."}
Règles : n'invente rien de précis que tu ne sais pas ; si un élément n'est pas lisible, déduis-le avec prudence et baisse la confiance. Si ce n'est pas un cigare ou si la bague est illisible, renvoie found=false et explique dans summary ce qu'il faut refaire. Écris tout en français, avec des mots simples de tous les jours : phrases courtes (20 mots maximum par champ texte), pas de jargon sans explication.
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, selon ce schéma : ${SCHEMA}`;
}
const searchTool={name:'web_search'};
function parse(t){const s=String(t||''),a=s.indexOf('{'),b=s.lastIndexOf('}');if(a<0||b<a)throw new Error('json');return JSON.parse(s.slice(a,b+1))}
function busy(on,web){$('#hero').classList.toggle('busy',on);['#bCam','#bGal','#byName'].forEach(s=>$(s).disabled=on);if(on)$('#loadT').textContent=web?'Analyse et vérification des prix':'Analyse du cigare'}
async function analyze({blob,text,view,thumb}){
  if(!window.sommelierSettings.get().key){openSet();return}
  const price=n(String($('#price').value).replace(',','.'));const web=!!(MCP&&$('#web').checked);
  ac=new AbortController();busy(true,web);
  if(view){cur.img=view;renderFinder()}
  const opts={modelTier:'complex',signal:ac.signal};if(blob)opts.images=[blob];if(web)opts.tools=[searchTool];
  const p=prompt(text,price,web);
  try{
    const r=await S(p,opts);const d=parse(r.text);
    cur={data:norm(d),img:view||null,thumb:thumb||null,id:null,chat:[],mine:{rating:0,status:'',notes:'',qty:''},price:price||null,sample:false};
    tab='gout';renderAll();lastSave();const cd=$('#card');cd.classList.remove('pop');void cd.offsetWidth;cd.classList.add('pop');cd.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(e){
    if(e?.name==='AbortError'||e?.code==='aborted')toast('Analyse annulée.');
    else if(e?.code==='not_granted')toast('Clé API refusée ou absente : vérifiez-la dans Réglages.');
    else if(e?.code==='rate_limited')toast('Trop de demandes : patientez une minute puis réessayez.');
    else if(e?.code==='network')toast('Pas de connexion internet.');
    else toast("L'analyse a échoué. Reprenez la photo ou tapez le nom du cigare.");
  }finally{busy(false);ac=null}
}
$('#bCam').onclick=()=>$('#fCam').click();
$('#bGal').onclick=()=>$('#fGal').click();
const onFile=async e=>{const f=e.target.files?.[0];e.target.value='';if(!f)return;try{analyze(await prep(f))}catch(err){toast("Impossible de lire cette image.")}};
$('#fCam').onchange=onFile;$('#fGal').onchange=onFile;
$('#byName').onkeydown=e=>{if(e.key==='Enter'&&e.target.value.trim()){e.preventDefault();cur.img=null;analyze({text:e.target.value.trim()})}};
$('#bStop').onclick=()=>ac?.abort();
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;tab=b.dataset.t;renderDetails()};
window.addEventListener('offline',()=>toast('Hors connexion : les analyses sont indisponibles.'));

/* ---------- questions ---------- */
function ctx(){const d={...cur.data};delete d.questions;return `Tu es un expert en cigares chaleureux et pédagogue. Tu réponds aux questions d'un amateur adulte qui veut progresser, à propos de CE cigare précis. Réponds en français, de façon concrète, en 60 à 160 mots, sans titres ; tu peux mettre un mot clé en **gras**. Si la question sort du sujet, ramène-la gentiment au cigare. Si tu n'es pas sûr d'un fait, dis-le. Nous sommes en ${YEAR}.${cur.price?` Prix indiqué : ${cur.price} € la pièce.`:''}
Fiche du cigare (JSON) : ${JSON.stringify(d)}`}
let asking=false;
async function ask(q){
  q=String(q||'').trim();if(!q||asking)return;
  if(!window.sommelierSettings.get().key){closeD();openSet();return}
  if(!cur.data.found){toast("Identifiez d'abord un cigare.");return}
  asking=true;$('#askB').disabled=true;$('#askI').value='';
  cur.chat.push({role:'user',content:q});cur.chat.push({role:'assistant',content:'…'});renderChat();
  const msgs=[{role:'user',content:ctx()},{role:'assistant',content:"Compris, j'ai la fiche sous les yeux. Je vous écoute."},...cur.chat.slice(0,-1).slice(-15)];
  const opts={modelTier:'default'};
  if(MCP&&$('#web').checked)opts.tools=[searchTool];
  try{const r=await S(msgs,opts);cur.chat[cur.chat.length-1].content=r.text||'…'}
  catch(e){cur.chat.pop();cur.chat.pop();toast(e?.code==='rate_limited'?'Trop de questions d’un coup : patientez un peu.':e?.code==='not_granted'?'Clé API refusée : vérifiez-la dans Réglages.':"Je n'ai pas pu répondre. Réessayez.")}
  finally{asking=false;$('#askB').disabled=false;renderChat();autoSave()}
}
const bg=()=>document.querySelectorAll('header.top,main,.toast');
const openD=()=>{$('#drawer').classList.add('open');$('#drawer').setAttribute('aria-hidden','false');bg().forEach(e=>e.inert=true);$('#fab').hidden=true;setTimeout(()=>$('#askI').focus(),200)};
const closeD=()=>{const was=$('#drawer').classList.contains('open');$('#drawer').classList.remove('open');$('#drawer').setAttribute('aria-hidden','true');bg().forEach(e=>e.inert=false);$('#fab').hidden=$('#vScan').hidden;if(was&&!$('#fab').hidden)$('#fab').focus()};
$('#askF').onsubmit=e=>{e.preventDefault();ask($('#askI').value)};
$('#sugg').onclick=e=>{const b=e.target.closest('button');if(b)ask(b.textContent)};
$('#cardIn').addEventListener('click',e=>{const b=e.target.closest('.qk button');if(b){openD();ask(b.textContent)}});
$('#msgs').onclick=e=>{const b=e.target.closest('.say');if(!b||!TTS)return;const t=cur.chat[+b.dataset.i]?.content||'';TTS.speak(t.replace(/\*\*/g,'').slice(0,2000),{language:'fr'}).catch(()=>{})};
$('#fab').onclick=openD;$('#dClose').onclick=closeD;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeD()});
let dicOn=false;
$('#mic').onclick=()=>{if(!DIC)return;if(dicOn){DIC.stop().catch(()=>{});return}DIC.start().catch(()=>{toast('Micro indisponible : tapez votre question.')})};

/* ---------- humidor ---------- */
async function save(manual){
  if(!cur.data.found)return;
  let dupMsg='';
  if(!cur.id){const dup=cave.find(w=>w.data&&keyOf(w.data)===keyOf(cur.data));if(dup){cur.id=dup.id;cur.created=dup.created;dupMsg='Ce cigare était déjà dans votre humidor : fiche mise à jour.'}else cur.id='c'+Date.now().toString(36)}
  const doc={data:cur.data,thumb:cur.thumb||'',mine:cur.mine,price:cur.price||null,chat:cur.chat.slice(-20),created:cur.created||Date.now(),updated:Date.now()};
  cur.created=doc.created;
  const a=cave.filter(w=>w.id!==cur.id);a.push(Object.assign({id:cur.id},doc));
  if(!lsPut(a))toast('Stockage local plein ou indisponible : l’humidor ne sera pas conservé.');
  cave=a;
  if(manual){toast(dupMsg||'Ajouté à votre humidor.');renderDetails()}
  const sn=$('#saveNote');if(sn)sn.textContent='Enregistré.';
}
async function remove(){if(!cur.id)return;cave=cave.filter(w=>w.id!==cur.id);lsPut(cave);cur.id=null;toast('Retiré de votre humidor.');renderDetails()}
const SORTS={recent:(a,b)=>(b.updated||0)-(a.updated||0),score:(a,b)=>(n(b.data?.score)||0)-(n(a.data?.score)||0),value:(a,b)=>(n(b.data?.value?.score)||0)-(n(a.data?.value?.score)||0),price:(a,b)=>(n(a.data?.price?.low)??1e9)-(n(b.data?.price?.low)??1e9),mine:(a,b)=>(b.mine?.rating||0)-(a.mine?.rating||0),stock:(a,b)=>(n(b.mine?.qty)||0)-(n(a.mine?.qty)||0)};
let cmpOn=false,cmpSel=[];
function renderCmp(){
  const box=$('#cmp');$('#bCmp').textContent=cmpOn?'Quitter la comparaison':'Comparer deux cigares';
  if(!cmpOn){box.innerHTML='';return}
  const ws=cmpSel.map(id=>cave.find(w=>w.id===id)).filter(Boolean);
  if(ws.length<2){box.innerHTML=`<div class="empty">Touchez deux cigares de votre humidor pour les comparer (${ws.length}/2).</div>`;return}
  const R=[['Note',w=>n(w.data.score)!=null?w.data.score+'/100':'—',w=>n(w.data.score)],['Qualité/prix',w=>n(w.data.value?.score)!=null?w.data.value.score+'/10':'—',w=>n(w.data.value?.score)],['Prix',w=>fmtP(w.data.price),w=>n(w.data.price?.low)!=null?-n(w.data.price.low):null],['Force',w=>esc(lvl('strength',w.data.profile?.strength).w)],['Corps',w=>esc(lvl('body',w.data.profile?.body).w)],['Format',w=>esc(w.data.format)+(mm(w.data)?'<br><small>'+esc(mm(w.data))+'</small>':'')],['Durée',w=>esc(w.data.smoke?.duration)||'—'],['Boissons',w=>esc((w.data.pairings||[]).slice(0,2).join(', '))||'—'],['Mes étoiles',w=>'★'.repeat(w.mine?.rating||0)||'—',w=>w.mine?.rating||null]];
  const body=R.map(([t,f,k])=>{const ks=k?ws.map(k):[],win=k&&ks[0]!=null&&ks[1]!=null&&ks[0]!==ks[1]?(ks[0]>ks[1]?0:1):-1;return `<tr><td>${t}</td>${ws.map((w,i)=>`<td>${i===win?`<b>${f(w)}</b>`:f(w)}</td>`).join('')}</tr>`}).join('');
  const qv=ws.map(w=>n(w.data.value?.score)||0),best=qv[0]===qv[1]?null:ws[qv[0]>qv[1]?0:1];
  box.innerHTML=`<div class="scroll"><table class="cmpT"><thead><tr><th></th>${ws.map(w=>`<th>${esc(w.data.brand)} ${esc(w.data.vitola)}<br><small style="font-family:Inter,sans-serif;font-weight:400;color:var(--mute)">${esc(w.data.country)}</small></th>`).join('')}</tr></thead><tbody>${body}</tbody></table></div><p class="conf">En vert : le meilleur des deux sur la ligne.${best?` Meilleur rapport qualité/prix : <b>${esc(best.data.brand)} ${esc(best.data.vitola)}</b>.`:''}</p>`;
}
function renderCave(){
  renderCmp();
  const all=cave,q=$('#q').value.toLowerCase().trim(),fs=$('#fStatus').value,fx=$('#fStr').value;
  const brands=new Set(),ctry=new Set(),fmts=new Set();let sum=0,k=0,stock=0;
  all.forEach(w=>{const d=w.data||{};d.brand&&brands.add(d.brand);d.country&&ctry.add(d.country);d.format&&fmts.add(String(d.format).split(/[ (]/)[0]);if(n(d.score)){sum+=n(d.score);k++}stock+=n(w.mine?.qty)||0});
  $('#stats').innerHTML=[[all.length,'cigares scannés'],[stock,'en stock'],[brands.size,'marques'],[ctry.size,'pays'],[k?Math.round(sum/k):'—','note moyenne /100']].map(([v,l])=>`<div class="stat"><b>${esc(v)}</b><span>${l}</span></div>`).join('');
  $('#know').innerHTML=[...fmts].sort().map(g=>`<span class="chip">${esc(g)}</span>`).join('');
  const band=s=>s<=2?'1':s>=4?'5':'3';
  const list=all.filter(w=>{const d=w.data||{};const hay=[d.brand,d.vitola,d.line,d.format,d.country,d.wrapper].join(' ').toLowerCase();return(!q||hay.includes(q))&&(!fs||w.mine?.status===fs)&&(!fx||band(n(d.profile?.strength)||3)===fx)&&(!$('#fStock').checked||(n(w.mine?.qty)||0)>0)}).sort(SORTS[$('#fSort').value]||SORTS.recent);
  const L=$('#caveList');
  if(!all.length){L.innerHTML=`<div class="empty">Aucun cigare pour l'instant. Scannez une bague puis touchez « Ajouter à mon humidor ».</div>`;return}
  if(!list.length){L.innerHTML='<div class="empty">Aucun cigare ne correspond à ces filtres.</div>';return}
  L.innerHTML=list.map(w=>{const d=w.data||{};const st='★'.repeat(w.mine?.rating||0);const qty=n(w.mine?.qty);return `<button class="bt${cmpSel.includes(w.id)?' sel':''}" data-id="${esc(w.id)}">${w.thumb&&String(w.thumb).startsWith('data:image/')?`<img src="${esc(w.thumb)}" alt="">`:'<span class="ph"></span>'}<span><b>${esc(d.brand)} ${esc(d.vitola)}</b><small>${esc(d.country)} · ${esc(mm(d))}</small><small>${esc(w.mine?.status||'')}${qty?` · ${qty} en stock`:''} ${st?`<span style="color:var(--gold)">${st}</span>`:''}</small></span><span class="sc">${n(d.score)??'—'}<small>/100</small><br><small>Force ${n(d.profile?.strength)??'?'}/5</small></span></button>`}).join('');
}
$('#caveList').onclick=e=>{const b=e.target.closest('.bt');if(!b)return;const w=cave.find(x=>x.id===b.dataset.id);if(!w)return;if(cmpOn){cmpSel=cmpSel.includes(w.id)?cmpSel.filter(x=>x!==w.id):[...cmpSel,w.id].slice(-2);renderCave();return}tab='gout';cur={data:w.data,img:w.thumb||null,thumb:w.thumb||null,id:w.id,created:w.created,chat:w.chat||[],mine:Object.assign({rating:0,status:'',notes:'',qty:''},w.mine),price:w.price||null,sample:false};location.hash='scan';renderAll()};
['#q','#fStatus','#fStr','#fSort','#fStock'].forEach(s=>$(s).addEventListener('input',renderCave));
$('#fStock').addEventListener('change',renderCave);
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
  if(!cave.length){toast('Votre humidor est vide.');return}
  const blob=new Blob([JSON.stringify({app:'mon-humidor',version:1,cave},null,1)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mon-humidor-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),2000);
};
$('#bImp').onclick=()=>$('#fImp').click();
$('#fImp').onchange=async e=>{
  const f=e.target.files?.[0];e.target.value='';if(!f)return;
  try{
    const j=JSON.parse(await f.text());const items=arr(j.cave||j).filter(w=>w&&w.id&&w.data);
    if(!items.length){toast('Fichier sans cigare valide.');return}
    const m=new Map(cave.map(w=>[w.id,w]));items.forEach(w=>m.set(w.id,Object.assign(w,{data:norm(w.data)})));
    cave=[...m.values()];lsPut(cave);toast(items.length+' cigare(s) importé(s).');renderCave();
  }catch(err){toast('Fichier illisible.')}
};
$('#bWipe').onclick=()=>{
  if($('#bWipe').dataset.sure!=='1'){$('#bWipe').dataset.sure='1';$('#bWipe').textContent='Confirmer l’effacement';setTimeout(()=>{$('#bWipe').dataset.sure='';$('#bWipe').textContent='Tout effacer'},4000);return}
  cave=[];lsPut([]);try{localStorage.removeItem(LSL)}catch(e){}$('#bWipe').dataset.sure='';$('#bWipe').textContent='Tout effacer';toast('Humidor effacé.');renderCave();
};

const CFG={doneStatus:'Fumé',itemWord:'un cigare',caveWord:'humidor',
gameTitle:'Testez votre palais',gameHint:'Après quelques bouffées, gardez la fumée en bouche, puis touchez les familles d’arômes que vous reconnaissez. Ensuite, comparez avec l’expert.',
pointsRule:'Vous gagnez 1 point par cigare enregistré, 2 par cigare fumé, 2 par test de palais et 1 par note de dégustation écrite.',
mustTitle:'Les 12 cigares à connaître',mustHint:'Ils se cochent tout seuls quand vous enregistrez un cigare du bon type dans votre humidor.',
families:[
{k:'bo',name:'Boisé, cèdre',col:'#8a6440',kw:['bois','cèdre','cedre','chêne']},
{k:'ca',name:'Cacao, chocolat',col:'#4a2a1a',kw:['cacao','chocolat']},
{k:'cf',name:'Café',col:'#6b3e22',kw:['café','moka','espresso','expresso']},
{k:'cu',name:'Cuir, tabac',col:'#a0522d',kw:['cuir','tabac']},
{k:'ep',name:'Épices, poivre',col:'#c0392b',kw:['poivre','épice','cannelle','muscade','piment','gingembre','clou']},
{k:'te',name:'Terre',col:'#6d5b3b',kw:['terre','sous-bois','minéral','tourbe','champignon']},
{k:'cr',name:'Crème, vanille',col:'#e3c58a',kw:['crème','crémeux','beurre','lait','vanille']},
{k:'fs',name:'Fruits secs, grillé',col:'#b07b3c',kw:['noix','noisette','amande','fruits secs','pain','grillé','toast','torréfi']},
{k:'mi',name:'Miel, sucré',col:'#e0a43a',kw:['miel','caramel','sucre','mélasse','douceur','sucré']},
{k:'fl',name:'Herbes, floral',col:'#7a9a3a',kw:['floral','fleur','herbe','foin','thé']},
{k:'fr',name:'Fruits',col:'#c2415b',kw:['fruit','agrume','cerise','raisin','orange','figue','datte']}],
musts:(()=>{const h=d=>[d.brand,d.line,d.vitola,d.format,d.country,d.wrapper,d.binder,d.filler].join(' ').toLowerCase(),has=(d,a)=>a.some(k=>h(d).includes(k)),f=d=>Number(d.profile?.strength)||0;return [
{t:'Un Habano',d:'Cuba, la référence historique',test:d=>d.cuban===true||has(d,['cuba','habana','havane'])},
{t:'Un cigare du Nicaragua',d:'Souvent riche et poivré',test:d=>has(d,['nicaragua'])},
{t:'Un dominicain',d:'Souvent doux et crémeux',test:d=>has(d,['dominicain','dominicaine','dominican'])},
{t:'Un cigare du Honduras',d:'Terreux et généreux',test:d=>has(d,['honduras'])},
{t:'Un Robusto',d:'Court et épais, le format star',test:d=>has(d,['robusto'])},
{t:'Un Corona',d:'Le format classique, fin et équilibré',test:d=>has(d,['corona'])},
{t:'Un Churchill',d:'Long, pour prendre son temps',test:d=>has(d,['churchill'])},
{t:'Un figurado',d:'Tête pointue : Torpedo, Belicoso…',test:d=>has(d,['torpedo','belicoso','pyramide','piramide','figurado','perfecto'])},
{t:'Une cape Connecticut',d:'Claire et douce',test:d=>has(d,['connecticut'])},
{t:'Une cape Maduro',d:'Sombre, notes sucrées',test:d=>has(d,['maduro','oscuro'])},
{t:'Un cigare léger',d:'Force 1 ou 2 sur 5',test:d=>f(d)>0&&f(d)<=2},
{t:'Un cigare corsé',d:'Force 4 ou 5 sur 5',test:d=>f(d)>=4}]})(),
basics:[
['Choisir son premier cigare',['Un format court (Corona, petit Robusto) : 30 à 45 minutes, c’est idéal pour commencer.','Une force légère à moyenne.','Une cape claire (Connecticut) est souvent plus douce.','Fumez-le après un repas, jamais à jeun.']],
['Couper',['Utilisez un coupe-cigare bien aiguisé, pour une coupe nette et franche.','Coupez 2 à 3 mm sous la tête, sans dépasser la coiffe (la petite calotte collée au bout) : sinon la cape se défait.']],
['Allumer',['Une flamme sans odeur : allumettes longues, briquet à gaz ou briquet torche. Évitez les briquets à essence.','Chauffez le pied à 1 ou 2 cm de la flamme, en tournant le cigare, sans le toucher.','Tirez quelques bouffées douces en tournant, puis soufflez sur le pied : il doit rougeoyer de façon régulière.']],
['Fumer',['On n’inhale pas : la fumée reste en bouche, puis on la souffle.','Une bouffée toutes les 30 à 60 secondes. Trop vite, il chauffe et devient amer.','Ne secouez pas la cendre, laissez-la tomber seule.','À la fin, posez-le dans le cendrier : il s’éteint tout seul, inutile de l’écraser.']],
['Conserver',['Dans un humidor : 65 à 70 % d’humidité, 16 à 20 °C.','Sans humidor : quelques jours seulement, dans son cellophane ou une boîte hermétique.','Trop sec, il brûle vite et devient amer. Trop humide, il tire mal et peut moisir.']]]};

/* ---------- familles d'arômes, jeu, apprendre ---------- */
const FAM=CFG.families;
const famOf=s=>{s=String(s||'').toLowerCase();return FAM.find(f=>f.kw.some(k=>s.includes(k)))};
const aromaChip=x=>{const f=famOf(x);return `<span class="tag ar" title="${f?esc(f.name):''}"><i style="background:${f?f.col:'var(--line)'}"></i>${esc(x)}</span>`};
const gMsg=(h,n)=>!n?'':h===n?'Sans faute, bravo !':h/n>=.5?'Très bien, votre palais progresse.':h?'Bon début : ça s’apprend en pratiquant.':'C’est normal au début. Relisez les arômes de l’expert et regoûtez.';
function gameHtml(list){
  const exp=[...new Set((list||[]).map(famOf).filter(Boolean).map(f=>f.k))];
  const t=cur.mine.tasting||{picked:[],done:false};
  const chips=FAM.map(f=>{const on=t.picked.includes(f.k);let c=on?'on':'';if(t.done)c+=exp.includes(f.k)?(on?' hit':' miss'):(on?' extra':' off');return `<button type="button" class="fam ${c}" data-f="${f.k}" aria-pressed="${on}" ${t.done?'disabled':''}><i style="background:${f.col}"></i>${esc(f.name)}</button>`}).join('');
  let r;
  if(t.done){const h=exp.filter(k=>t.picked.includes(k)).length;r=`<div class="gres"><b>${h} sur ${exp.length}</b><span>${gMsg(h,exp.length)}</span></div><p class="conf">Vert : trouvé. Pointillé : à chercher la prochaine fois. Gris : non cité par l'expert, votre palais a peut-être raison.</p><button type="button" class="btn line" id="gRe">Recommencer</button>`}
  else r=`<button type="button" class="btn solid" id="gGo" ${t.picked.length?'':'disabled'}>Comparer avec l'expert</button>`;
  return `<section class="sec full game"><h3>${CFG.gameTitle}</h3><p>${CFG.gameHint}</p><div class="fams">${chips}</div>${r}</section>`;
}
$('#details').addEventListener('click',e=>{
  const f=e.target.closest('.fam');
  if(f&&!f.disabled){const t=cur.mine.tasting||(cur.mine.tasting={picked:[],done:false});const k=f.dataset.f;t.picked=t.picked.includes(k)?t.picked.filter(x=>x!==k):[...t.picked,k];renderDetails();return}
  if(e.target.closest('#gGo')){const t=cur.mine.tasting,ex=[...new Set((cur.data.aromas||[]).map(famOf).filter(Boolean).map(f=>f.k))];t.done=true;t.date=Date.now();t.hit=ex.filter(k=>t.picked.includes(k)).length;t.total=ex.length;renderDetails();autoSave();return}
  if(e.target.closest('#gRe')){cur.mine.tasting={picked:[],done:false};renderDetails();autoSave()}
});
const LEVELS=[[0,'Curieux'],[5,'Apprenti'],[15,'Amateur'],[30,'Initié'],[60,'Connaisseur']];
function renderLearn(){
  const all=cave,done=all.filter(w=>w.mine?.status===CFG.doneStatus).length,games=all.filter(w=>w.mine?.tasting?.done).length;
  const pts=all.length+done*2+games*2+all.filter(w=>(w.mine?.notes||'').trim().length>20).length;let i=0;LEVELS.forEach((x,j)=>{if(pts>=x[0])i=j});const nx=LEVELS[i+1];
  const pct=nx?Math.round((pts-LEVELS[i][0])/(nx[0]-LEVELS[i][0])*100):100;
  const gp=all.map(w=>w.mine?.tasting).filter(t=>t&&t.done&&t.total),gH=gp.reduce((a,t)=>a+t.hit,0),gT=gp.reduce((a,t)=>a+t.total,0);
  const musts=CFG.musts.map(m=>({...m,ok:all.some(w=>m.test(w.data||{}))})),nOk=musts.filter(m=>m.ok).length;
  const lex=new Map();all.forEach(w=>(w.data?.glossary||[]).forEach(g=>{const k=String(g.term||'').toLowerCase().trim();if(k&&!lex.has(k))lex.set(k,g)}));
  const L=[...lex.values()].sort((a,b)=>String(a.term).localeCompare(String(b.term),'fr'));
  $('#lvl').innerHTML=`<div class="lvlTop"><div><span class="conf" style="color:rgba(255,255,255,.75)">Votre niveau</span><b class="lvlName">${LEVELS[i][1]}</b></div><div class="lvlPts"><b>${pts}</b><span>points</span></div></div><div class="lvlBar"><i style="width:${pct}%"></i></div><p class="lvlNext">${nx?`Encore ${nx[0]-pts} points pour devenir <b>${nx[1]}</b>.`:'Niveau maximum atteint, chapeau !'} ${CFG.pointsRule}</p>${gT?`<p class="lvlNext">Votre palais : <b>${Math.round(gH/gT*100)} %</b> d’arômes retrouvés sur ${gp.length} test${gp.length>1?'s':''}.</p>`:''}`;
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
try{const l=JSON.parse(localStorage.getItem(LSL)||'null');if(l&&l.data&&l.data.found){cur={data:norm(l.data),img:null,thumb:null,id:null,chat:[],mine:{rating:0,status:'',notes:'',qty:''},price:l.price||null,sample:false}}}catch(e){}
if(DIC){$('#mic').hidden=false;DIC.onState(({state})=>{dicOn=state==='listening';$('#mic').classList.toggle('on',dicOn);$('#mic').textContent=dicOn?'Stop':'Micro'});DIC.onPartial(({text})=>{$('#askI').placeholder=text||'Je vous écoute…'});DIC.onFinal(({text})=>{const i=$('#askI');i.value=(i.value?i.value+' ':'')+text;i.placeholder='Posez votre question sur ce cigare'})}
renderAll();route();
if(!window.sommelierSettings.get().key)setTimeout(openSet,600);
}
