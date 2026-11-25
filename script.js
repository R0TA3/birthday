(()=>{
const G=['#1b1440,#05030c','#2b1a3a,#0a0610','#10183a,#04050f','#2a1722,#0c0508','#3a2310,#0b0604','#14243a,#050810','#3a1a2a,#0a0508','#1a1c40,#06060f','#3a1e0a,#0a0408','#241033,#050309'];
const C=[
['കാലത്തിന്റെ പിറവി','കാലത്തിന്റെ അനന്തമായ പ്രവാഹത്തിൽ ചില ദിനങ്ങൾ മാത്രം ഓർമ്മയുടെ തീരത്ത് ദീപ്തമായി നിൽക്കുന്നു. പന്ത്രണ്ട് മണിക്ക് ആശംസിക്കാൻ കഴിഞ്ഞില്ലെങ്കിലും, ഈ ദിവസം നിനക്കായി കരുതിവെച്ചിരിക്കുന്ന സ്നേഹത്തിന് സമയപരിധിയില്ല.','ജന്മദിനാശംസകൾ'],
['നിശ്ശബ്ദ ഭാഷ','ചിലർ ഒന്നും ആവശ്യപ്പെടാതെ നമ്മുടെ ചിന്തകളിൽ ഒരിടം നേടുന്നു. എഴുതാത്ത കത്തുപോലെ, കെടാവിളക്കുപോലെ, പരിചിതമായ ഒരീണംപോലെ അവർ മനസ്സിൽ നിറയുന്നു.','അങ്ങനെ ഒരാളാണ് നീ'],
['നക്ഷത്രവീഥികൾ','ആകാശവിളക്കുകൾ ഉയരുന്നതുപോലെ നിന്റെ പ്രതീക്ഷകളും ഉയരട്ടെ. വരുംവർഷം തുറക്കാത്ത വാതിലുകൾ തുറക്കട്ടെ; പ്രതീക്ഷിക്കാത്ത സന്തോഷങ്ങൾ വഴിയിൽ കാത്തുനിൽക്കട്ടെ.','പുതിയ പ്രഭാതം'],
['ഓർമ്മകളുടെ സുഗന്ധം','ചിത്രങ്ങൾ, തിരിച്ചുവരാത്ത നിമിഷങ്ങളെ കാത്തുവെക്കുന്നു. മങ്ങുന്ന സായന്തനംപോലെ, പഴയ കത്തുകളിലെ ഗന്ധംപോലെ, ചെറുമഴയുടെ കുളിർപോലെ ഓർമ്മകൾ മനസ്സിൽ പെയ്യുന്നു.','ഓർമ്മകൾ പൂക്കുന്നു'],
['ആയുസ്സിന്റെ ഉത്സവം','ജീവിതം ഒരു അമൂല്യ സമ്മാനമാണ്. കെടാത്ത നിലവിളക്കുപോലെ ആരോഗ്യവും, പുരാതന വൃക്ഷംപോലെ കരുത്തും, നദിപോലെ ശാന്തമായ മനസ്സും നിനക്കുണ്ടാകട്ടെ.','ദീർഘായുസ്സ്'],
['പറയാതെ പെയ്ത സ്നേഹം','അകലെയൊരു യാത്രികന് വഴി കാട്ടുന്ന ദീപസ്തംഭംപോലെ, രാത്രി മുഴുവൻ കെടാതെ നിൽക്കുന്ന വിളക്കുപോലെ, ചില സാന്നിധ്യങ്ങൾ വഴികളിലെ ഏകാന്തത അലിയിക്കുന്നു; നദി ലക്ഷ്യം മറക്കാത്തതുപോലെ.','വഴിവിളക്ക്'],
['സമ്മാനം','ഒരു ചെറിയ പെട്ടി, അതിനുള്ളിൽ പ്രതീക്ഷിക്കാത്ത ഒരു സന്തോഷം. ജീവിതവും ഇങ്ങനെയാണ്; ഓരോ ദിവസവും അഴിക്കാത്ത ഒരു റിബൺപോലെ അത്ഭുതങ്ങൾ ഒളിപ്പിച്ചിരിക്കുന്നു.','ഒരു കൊച്ചു വിസ്മയം'],
['മംഗളപ്രാർത്ഥന','നിന്റെ ദിനങ്ങളിൽ സൂര്യനെപ്പോലെ സമാധാനം ഉദിക്കട്ടെ; സന്ധ്യകൾ ശാന്തമാകട്ടെ. അനാവശ്യ ദുഃഖങ്ങൾ മഴമേഘംപോലെ അകന്നുപോകട്ടെ; സ്നേഹമുള്ളവർ ചുറ്റും നിറയട്ടെ.','മംഗളം ഭവതു'],
['ഹൃദയത്തിൽ വിരിയുന്ന ആശംസകൾ','ഒരു വർഷം കൂടി... പുതിയ സ്വപ്നങ്ങൾ... പുതിയ പ്രതീക്ഷകൾ... നീ ഉണ്ടെന്നതുതന്നെ ഈ ലോകത്തിന്റെ ഭംഗിയാണ്. ഇനിയുള്ള ഓരോ നാളും ഒരു പൂവുപോലെ വിരിയട്ടെ.','ഹൃദയം നിറഞ്ഞ ജന്മദിനാശംസകൾ!'],
['അനന്തമായ നന്മകളിലേക്ക്','സുന്ദരമായ പ്രഭാതങ്ങളും ശാന്തമായ രാത്രികളും നിനക്കുണ്ടാകട്ടെ. യാത്ര കഠിനമാകുമ്പോഴും ചക്രവാളത്തിൽ ചില വെളിച്ചങ്ങൾ മായുന്നില്ല. ഈ ചെറിയ സമ്മാനം നിനക്കായി...','സ്നേഹത്തോടെ ❤️']];
const PHOTO=new Set([1,3,5,6,7,9]);
const $=s=>document.querySelector(s),track=$('#track');
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
// Malayalam-safe clusters: base letter + virama-joined letters + all combining signs
function clusters(w){const o=[];let p='';for(const ch of w){
 if(o.length&&(/\p{M}/u.test(ch)||ch==='\u200d'||ch==='\u200c'||p==='\u0D4D'||p==='\u200d'))o[o.length-1]+=ch;else o.push(ch);p=ch}return o}
function build(el,text,cls){el.setAttribute('aria-label',text);
 text.split(' ').forEach((w,i,a)=>{const s=document.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');
  clusters(w).forEach(c=>{const k=document.createElement('span');k.className='c';k.textContent=c;s.appendChild(k)});
  el.appendChild(s);if(i<a.length-1)el.appendChild(document.createTextNode(' '))})}
C.forEach((c,i)=>{const s=document.createElement('section');s.className='ch';s.style.setProperty('--g',`radial-gradient(120% 80% at 50% 0%,${G[i].split(',')[0]},${G[i].split(',')[1]})`);
 if(PHOTO.has(i)){const f=document.createElement('figure');const im=new Image();im.loading='lazy';im.alt='Photograph '+(i+1);im.src=`assets/photos/photo-${String(i+1).padStart(2,'0')}.jpg`;im.onerror=()=>im.remove();f.appendChild(im);s.appendChild(f)}
 const h=document.createElement('h2'),t=document.createElement('div'),b=document.createElement('p'),g=document.createElement('p');
 t.className='txt';b.className='body';g.className='glow';build(h,c[0]);build(b,c[1]);build(g,c[2]);
 t.append(b,g);s.append(h,t);track.appendChild(s)});
// fire particles
const cv=$('#fx'),cx=cv.getContext('2d');let P=[],W,H;
function rs(){const d=Math.min(devicePixelRatio||1,2);W=cv.width=innerWidth*d;H=cv.height=innerHeight*d;cx.setTransform(d,0,0,d,0,0)}rs();addEventListener('resize',rs);
function spark(x,y,n){if(RM)return;for(let i=0;i<n;i++)P.push({x,y,vx:(Math.random()-.5)*2.2,vy:-Math.random()*2.4-.4,l:1,r:Math.random()*1.8+.6,e:0})}
for(let i=0;i<24;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:0,vy:-.15,l:Math.random(),r:1.2,e:1});
(function loop(){if(!RM){cx.clearRect(0,0,innerWidth,innerHeight);cx.globalCompositeOperation='lighter';
 P=P.filter(p=>{p.x+=p.vx+(p.e?Math.sin(p.y/40)*.2:0);p.y+=p.vy;p.vy+=p.e?0:.03;p.l-=p.e?.002:.025;
  if(p.e&&(p.l<=0||p.y<0)){p.x=Math.random()*innerWidth;p.y=innerHeight;p.l=1}
  if(p.l<=0)return false;cx.fillStyle=`rgba(255,${150+p.l*80|0},50,${p.l*(p.e?.5:1)})`;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill();return true});
 if(P.length>260)P.splice(24,P.length-260)}
 requestAnimationFrame(loop)})();
// writer
let cur=0,tok=0,paused=false;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const secs=()=>[...track.children];
function reset(i){secs()[i].classList.remove('done-all');secs()[i].querySelectorAll('.c').forEach(k=>k.className='c')}
async function write(i){const my=++tok;const s=secs()[i];reset(i);$('#next').classList.remove('ready');
 if(RM){finish(i);return}
 await sleep(900);
 for(const[sel,d]of[['h2',95],['.body',42],['.glow',85]]){
  const ks=[...s.querySelectorAll(sel+' .c')];let prev=null;
  for(const k of ks){while(paused&&my===tok)await sleep(100);if(my!==tok)return;
   if(prev)prev.className='c done';k.className='c on';prev=k;
   const r=k.getBoundingClientRect();spark(r.left+r.width/2,r.bottom-r.height*.3,3);
   await sleep(/\s/.test(k.textContent)?0:d)}
  if(prev)prev.className='c done';await sleep(350)}
 if(my===tok)finish(i,true)}
function finish(i,anim){if(!anim)secs()[i].classList.add('done-all');$('#next').classList.add('ready')}
function go(i){if(i<0||i>=C.length)return;cur=i;track.style.transform=`translateX(${-i*100}vw)`;
 $('#prog').textContent=`CHAPTER ${String(i+1).padStart(2,'0')} / 10`;write(i)}
$('#next').onclick=()=>go(cur+1);$('#prev').onclick=()=>go(cur-1);
$('#rep').onclick=()=>{paused=false;setPP();write(cur)};
$('#skip').onclick=()=>{tok++;secs()[cur].classList.add('done-all');secs()[cur].querySelectorAll('.c').forEach(k=>k.className='c');finish(cur)};
function setPP(){const b=$('#pp');b.textContent=paused?'▶':'❚❚';b.setAttribute('aria-label',paused?'Resume writing':'Pause writing')}
$('#pp').onclick=()=>{paused=!paused;setPP()};
const au=$('#aud');$('#mus').onclick=e=>{const b=e.currentTarget,on=b.getAttribute('aria-pressed')!=='true';
 b.setAttribute('aria-pressed',on);on?au.play().catch(()=>{}):au.pause()};
let x0=null;addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(d)>60)go(cur+(d<0?1:-1))});
addEventListener('keydown',e=>{if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
go(0);
})();
