import { PANEL_COUNT, panelMotion } from './motion.js';
import { interiorCue } from './lighting.js?v=window-sync-1';
// A geometry-first Canvas fallback: independent of WebGL, textures and external assets.
// Canvas surfaces are lit locally by distinct daylight and red-light palettes.
const TAU = Math.PI * 2;
const clamp = x => Math.max(0, Math.min(1, x));
const mix = (a,b,t) => a+(b-a)*t;
const hash = (i) => { const x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x); };
const rgb=(a,b,t)=>'rgb('+a.map((v,i)=>Math.round(mix(v,b[i],t))).join(',')+')';
const glyphs=['勤学笃行','静思敏学','知行合一','志存高远','明德格物','博学善思','循序渐进','求真务实','精进不息','励志力行','笃行致远','温故知新'];
const upper=[214,209,184], wallRed=[140,19,21], slate=[110,111,101], lowRed=[45,17,22];
const pavings=[[155,157,153],[145,148,146],[164,164,155],[146,147,140],[169,166,156]];
const font=(size,weight=600)=>weight+' '+Math.max(.8,size).toFixed(2)+'px "Noto Sans CJK SC","Microsoft YaHei",sans-serif';

export function createFallback(canvas){
 const ctx=canvas.getContext('2d',{alpha:false});
 if(!ctx)throw new Error('Canvas2D unavailable');
 let w=0,h=0,last=null;
 function resize(){
   const rect=canvas.getBoundingClientRect();
   const dpr=Math.min(1.6,globalThis.devicePixelRatio||1);
   const nw=Math.max(1,Math.round(rect.width*dpr)),nh=Math.max(1,Math.round(rect.height*dpr));
   if(nw!==w||nh!==h){canvas.width=w=nw;canvas.height=h=nh;last=null;}
 }
 function polygon(ps,fill,stroke=null,lineWidth=1){
  ctx.beginPath();ctx.moveTo(ps[0][0],ps[0][1]);
  for(let i=1;i<ps.length;i++)ctx.lineTo(ps[i][0],ps[i][1]);
  ctx.closePath();
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lineWidth;ctx.stroke();}
 }
 function line(ps,stroke,width=1){
  ctx.beginPath();ctx.moveTo(ps[0][0],ps[0][1]);
  for(let i=1;i<ps.length;i++)ctx.lineTo(ps[i][0],ps[i][1]);
  ctx.lineWidth=width;ctx.strokeStyle=stroke;ctx.stroke();
 }
 function oval(x,y,rx,ry,fill){
  if(rx<=0||ry<=0)return;
  ctx.fillStyle=fill;ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,TAU);ctx.fill();
 }
 function grad(x,y,x2,y2,stops){
  const g=ctx.createLinearGradient(x,y,x2,y2);
  for(const [s,c] of stops)g.addColorStop(s,c);
  return g;
 }
 function radial(x,y,r,stops){
  const g=ctx.createRadialGradient(x,y,0,x,y,Math.max(1,r));
  for(const [s,c] of stops)g.addColorStop(s,c);
  return g;
 }
 function label(s,x,y,size,fill,align='center'){
  ctx.font=font(size);ctx.textBaseline='middle';ctx.textAlign=align;ctx.fillStyle=fill;ctx.fillText(s,x,y);
 }
 const skyTints=['#9fb1b7','#abbdc1','#cbd3cf','#d8d6c6'];
 function outside(progress,time){
  ctx.fillStyle=grad(0,0,0,h*.76,skyTints.map((v,i)=>[i/3,v]));ctx.fillRect(0,0,w,h);
  // Cloud banks are broad, layered and static, so the fabric, not the camera, moves.
  for(let i=0;i<42;i++){
   const x=w*hash(i+14),y=h*(.02+.28*hash(i+710)),r=w*(.03+.13*hash(i+44));
   ctx.save();ctx.translate(x,y);ctx.scale(1,.26+hash(i+82)*.42);
   oval(0,0,r,r,radial(0,0,r,[[0,i%3===0?'#e5e3d178':'#e6eae266'],[1,'#e6eae200']]));
   ctx.restore();
  }
  const f=(u,v)=>[w*(.066+.816*u-.038*v+.067*u*v),h*(.274-.092*u+.501*v+.021*u*v)];
  const face=(u1,v1,u2,v2,fill,stroke=null,width)=>polygon([f(u1,v1),f(u2,v1),f(u2,v2),f(u1,v2)],fill,stroke,width);
  const rowLine=(a,b,c,d,col,width)=>line([f(a,b),f(c,d)],col,width);
  const groundGrad=grad(0,h*.62,0,h,[[0,'#6e7470'],[.47,'#8c9088'],[1,'#797d77']]);
  polygon([[0,h*.66],[w,h*.61],[w,h],[0,h]],groundGrad);
  // Courtyard paving, patched asphalt, shallow curb against front of building.
  for(let i=0;i<360;i++){
   const x=w*hash(i+53),y=h*(.763+hash(i+503)*.237);
   ctx.fillStyle=i%5===0?'#e1d9bd29':'#313b3825';
   ctx.fillRect(x,y,.5+hash(i+83)*w*.004,.55+hash(i+22)*h*.0018);
  }
  for(let i=1;i<5;i++)line([[w*(.50+i*.059),h*.755],[w*(.44+i*.129),h]],'#c1bbae24',h*.0012);
  line([[w*.02,h*.864],[w*.54,h*.792],[w,h*.768]],'#b4b2a47d',h*.0021);
  polygon([f(0,1.028),f(1,1.028),[w*.99,h*.765],[w*.067,h*.858]],'#454c46');
  // Right side returns from the long face, under deeper shade.
  const br=f(1,1),tr=f(1,0);const sx=w*.063,sy=h*.027;
  polygon([tr,[tr[0]+sx,tr[1]+sy],[br[0]+sx*.80,br[1]-.045*h],br],grad(tr[0],0,tr[0]+sx,0,[[0,'#69463d'],[1,'#47342d']]));
  for(let j=0;j<6;j++){
   const v=.059+j*.158;
   polygon([f(1,v),[f(1,v)[0]+sx*.78,f(1,v)[1]+sy*.6],[f(1,v+.13)[0]+sx*.76,f(1,v+.13)[1]+sy*.19],f(1,v+.13)],'#283a39');
   rowLine(.99,v+.139,1,v+.139,'#c7a38b',1);
  }
  face(0,0,1,1,grad(0,h*.2,0,h*.79,[[0,'#996651'],[.54,'#a6765d'],[1,'#724e40']]));
  for(let j=1;j<67;j++){
   const v=j/67;
   rowLine(0,v,1,v,j%3?'#d0aa903e':'#583f373d',Math.max(.46,h*.001));
   if(j%2)for(let i=0;i<60;i++){
    const u=(i+(j%4)*.25)/60;if(u<1)rowLine(u,v-.0147,u,v,'#e0ba9d38',.7);
   }
  }
  const levelN=6, bayN=21;
  for(let j=0;j<levelN;j++){
   const t=(j+.235)/levelN,b=(j+.908)/levelN;
   face(.008,t-.016,.994,b+.013,'#654a3c');
   for(let i=0;i<bayN;i++){
    const l=(i+.15)/bayN,r=(i+.91)/bayN,g=hash(i+j*12);
    face(l,t,r,b,rgb([38,62,61],[100,129,119],g*.8+.10));
    face(l+.003,t+.006,r-.002,mix(t,b,.43),rgb([86,112,108],[161,178,157],g*.64));
    face(l+.001,mix(t,b,.50),r-.001,b-.009,'#29474152');
    for(let k=0;k<3;k++)rowLine(mix(l,r,k/3),t,mix(l,r,k/3),b,'#bcc6aa90',Math.max(.8,h*.0018));
    rowLine(l,mix(t,b,.52),r,mix(t,b,.52),'#adbba27d',Math.max(.65,h*.00125));
    if(i%3===0)face(mix(l,r,.60),t+.008,mix(l,r,.88),b-.006,'#e8dcc655');
    rowLine(l,b,r,b,'#ccbda995',Math.max(1,h*.0027));
   }
   rowLine(0,b+.014,1,b+.014,'#693e39a6',h*.006);
   rowLine(0,b+.018,1,b+.018,'#ddac897c',h*.001);
  }
  face(0,-.026,1,-.003,'#626f67');
  rowLine(-.007,-.03,1.004,-.03,'#d4d0b5',h*.0052);
  rowLine(0,-.005,1,-.005,'#494d42',h*.001);
  // Each cloth unrolls from a fixed roof spool. Its fabric-wrapped bottom weight
  // descends with the hem and follows that strip's settle/recoil rather than the spool.
  const n=PANEL_COUNT;const bw=w*.799/n;
  for(let j=0;j<n;j++){
   const l=.031+j*.951/n+(.002*(j%2)),r=l+.947/n;
   const base=.685+.018*hash(j+21),top=.011+.004*hash(j+141);
   const state=panelMotion(progress,j,n);
   const a=state.drop, held=clamp(a);
   const bottom=top+.018*(1-held)+(base-top)*a;
   const taut=1-clamp(Math.abs(state.velocity)/1.2)*.75;
   const asymmetry=.0025*Math.sin(j*.85+time*2.5)*(1+Math.abs(state.recoil)*10)*taut;
   const warp=(u,v)=>{const p=f(u,v),travel=(v-top)/(base-top),edge=(u-l)/(r-l)-.5;
    return [p[0]+bw*(.22*Math.sin(v*38-time*5+j*.59)*travel*taut+.8*state.recoil*edge),
      p[1]+h*asymmetry*edge*travel*travel];};
   if(a>.002){
    const p1=warp(l,top),p2=warp(r,top),p3=warp(r,bottom),p4=warp(l,bottom+.006*a);
    const shadow=[p1,p2,p3,p4].map(([x,y])=>[x+h*.004,y+h*.006]);
    polygon(shadow,'#30180a68');
    const gun=hash(j+23), sh=grad(p1[0],0,p2[0],0,[[0,'#811a23'],[.26,rgb([149,23,30],[190,50,58],gun)],[.69,rgb([194,39,45],[212,67,73],gun)],[.94,'#a32a34'],[1,'#81252a']]);
    polygon([p1,p2,warp(r+.001,bottom-.005),p3,p4,warp(l-.001,(top+bottom)*.69)],sh,'#5a1b22',Math.max(.35,w*.00053));
    ctx.save();ctx.beginPath();ctx.moveTo(...p1);ctx.lineTo(...p2);ctx.lineTo(...p3);ctx.lineTo(...p4);ctx.closePath();ctx.clip();
    const letters=(glyphs[j%glyphs.length]+glyphs[(j+3)%glyphs.length]).repeat(2);
    const fontSize=bw*.77;const stride=(base-top)/17.2;
    for(let k=0;k<16;k++){
     const v=top+.021+k*stride;if(v>bottom+.02)break;
     const [x,y]=warp((l+r)/2,v);label(letters[k],x,y,fontSize,rgb([251,225,195],[232,210,188],gun));
    }
    for(let k=0;k<5;k++){
     const v=top+(bottom-top)*(k+1)/6;
     const m=warp(l,v),e=warp(r,v+.005);
     line([m,e],k%2?'#f6bd991e':'#3d0e171d',.85);
    }
    ctx.restore();
    line([p4,p3],'#d96867a4',Math.max(.48,h*.0014));
   }
   // The cloth-wrapped weight is a folded oxblood seam, not shiny hardware.
   // Its lip stays legible at both the roof and the sill.
   const yTrim=bottom+.006*a;
   const a1=warp(l-.0015,yTrim),a2=warp(r+.0015,bottom);
   const bar=Math.max(2.6,h*.0067);
   polygon([[a1[0]+bar*.32,a1[1]+bar*.81],[a2[0]+bar*.34,a2[1]+bar*.77],
    [a2[0]+bar*.48,a2[1]+bar*1.37],[a1[0]+bar*.47,a1[1]+bar*1.48]],'#3412188f');
   polygon([a1,a2,[a2[0],a2[1]+bar],[a1[0],a1[1]+bar]],'#6c202b');
   line([[a1[0],a1[1]+bar*.13],[a2[0],a2[1]+bar*.13]],'#a6434a',Math.max(.74,bar*.20));
   line([[a1[0],a1[1]+bar*.91],[a2[0],a2[1]+bar*.91]],'#501820',Math.max(.57,bar*.19));
   const cap=Math.max(.8,bar*.36);
   polygon([a1,[a1[0]+cap,a1[1]],[a1[0]+cap,a1[1]+bar],[a1[0],a1[1]+bar]],'#853039');
   polygon([[a2[0]-cap,a2[1]],a2,[a2[0],a2[1]+bar],[a2[0]-cap,a2[1]+bar]],'#87313b');
   const start=f(l-.001,top),end=f(r+.001,top);
   const roll=h*(.010-.006*held);
   line([start,end],'#63232a',roll);
   line([[start[0],start[1]-roll*.24],[end[0],end[1]-roll*.24]],'#df6261',roll*.25);
   oval(start[0],start[1],roll*.32,roll*.43,'#572b2d');
  }
  // Lower entrance portico, stairs and lettering. It stays uncovered as in the reference.
  face(.405,.800,.612,1.012,'#3e3532');
  face(.421,.808,.596,.973,'#26302d');face(.442,.832,.571,.972,'#172723');
  for(let i=0;i<4;i++){
   const u=.432+i*.043;
   face(u,.837,u+.032,.972,'#35433e');
   rowLine(u+.018,.842,u+.018,.963,'#9d9d82',h*.002);
  }
  for(const u of [.397,.456,.556,.608])face(u,.778,u+.014,1.004,'#816b5c');
  const over=[f(.382,.772),f(.638,.772),[f(.635,.80)[0]+w*.018,f(.635,.80)[1]+h*.019],[f(.382,.80)[0]+w*.012,f(.382,.80)[1]+h*.019]];
  polygon(over,'#a09a7c');line([over[2],over[3]],'#645849',h*.008);
  const [mx,my]=f(.505,.767);label('明  川  教  学  楼',mx,my,h*.021,'#ede0a3');
  for(let j=3;j>=0;j--){
   const a=f(.381-j*.003,1.010+j*.011),b=f(.646+j*.002,1.008+j*.011);
   line([a,b],j%2?'#8e8a7e':'#aaa396',h*.0055);
   line([[a[0],a[1]+h*.004],[b[0],b[1]+h*.004]],'#504a41',h*.003);
  }
  // Distinct masses and trunks, not a field of identical dots.
  tree(w*.087,h*.777,h*.185,431);tree(w*.898,h*.740,h*.155,991);
  tree(w*.270,h*.780,h*.076,446);tree(w*.737,h*.754,h*.068,1292);
  // Concrete plant beds in foreground.
  for(const [x,y,s] of [[.204,.818,.133],[.689,.797,.109],[.850,.783,.10]]){
   polygon([[w*x,h*y],[w*(x+s),h*(y-.018)],[w*(x+s-.014),h*(y+.001)],[w*(x-.013),h*(y+.019)]],'#b0a796');
   polygon([[w*(x-.013),h*(y+.019)],[w*(x+s-.014),h*(y+.001)],[w*(x+s-.014),h*(y+.015)],[w*(x-.013),h*(y+.031)]],'#726a5c');
  }
 }
 function tree(x,y,s,seed){
  oval(x+s*.1,y+s*.034,s*.83,s*.13,'#35413672');
  polygon([[x-s*.074,y],[x+s*.069,y],[x+s*.039,y-s*1.19],[x-s*.018,y-s*1.19]],'#584639');
  line([[x,y-s*.67],[x-s*.39,y-s*1.04],[x-s*.57,y-s*1.2]],'#645041',s*.040);
  line([[x,y-s*.55],[x+s*.46,y-s*.92],[x+s*.55,y-s*1.16]],'#574434',s*.052);
  for(let i=0;i<122;i++){
   const a=hash(i+seed)*TAU,d=Math.sqrt(hash(i+seed+848));
   const px=x+Math.cos(a)*d*s*.85,py=y-s*1.15+Math.sin(a)*d*s*.62;
   const r=s*(.063+hash(i+714+seed)*.125);
   const col=rgb([25,47,33],[116,128,72],hash(i+42+seed)*.67+.12+Math.max(0,-Math.sin(a))*.16);
   oval(px,py,r,r*.69,col);
   oval(px-r*.17,py-r*.18,r*.64,r*.34,'#b5b47716');
  }
 }
 function inside(progress,time,well){
  const {red,day,overhead,cover,reflections}=interiorCue(progress), ratio=w/h;
  const len=33, left=-1.8,right=1.85, camX=-.73, eye=1.66;
  const van=[w*(ratio<1?.60:.64),h*.449];
  const focal=h*(ratio<1?.91:1.35);
  const p=(x,y,z)=>{const k=focal/Math.max(.18,z+.38);return [van[0]+(x-camX)*k,van[1]+(eye-y)*k];};
  const wall=(x,z1,y1,z2,y2,fill,stroke=null,thick)=>polygon([p(x,y1,z1),p(x,y1,z2),p(x,y2,z2),p(x,y2,z1)],fill,stroke,thick);
  const flat=(y,x1,z1,x2,z2,fill,stroke=null,thick)=>polygon([p(x1,y,z1),p(x2,y,z1),p(x2,y,z2),p(x1,y,z2)],fill,stroke,thick);
  const across=(z,x1,y1,x2,y2,fill,stroke=null,thick)=>polygon([p(x1,y1,z),p(x2,y1,z),p(x2,y2,z),p(x1,y2,z)],fill,stroke,thick);
  const wallLine=(x,z1,y1,z2,y2,c,thick)=>line([p(x,y1,z1),p(x,y2,z2)],c,thick);
  const ground=[p(left,0,0),p(right,0,0),p(right,0,len),p(left,0,len)];
  const ceilY=3.43,leftFill=grad(0,0,w*.52,h*.82,[[0,rgb([212,207,186],[173,25,24],red)],[.62,rgb(upper,wallRed,red)],[1,rgb([105,112,109],[76,17,20],red)]]);
  const rightFill=grad(w,0,w*.54,h*.65,[[0,rgb([181,177,159],[101,14,20],red)],[.71,rgb([175,177,164],[91,14,18],red)],[1,rgb([111,119,117],[54,12,16],red)]]);
  const ceiling=grad(w*.07,h*.08,w*.94,h*.55,[[0,rgb([218,214,192],[158,21,19],red)],[.56,rgb([189,187,171],[111,18,20],red)],[1,rgb([143,148,143],[52,13,17],red)]]);
  ctx.fillStyle=rgb([161,174,159],[107,11,17],red);ctx.fillRect(0,0,w,h);
  wall(left,0,0,len,ceilY,leftFill);wall(right,0,0,len,ceilY,rightFill);
  flat(ceilY,left,0,right,len,ceiling);
  polygon(ground,grad(0,h*.47,0,h,[
   [0,rgb([146,153,145],[72,26,32],red)],[.38,rgb([150,150,130],[43,15,17],red)],[1,rgb([126,126,110],[15,10,13],red)]]));
  // Molded low wainscot and glossy ceramic strips are separate materials.
  for(const [x,base] of [[left,slate],[right,[97,105,94]]]){
   wall(x,0,.106,len,1.02,grad(w*(x<0?.07:.96),h*.43,w*.60,h*.85,[[0,rgb(base,lowRed,red)],[1,rgb([100,111,105],[25,12,15],red)]]));
   wallLine(x,0,1.025,len,1.025,rgb([153,155,132],[126,35,37],red),h*.0027);
   wallLine(x,0,.13,len,.13,rgb([49,65,56],[32,10,12],red),h*.0022);
   wallLine(x,0,.08,len,.08,rgb([82,96,83],[63,18,21],red),h*.0015);
  }
  const exit=[68,178,207], exitHot=[199,239,234];
  const endDepth=32.93;
  across(endDepth,left+.03,.03,right-.03,ceilY-.025,rgb([173,187,174],[82,30,35],red));
  const endL=-.88,endR=1.12;
  across(endDepth-.06,endL-.14,.00,endR+.14,2.92,rgb([72,96,92],[43,57,66],red));
  across(endDepth-.08,endL,.035,endR,2.79,rgb([134,184,182],exit,.9*well+.10));
  const e1=p(endL,.06,endDepth),e2=p(endR,2.76,endDepth);
  across(endDepth-.10,endL,.91,endR,2.76,grad(e1[0],e1[1],e2[0],e2[1],[[0,rgb([108,141,139],exit,.83*well)],[.58,rgb([119,164,167],exitHot,.64*well+.24)],[1,rgb([147,203,205],[245,247,214],.44*well+.26)]]));
  across(endDepth-.13,endL,.06,endR,.92,rgb([82,119,120],[61,152,177],well));
  across(endDepth-.13,-.07,.055,-.025,2.76,rgb([96,135,130],[77,183,201],well));
  across(endDepth-.12,endL,1.82,endR,1.85,rgb([92,133,133],[89,178,184],well));
  across(endDepth-.12,endL,2.77,endR,2.81,'#dff6e288');
  // Tiny transom and exit lamp remain legible against the far room.
  const [ex,ey]=p(.13,3.03,endDepth-.1); const exScale=focal/(endDepth+.38);
  ctx.fillStyle=rgb([30,70,63],[49,138,133],well);ctx.fillRect(ex-exScale*.26,ey-exScale*.09,exScale*.52,exScale*.18);
  line([[ex-exScale*.15,ey],[ex+exScale*.12,ey]],'#cfedcb',1);
  // Every specular streak is clipped to the floor, not a screen-wide red pass.
  ctx.save();ctx.beginPath();ctx.moveTo(...ground[0]);for(let i=1;i<ground.length;i++)ctx.lineTo(...ground[i]);ctx.closePath();ctx.clip();
  for(let i=0;i<55;i++){
   const z=i*.60,z2=z+.602;
   for(let j=0;j<6;j++){
    const c=pavings[(i*7+j)%pavings.length];
    flat(.001,mix(left,right,j/6),z,mix(left,right,(j+1)/6),z2,rgb(c,[c[0]*.15+11,c[1]*.09+5,c[2]*.09+7],red));
   }
   line([p(left,.001,z),p(right,.001,z)],rgb([200,197,175],[67,35,33],red),Math.max(.26,.7/(.2+z/3)));
  }
  for(let i=0;i<7;i++)line([p(mix(left,right,i/6),0,0),p(mix(left,right,i/6),0,len)],rgb([117,122,107],[35,26,25],red),.66);
  const exitClose=p(.12,0,16),exitFar=p(.12,0,len);
  flat(.012,endL+.08,len-.08,endR-.12,12.6,grad(exitFar[0],exitFar[1],exitClose[0],exitClose[1],[[0,'rgba(168,233,252,'+(.27+well*.64)+')'],[.54,'rgba(90,162,191,'+(.07+well*.36)+')'],[1,'#619cb000']]));
  for(let i=0;i<71;i++){
   const z=13+20*hash(i+163),x=.10+(hash(i+19)-.5)*1.9,len_=hash(i+81)*.44+.10;
   const pos=p(x,.013,z);const sx=focal*len_/(z+.38);
   ctx.globalAlpha=(.03+well*.17)*hash(i+213);
   oval(pos[0],pos[1],sx,Math.max(.42,sx*.083),'#c1eff4');
   ctx.globalAlpha=1;
  }
  for(let i=0;i<10;i++){
   const z=2.65+i*3;
   const pulse=.52+.47*hash(i+366);
   const L=p(left,0,z+.92),R=p(.65,0,z-.45);
   const g=grad(L[0],L[1],R[0],R[1],[[0,'rgba(226,211,155,'+(.28*day)+')'],[.27,'rgba(233,40,30,'+(.35*reflections*pulse)+')'],[1,'rgba(182,24,23,0)']]);
   polygon([p(left,0,z+1.09),p(left,0,z-.12),p(.92,0,z-.99),p(.57,0,z-.46)],g);
   const glow=p(-.66,0,z+.12);
   ctx.save();ctx.translate(glow[0],glow[1]);ctx.scale(.47,1);
   const rad=Math.min(h*.20,focal*.34/(z+.38));
   oval(0,0,rad,rad,radial(0,0,rad,[[0,'rgba(235,37,42,'+(.22*reflections*pulse)+')'],[1,'#cf162500']]));
   ctx.restore();
   for(let k=0;k<5;k++){
    const s=z+(k-.8)*.18,r=p(mix(-1.25,-.75,hash(k+i*13)),0,s), rr=Math.max(.65,focal*.035/(s+.38));
    oval(r[0],r[1],rr*3,rr*.76,'rgba(224,65,46,'+(.14*reflections*pulse)+')');
   }
  }
  ctx.fillStyle=grad(0,h*.59,w*.10,h,[[0,'#11090b00'],[1,'rgba(8,5,8,'+(.10+red*.58)+')']]);ctx.fillRect(0,h*.49,w,h*.51);
  ctx.restore();
  // Nearest geometry drawn last. Every window shares one occlusion and light cue.
  for(let i=9;i>=0;i--){
   const z=.12+i*3.24,z2=Math.min(len,z+3.24);
   const r=red;
   const q=hash(i+8);
   const top=p(left,2.89,z+.61), bottom=p(left,1.04,z2-.4);
   // The uncovered section remains genuine green-gray daylight glass. Only
   // geometry actually masked by the descending red cloth is filtered red.
   const panel=grad(top[0],top[1],bottom[0],bottom[1],[
    [0,'#aec9c5'],[.42,'#bbd1c2'],[1,'#6a8f8b']]);
   const near=Math.max(.35,z+.39), far=z2-.38, wpos=left+.022;
   wall(wpos,near,1.075,far,2.85,'#272c29');
   wall(wpos+.005,near+.035,1.115,far-.040,2.807,panel);
   if(cover<1){
    const overlay=.28+q*.25;
    ctx.globalAlpha=overlay;
    wall(wpos+.009,near+.06,1.12,far-.051,1.65,grad(0,bottom[1],0,top[1],[[0,'#697d4d'],[.65,'#283d3355'],[1,'#c4d1b800']]));
    wall(wpos+.010,near+.12,1.78,far-.16,2.74,'#edf4d744');
    ctx.globalAlpha=1;
   }
   // One common sweep covers the glass top-down. The same cover value
   // drives room lighting, the red region, and the leading folded seam.
   if(cover>0){
    const gx=wpos+.005,zNear=near+.035,zFar=far-.040,high=2.807,low=1.115;
    ctx.save();wall(gx,zNear,low,zFar,high,null);ctx.clip();
    for(let k=0;k<4;k++){
     const s=mix(zNear,zFar,k/4), e=mix(zNear,zFar,(k+1)/4);
     const y=mix(high,low,cover), hot=.8+.19*Math.sin(time*1.6+i*.44+k*.38);
     const paneRed=(.65+.35*r)*hot;
     // Very small overlap avoids antialias cracks; the aperture clips all edges.
     wall(gx,s-.002,y,e+.002,high,rgb([143,19,29],[241,62,61],paneRed));
     wallLine(gx,e-.011,y,e-.011,high,'rgba(255,190,144,'+r*.46+')',Math.max(.52,1.9/(.9+s*.13)));
     if(cover<1)wall(gx,s,y,e,Math.min(high,y+.026),'#801d27');
     ctx.save();wall(gx,s,y,e,high,null);ctx.clip();
     for(let row=0;row<5;row++){
      const hm=2.65-row*.314;
      if(hm<y+.05)break;
      const m=p(gx,hm,mix(s,e,.54)),f=focal/(mix(s,e,.54)+.38);
      // The reference is seen from the reverse cloth side.
      if(f>12){
       ctx.save();ctx.translate(...m);ctx.scale(-.70,1);
       label(glyphs[(i+k)%glyphs.length][row%4],0,0,f*.18,'rgba(255,181,172,'+r*.31+')');
       ctx.restore();
      }
     }
     ctx.restore();
    }
    ctx.restore();
   }
   for(let k=1;k<=3;k++){
    const s=mix(near,far,k/4);
    wallLine(wpos+.023,s,1.102,s,2.827,rgb([80,103,93],[74,12,16],r),Math.max(.56,focal*.025/(s+.39)));
   }
   const thickness=Math.max(.6,focal*.040/(near+.45));
   wallLine(wpos+.023,near,1.80,far,1.80,rgb([85,105,94],[89,12,16],r),thickness);
   wallLine(wpos+.024,near,2.84,far,2.84,rgb([103,119,103],[80,13,16],r),thickness*.72);
   const protrude=.122;
   flat(1.066,left,near,left+protrude,far,rgb([182,170,143],[122,27,28],r));
   wall(left+protrude,near,1.035,far,1.067,rgb([118,124,102],[97,18,22],r));
   // Red light spills onto the ceiling edge, behind the nearer beam.
   const yCeil=ceilY-.012;
   const aa=p(left+.02,yCeil,z+.57),bb=p(left+2.68,yCeil,z+1.04);
   flat(yCeil,left+.02,z+.42,left+2.84,z2-.49,grad(...aa,...bb,[[0,'rgba(252,62,49,'+(r*.23)+')'],[.60,'rgba(254,43,35,'+(r*.09)+')'],[1,'#f5272400']]));
   // Slightly uneven, warm bounce on the opposing classroom wall.
   const ry=p(right-.02,.70,z2-1.14),rr=p(right-.02,1.82,z+.84);
   wall(right-.014,z+.67,.36,z2-.57,2.01,grad(...ry,...rr,[[0,'#a30c1100'],[.57,'rgba(190,31,37,'+(r*.29)+')'],[1,'#ac121500']]));
   // Right classroom doorway, shadowed recess, door leaf, upper panel and plaque.
   const j=z+.46,k=z+1.45;
   wall(right-.025,j-.064,.025,k+.08,2.55,rgb([101,124,110],[59,22,24],r));
   wall(right-.027,j,.037,k,2.47,rgb([57,75,68],[29,15,18],r));
   wall(right-.036,j+.076,.07,k-.070,2.41,rgb([124,141,123],[57,25,28],r));
   wall(right-.039,j+.126,1.13,k-.129,2.16,rgb([82,105,98],[29,14,17],r));
   wall(right-.044,j+.16,1.16,k-.15,2.117,rgb([146,166,153],[56,21,25],r));
   wallLine(right-.048,j+.16,1.52,k-.15,1.52,rgb([83,96,83],[57,18,21],r),.66);
   wallLine(right-.042,j+.227,.19,k-.10,.19,rgb([173,169,142],[92,42,39],r),.67);
   const [knx,kny]=p(right-.055,1.005,k-.13);
   oval(knx,kny,Math.max(.45,focal*.020/(k+.38)),Math.max(.45,focal*.023/(k+.38)),rgb([213,187,134],[95,31,29],r));
   wall(right-.025,k+.12,2.41,k+.55,2.59,rgb([86,108,98],[78,26,29],r));
   if(i<6){
    const b1=p(right-.034,2.505,k+.14),b2=p(right-.034,2.505,k+.52);
    const tx=(b1[0]+b2[0])*.5,ty=(b1[1]+b2[1])*.5;
    label(String(301+i),tx,ty,Math.max(1.5,(b1[1]-b2[1])*.79),rgb([234,243,209],[189,92,77],r));
   }
   wall(right-.023,k+.37,1.14,z2-.34,2.27,rgb([89,112,105],[51,19,23],r));
   wall(right-.029,k+.41,1.204,z2-.391,2.21,rgb([151,169,158],[62,22,25],r));
   wallLine(right-.032,k+.82,1.2,k+.82,2.22,rgb([87,116,106],[81,29,29],r),1.0);
   // Left masonry pilaster projects inward and is lit from its rear window edge.
   const cZ=z+.061,cFar=z+.302,cX=left+.196;
   const [cx,cy]=p(cX,1.36,cZ); const topC=p(cX,3.39,cZ);const botC=p(cX,0,cZ);
   wall(cX,cZ,0,cFar,3.43,grad(...topC,...botC,[[0,rgb([188,179,156],[160,24,23],r)],[.61,rgb([182,176,153],[112,19,23],r)],[1,rgb([87,93,80],[38,15,18],r)]]));
   across(cZ,left,0,cX,3.43,grad(...topC,...botC,[[0,rgb([153,152,136],[109,17,23],r)],[1,rgb([99,108,95],[35,12,17],r)]]));
   wallLine(cX,cFar,1.13,cFar,3.39,rgb([244,228,186],[255,80,60],r),Math.max(.36,1.0/(cFar*.29+.3)));
   if(i%2===0){
    const g1=p(cX+.002,1.81,cFar),g2=p(cX+.002,1.25,cFar-.023);
    const gx=Math.max(1.0,Math.abs(g2[0]-g1[0])*.75), gy=Math.abs(g2[1]-g1[1]);
    if(gy>1)oval(g1[0]-gx*.55,g1[1]+gy*.49,gx,gy*.33,'rgba(244,111,49,'+r*.46+')');
   }
   // Beam bottom, three ceiling plates and their practical-state line.
   across(z+.18,left,3.11,right,3.43,rgb([137,148,133],[81,16,20],r));
   flat(3.11,left,z+.18,right,z+.35,rgb([182,180,157],[122,20,22],r));
   const cPos=p(.12,3.36,z2-1.45), fw=focal/(z2-1.07);
   if(fw>4){
    oval(cPos[0],cPos[1],fw*.126,fw*.040,rgb([153,155,143],[60,15,17],r));
    oval(cPos[0],cPos[1]+fw*.006,fw*.103,fw*.027,rgb([244,239,207],[103,38,34],1-overhead*(i%4===2?.77:1)));
    const fluoro=overhead*(i%4===1?.65:.92);
    if(fluoro>.025){
     const glow=grad(cPos[0]-fw*.74,cPos[1],cPos[0]+fw*.74,cPos[1],[[0,'#e9e8c000'],[.5,'rgba(255,247,207,'+(fluoro*.25)+')'],[1,'#e9e8c000']]);
     oval(cPos[0],cPos[1],fw*.66,fw*.082,glow);
    }
   }
  }
  // An ordinary mop bucket and bench quietly reinforce depth/scale cues.
  for(const [x,z,sz,style] of [[-1.33,9.0,.34,0],[-1.41,5.62,.29,1],[-1.56,2.5,.27,1],[1.55,13.5,.21,0]]){
   const a=p(x,0,z),b=p(x,.47,z);
   const s=focal*sz/(z+.38), bh=a[1]-b[1];
   if(s<1||a[0]<-s*3||a[0]>w+s*3)continue;
   oval(a[0],a[1],s*1.2,s*.36,'#160f12a6');
   if(style){
    line([[a[0]-s*.45,a[1]-s*.13],[a[0]+s*.21,a[1]-bh*2.2]],rgb([113,99,74],[60,24,24],red),Math.max(1, s*.08));
    polygon([[b[0]-s*.85,b[1]],[b[0]+s*.79,b[1]],[a[0]+s*.59,a[1]],[a[0]-s*.57,a[1]]],rgb([111,112,91],[46,18,22],red));
    oval(b[0],b[1],s*.82,s*.20,rgb([57,64,56],[57,16,22],red));
   }else{
    const local=p(x,.60,z-.35);
    polygon([[b[0]-s,b[1]],[b[0]+s,b[1]],[local[0]+s,local[1]],[local[0]-s,local[1]]],rgb([123,95,69],[90,30,27],red));
    for(const f of [-.64,.61])line([[b[0]+f*s,b[1]],[a[0]+f*s,a[1]]],rgb([64,68,54],[39,16,19],red),Math.max(.65,s*.08));
   }
  }
 }
 function draw({view='outside',progress=0,time=0,well=.75}={}){
  if(!w||!h)resize();
  if(w<2||h<2)return;
  const p=clamp(progress), t=Number.isFinite(time)?time:0, end=clamp(well);
  const state=[view,p,Math.floor(t*24),end];
  if(last&&last.every((v,i)=>v===state[i]))return;
  last=state;
  ctx.save();
  if(view==='inside')inside(p,t,end);else outside(p,t);
  ctx.restore();
  // Fine canvas grain from stable sample points; no grading tint.
  ctx.fillStyle='#201b1a12';ctx.globalAlpha=.70;
  for(let i=0;i<440;i++){
   const x=w*hash(i+2904),y=h*hash(i+151);
   ctx.fillRect(x,y,.40+hash(i+375)*1.54,.42+hash(i+840)*1.06);
  }
  ctx.globalAlpha=1;
 }
 return {resize,draw};
}
