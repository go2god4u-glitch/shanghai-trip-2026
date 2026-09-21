const places = [
  {name:'上海斯格威铂尔曼大酒店',ko:'Pullman Shanghai Central',address:'上海市黄浦区打浦路15号',tag:'호텔'},
  {name:'很久以前羊肉串（打浦路店）',ko:'Long Time Ago Mutton Chuan',address:'打浦路店',tag:'양꼬치'},
  {name:'武康大楼',ko:'우캉맨션',address:'上海市徐汇区淮海中路1850号',tag:'산책'},
  {name:'安福路',ko:'안푸루',address:'上海市徐汇区安福路',tag:'산책'},
  {name:'栋梁之家 Maison Dongliang',ko:'메종 동량',address:'上海市长宁区武夷路168号174幢',tag:'쇼핑'},
  {name:'迷上 Prada 荣宅',ko:'Mi Shang Prada Rong Zhai',address:'上海市静安区陕西北路186号',tag:'칵테일'},
  {name:'张园',ko:'장위안',address:'上海市静安区南京西路588号',tag:'야경'},
  {name:'HARMAY 話梅（新天地店）',ko:'HARMAY Xintiandi',address:'上海市黄浦区黄陂南路380号',tag:'쇼핑'},
  {name:'茉莉奶白 Molly Tea（新天地店）',ko:'Molly Tea Xintiandi',address:'上海市黄浦区兴业路123号新天地时尚I期3楼',tag:'티'},
  {name:'御宝轩（益丰·外滩源店）',ko:'Imperial Treasure Fine Chinese Cuisine',address:'上海市黄浦区北京东路99号益丰·外滩源4楼',tag:'예약'},
  {name:'外滩源',ko:'와이탄위안 / Rockbund',address:'上海市黄浦区圆明园路',tag:'빛축제'},
  {name:'庄氏隆兴面馆（浙江中路店）',ko:'장씨네 게살국수',address:'上海市黄浦区浙江中路441号',tag:'면'},
  {name:'晟永兴（外滩店）',ko:'Sheng Yong Xing',address:'上海市黄浦区广东路20号外滩5号5楼东侧',tag:'베이징덕'},
  {name:'外滩',ko:'와이탄 / The Bund',address:'上海市黄浦区中山东一路',tag:'야경'},
  {name:'喜粤8号（汝南街总店）',ko:'Canton 8 · 딤섬 대안',address:'上海市黄浦区汝南街63号',tag:'대안'},
  {name:'上海浦东国际机场1号航站楼',ko:'PVG Terminal 1',address:'上海市浦东新区迎宾大道6000号',tag:'공항'}
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const toast = (msg) => { const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),1700); };
const copy = async (text) => { try { await navigator.clipboard.writeText(text); } catch { const t=document.createElement('textarea'); t.value=text; document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); } toast('복사했습니다'); };

$$('.tab').forEach(btn => btn.addEventListener('click', () => {
  $$('.tab').forEach(x=>x.classList.toggle('is-active',x===btn));
  $$('.panel').forEach(x=>x.classList.toggle('is-active',x.id===btn.dataset.tab));
  window.scrollTo({top:$('.tabs').offsetTop,behavior:'smooth'});
}));

$('#placeList').innerHTML = places.map((p,i)=>`<article class="place"><div class="place__top"><button class="place__copy" data-copy-index="${i}"><strong>${p.name}</strong><span>${p.ko}</span></button><span class="place__tag">${p.tag}</span></div><p class="place__address">${p.address}</p><div class="place__actions"><button data-copy-address="${i}">주소 복사</button><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(p.name)}&city=上海" target="_blank" rel="noopener">高德地图</a></div></article>`).join('');
$$('[data-copy-index]').forEach(b=>b.addEventListener('click',()=>copy(places[+b.dataset.copyIndex].name)));
$$('[data-copy-address]').forEach(b=>b.addEventListener('click',()=>copy(`${places[+b.dataset.copyAddress].name} ${places[+b.dataset.copyAddress].address}`)));
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>copy(b.dataset.copy)));

$$('#checklist input').forEach(input => {
  input.checked = localStorage.getItem(`shanghai-${input.dataset.key}`)==='1';
  input.addEventListener('change',()=>localStorage.setItem(`shanghai-${input.dataset.key}`,input.checked?'1':'0'));
});

function updateNetwork(){ const on=navigator.onLine; $('#networkBadge').textContent=on?'온라인':'오프라인 사용 중'; $('#networkBadge').classList.toggle('offline',!on); }
addEventListener('online',updateNetwork); addEventListener('offline',updateNetwork); updateNetwork();

function updateNext(){
  const now=Date.now(), events=$$('.timeline li[data-at]'); let next=null;
  events.forEach(el=>{ const at=new Date(el.dataset.at).getTime(); el.classList.toggle('is-past',at<now-45*60*1000); el.classList.remove('is-next'); if(at>=now-45*60*1000&&!next) next={el,at}; });
  if(next){ next.el.classList.add('is-next'); const title=$('strong',next.el).textContent; const d=new Date(next.at); const diff=next.at-now; $('#nextTitle').textContent=title; $('#nextMeta').textContent=diff>0?`${Math.max(1,Math.ceil(diff/36e5))}시간 후 · ${d.toLocaleString('ko-KR',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}`:'지금 진행할 일정'; }
  else if(now>new Date('2026-09-25T17:40:00+08:00').getTime()){ $('#nextTitle').textContent='상하이 여행 완료'; $('#nextMeta').textContent='좋은 기억만 챙겨 오세요'; }
}
updateNext(); setInterval(updateNext,60000);

let installPrompt;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('#installBtn').hidden=false;});
$('#installBtn').addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').hidden=true;});

$('#downloadBtn').addEventListener('click',()=>{
  const text=`상하이 2박 3일 핵심 일정\n\n9/23 08:55 MU5052 출발 → 양꼬치 → 우캉/안푸루 → Maison Dongliang → Prada Rong Zhai → 장위안\n9/24 HARMAY/Molly Tea → 12:00 Imperial Treasure(예약 확정) → 와이탄위안 → 장씨네 게살국수 1그릇 공유 → 19:00 晟永兴 → 와이탄 빛축제\n9/25 오전 호텔 인근 → 13:15 호텔 출발 → 17:40 MU5051 귀국\n\n긴급전화 경찰 110 · 구급 120 · 소방 119`;
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})); a.download='상하이_핵심일정.txt'; a.click(); URL.revokeObjectURL(a.href);
});

if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
