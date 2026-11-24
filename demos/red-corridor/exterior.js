// Original procedural architectural model, inspired by the supplied references.
export const SCHOOL = Object.freeze({width:58.8, depth:13.4, levels:6, floor:3.24, strips:56, front:5.8});
const {width:W,depth:D,levels:LEVELS,floor:F,strips:N,front:Z}=SCHOOL;
const clamp=(x,min=0,max=1)=>Math.max(min,Math.min(max,x));
const lerp=(a,b,t)=>a+(b-a)*t;
const smooth=(a,b,t)=>{let u=clamp((t-a)/(b-a));return u*u*(3-2*u);};
const hash=n=>((Math.sin(n*91.3458+78.521)*47453.5453)%1+1)%1;
export function panelDrop(progress,i){
 const delay=.14*(i/(N-1))+.046*hash(i+11);
 const u=clamp((progress-delay)/(.78-.04*hash(i+73)));
 return u*u*(3-2*u);
}
function painted(T,w,h,fn){
 if(typeof document==='undefined')return null;
 const c=document.createElement('canvas');c.width=w;c.height=h;
 const p=c.getContext('2d');if(!p)return null;fn(p);
 const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;map.anisotropy=4;return map;
}
function brickPattern(T){
 const map=painted(T,256,256,p=>{
  p.fillStyle='#86766e';p.fillRect(0,0,256,256);
  for(let j=0;j<12;j++)for(let i=-1;i<=4;i++){
   const x=i*64+(j%2)*32,y=j*256/12,v=hash(i+j*51);
   p.fillStyle=`rgb(${139+~~(v*28)},${83+~~(v*23)},${66+~~(v*20)})`;
   p.fillRect(x+1,y+.9,62.5,256/12-1.5);
   p.fillStyle='rgba(228,185,146,.12)';p.fillRect(x+2,y+1.2,60.5,1.35);
   for(let k=0;k<55;k++){
     p.fillStyle=k%3?'rgba(38,26,29,.10)':'rgba(237,183,152,.14)';
     p.fillRect(x+3+hash(k*3+i+j*12)*57,y+3+hash(k*9+j*23)*15,1+hash(k*7)*2,.65);
   }
  }
 });
 if(map){map.wrapS=map.wrapT=T.RepeatWrapping;}
 return map;
}
const sayings=[
 '循光而行常有回声长风万里青云可至','今日有志来日有为明灯不息步履不停',
 '一程山水一程成长星河为序纸墨有声','恰同学少年愿诸君从此新天地',
 '既望远山亦惜寸阴以心定志久久为功','从此长路遇事不惧伏案耕耘待见曙光',
 '书声如昼愿得所求长日思新灯明心定','星光作伴长路作答把握今日不负此刻'
];
function clothPattern(T,variant){
 return painted(T,128,1024,p=>{
  const g=p.createLinearGradient(0,0,128,0);
  g.addColorStop(0,'#991e2d');g.addColorStop(.2,'#b92a39');g.addColorStop(.43,'#c23543');g.addColorStop(.77,'#b22336');g.addColorStop(1,'#991d30');
  p.fillStyle=g;p.fillRect(0,0,128,1024);
  for(let i=0;i<1050;i++){
   const v=hash(i+variant*71);p.fillStyle=v>.5?'rgba(255,194,146,.08)':'rgba(70,0,20,.13)';
   p.fillRect(hash(i*12+variant*31)*128,hash(i*17+4)*1024,1+v*4,1);
  }
  p.fillStyle='rgba(255,151,151,.33)';p.fillRect(4,0,1,1024);p.fillRect(122,0,1,1024);
  p.fillStyle='#ebd2b9';p.textAlign='center';p.textBaseline='middle';
  p.font='700 50px "Noto Sans CJK SC","Microsoft YaHei","PingFang SC",sans-serif';
  const label=[...sayings[variant]];
  for(let i=0;i<label.length;i++) p.fillText(label[i],64,56+i*54);
  p.fillStyle='rgba(66,4,21,.45)';p.fillRect(0,1008,128,16);
 });
}
export function createExterior(T){
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(35,1.75,.1,185);
 scene.background=new T.Color(0xc6cfd1);
 scene.fog=new T.Fog(0xc6cecc,74,176);
 const sky=new T.Mesh(new T.SphereGeometry(138,22,16),new T.ShaderMaterial({
  side:T.BackSide,depthWrite:false,fog:false,
  vertexShader:`varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
  fragmentShader:`varying vec3 vDir;
   float h(vec2 p){return fract(sin(dot(p,vec2(112.1,311.7)))*43758.5453);}
   float n(vec2 p){vec2 a=floor(p),v=fract(p);v=v*v*(3.-2.*v);return mix(mix(h(a),h(a+vec2(1,0)),v.x),mix(h(a+vec2(0,1)),h(a+vec2(1)),v.x),v.y);}
   void main(){vec3 d=normalize(vDir);vec2 q=d.xz/(.56+max(d.y,0.))*5.;float s=n(q*1.3)*.56+n(q*2.8)*.27+n(q*6.)*.13+n(q*13.)*.04;
   vec3 c=mix(vec3(.72,.76,.74),vec3(.41,.55,.67),smoothstep(0.,.55,d.y));
   float cloud=smoothstep(.44,.73,s)*(.65+.35*smoothstep(0.,.22,d.y));c=mix(c,vec3(.86,.87,.85),cloud*.87);
   gl_FragColor=vec4(c,1.);
   #include <colorspace_fragment>
   }`
 }));
 sky.renderOrder=-20;sky.frustumCulled=false;scene.add(sky);
 scene.add(new T.HemisphereLight(0xf0f4ff,0xa49977,2.08));
 const sun=new T.DirectionalLight(0xffe2bc,1.82);sun.position.set(-44,55,31);scene.add(sun);
 const reflected=new T.DirectionalLight(0xc3dbed,.28);reflected.position.set(25,12,-16);scene.add(reflected);
 const make=(color,opt={})=>new T.MeshStandardMaterial({color,roughness:.83,...opt});
 const brickMap=brickPattern(T);
 const brick=make(brickMap?0xffffff:0xa1624f,{map:brickMap});
 const plaster=make(0xb5a897), beam=make(0xa39b87), curb=make(0xc3baab), dark=make(0x30382f);
 const whiteFrame=make(0x9dac9d,{roughness:.52}), glass=make(0x729b94,{roughness:.39,metalness:.18,emissive:0x324e48,emissiveIntensity:.24});
 const glassInserts=[0x5c7d73,0x789184,0x4c6861,0x91a195,0x68827e].map(c=>make(c,{roughness:.56}));
 const mortar=make(0x777269), door=make(0x4b5248), canopy=make(0xa9a494), trim=make(0x394240);
 const plainBox=new T.BoxGeometry(1,1,1);
 let boxes=new Map();
 function box(w,h,d,x,y,z,m){
  if(m===brick&&brickMap){
   const g=new T.BoxGeometry(w,h,d),u=g.attributes.uv;
   for(let i=0;i<u.count;i++){
    const side=Math.floor(i/4),a=side<2?d:w,b=side===2||side===3?d:h;
    u.setXY(i,u.getX(i)*a/1.56,u.getY(i)*b/.84);
   }
   const b=new T.Mesh(g,m);b.position.set(x,y,z);scene.add(b);return;
  }
  if(!boxes.has(m))boxes.set(m,[]);
  boxes.get(m).push([w,h,d,x,y,z]);
 }
 const dummy=new T.Object3D();
 function finishBoxes(){
  for(const [mat,arr] of boxes){
   const out=new T.InstancedMesh(plainBox,mat,arr.length);
   arr.forEach(([w,h,d,x,y,z],i)=>{
    dummy.position.set(x,y,z);dummy.scale.set(w,h,d);dummy.rotation.set(0,0,0);dummy.updateMatrix();out.setMatrixAt(i,dummy.matrix);
   });
   out.computeBoundingSphere();scene.add(out);
  }
  boxes.clear();
 }
 const asphaltMap=painted(T,128,128,p=>{
  p.fillStyle='#817e73';p.fillRect(0,0,128,128);
  for(let i=0;i<2700;i++){const v=hash(i+721);p.fillStyle=v>.55?'rgba(234,229,209,.19)':'rgba(36,41,42,.2)';p.fillRect(hash(i*11+4)*128,hash(i*19+3)*128,.65+v*2,.5+v);}
 });
 if(asphaltMap){asphaltMap.wrapS=asphaltMap.wrapT=T.RepeatWrapping;asphaltMap.repeat.set(36,44);}
 const yard=new T.Mesh(new T.PlaneGeometry(270,270),make(asphaltMap?0xadb1a9:0x858781,{map:asphaltMap}));yard.rotation.x=-Math.PI/2;yard.position.set(0,-.025,29);scene.add(yard);
 const zBack=Z-D, zSide=(Z+zBack)/2, top=.28+LEVELS*F;
 box(W+.75,.48,D+.65,0,.23,zSide,curb);
 box(W-.04,top-.39,D-.44,0,top/2,zSide,plaster);
 box(W+.95,.37,D+.83,0,top,zSide,beam);
 box(W+.62,.17,D+.64,0,top+.245,zSide,trim);
 box(W+.35,.92,.34,0,top-.08,Z+.11,brick);
 box(W+.72,.12,.56,0,top+.34,Z+.14,curb);
 const cols=20,dx=W/cols;
 for(let level=0;level<LEVELS;level++){
  const y=.28+level*F,front=Z+.005,winY=y+1.55;
  box(W,.76,.34,0,y+.45,front,brick);
  box(W,.20,.58,0,y+.86,front+.02,curb);
  box(W,.46,.43,0,y+2.97,front,brick);
  box(W,.095,.53,0,y+3.205,front+.023,beam);
  box(W,.085,.18,0,y+2.71,front+.23,beam);
  for(let j=0;j<=cols;j++){
   const x=-W*.5+j*dx;
   box(j===0||j===cols?.48:.20,2.22,.27,x,y+1.85,front+.05,plaster);
  }
  for(let j=0;j<cols;j++){
   const x=-W*.5+(j+.5)*dx;
   box(dx-.19,1.78,.095,x,winY+.21,front+.105,dark);
   box(dx-.29,1.66,.073,x,winY+.21,front+.166,glassInserts[(j*4+level*3)%glassInserts.length]);
   for(let k=0;k<3;k++){
    const xx=x+(k-1)*(dx-.26)/3;
    box((dx-.37)/3,1.52,.049,xx,winY+.216,front+.209,glass);
    if(hash(j*31+level*9+k)>.67)box(.15,1.45,.018,xx+(k%2?.26:-.26),winY+.21,front+.241,glassInserts[(j+level)%5]);
   }
   for(let k=0;k<4;k++)box(.047,1.72,.092,x+(k-1.5)*(dx-.24)/3,winY+.21,front+.267,whiteFrame);
   for(const yy of [winY-.62,winY+.075,winY+1.045])box(dx-.22,.055,.092,x,yy,front+.267,whiteFrame);
  }
  for(const sign of [-1,1]){
   const x=sign*W*.5;
   box(.32,.69,D,x,y+.44,zSide,brick);box(.4,.44,D,x,y+2.94,zSide,brick);
   for(let j=0;j<5;j++){
    const zz=Z-.8-(j+.5)*(D-1.4)/5, dd=(D-1.4)/5-.32;
    box(.13,1.71,dd,x+sign*.13,winY+.21,zz,dark);
    box(.13,1.57,dd-.09,x+sign*.175,winY+.21,zz,glass);
    box(.19,1.65,.068,x+sign*.21,winY+.21,zz,whiteFrame);
    box(.19,.064,dd,x+sign*.21,winY+.14,zz,whiteFrame);
   }
  }
 }
 // Central entrance and silver lettered modest school sign.
 box(12.8,3,.62,0,1.76,Z+.19,dark);
 for(let i=-2;i<=2;i++){
  box(1.95,2.58,.11,i*2.49,1.45,Z+.54,door);
  box(1.73,1.69,.15,i*2.49,1.81,Z+.63,glassInserts[2]);
  box(.065,2.43,.19,i*2.49,1.4,Z+.70,whiteFrame);
  box(1.82,.08,.19,i*2.49,1.44,Z+.70,trim);
 }
 box(15.25,.35,4.18,0,3.85,Z+2.08,canopy);
 box(15.32,.12,4.23,0,4.055,Z+2.09,curb);
 for(const x of [-6.54,-3.25,3.25,6.54]){
  box(.66,3.57,.61,x,1.89,Z+3.59,brick);box(.83,.16,.79,x,.33,Z+3.59,plaster);
 }
 for(let k=0;k<4;k++)box(16.3-1.12*k,.14+.13*k,5.6-.79*k,0,.07+.065*k,Z+2.65,canopy);
 const schoolSign=painted(T,512,80,p=>{
   p.fillStyle='#373f3e';p.fillRect(0,0,512,80);
   p.textAlign='center';p.textBaseline='middle';p.font='600 46px "Noto Sans CJK SC","Microsoft YaHei","PingFang SC",sans-serif';
   p.fillStyle='#d5b365';p.fillText('明 川 教 学 楼',256,44);
 });
 if(schoolSign){
  const plate=new T.Mesh(new T.PlaneGeometry(7.1,.95),new T.MeshBasicMaterial({map:schoolSign}));plate.position.set(0,4.62,Z+.335);scene.add(plate);
 }
 for(const x of [-23.6,-16.7,16.6,23.4]){
  box(5.8,.56,2.58,x,.28,Z+3.1,curb);
  box(5.48,.11,2.28,x,.585,Z+3.1,make(0x4b4735));
 }
 for(const x of [-12.9,-8.42,8.45,12.9]){
  box(3.9,.07,.54,x,.022,Z+1.70,curb);
 }
 // Indistinct neighboring blocks frame the original building rather than identify it.
 for(const [x,h,z] of [[-41,11,-18],[41,12,-26],[-68,8,-14],[59,9,-14]]){
  box(18,h,14,x,h/2,z,beam);
  for(let j=0;j<3;j++)box(16,.57,.21,x,2.35+j*2.6,z+7.08,glassInserts[3]);
 }
 finishBoxes();
 // Layered low-poly campus trees with restrained sunlight and contact shadows.
 const leaves=[
  make(0x3e4a2c),make(0x5e6840),make(0x70744a),make(0x465939),make(0x536040)
 ];
 const branch=new T.CylinderGeometry(1,1,1,7),leaf=new T.IcosahedronGeometry(1,1);
 const trunk=make(0x4f493b), foliage=leaves.map(()=>[]);
 const shadowMap=painted(T,96,96,p=>{
   const g=p.createRadialGradient(47,48,2,47,48,47);
   g.addColorStop(0,'rgba(35,35,25,.50)');g.addColorStop(.52,'rgba(26,30,28,.24)');g.addColorStop(1,'rgba(29,31,28,0)');
   p.fillStyle=g;p.fillRect(0,0,96,96);
 });
 function bark(ax,ay,az,bx,by,bz,r){
   const a=new T.Vector3(ax,ay,az),b=new T.Vector3(bx,by,bz),m=new T.Mesh(branch,trunk);
   m.scale.set(r,a.distanceTo(b),r);m.position.copy(a).lerp(b,.5);
   m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),b.sub(a).normalize());
   scene.add(m);
 }
 function castPatch(x,z,sx,sz,opacity=1){
  if(!shadowMap)return;
  const s=new T.Mesh(new T.PlaneGeometry(sx,sz),new T.MeshBasicMaterial({map:shadowMap,transparent:true,opacity,depthWrite:false}));
  s.rotation.x=-Math.PI/2;s.position.set(x,.007,z);scene.add(s);
 }
 function tree(x,z,height,seed){
  castPatch(x+height*.22,z-height*.30,height*2.05,height*1.75,.9);
  const radius=height*.13, crown=height*.38;
  bark(x,.23,z,x+.19,height*.79,z+.13,radius*.29);
  for(let i=0;i<8;i++){
   const a=i*Math.PI*.25+seed,f=.50+.50*hash(i*27+seed),spread=(.60+hash(i+seed)*.42)*crown;
   const tx=x+Math.cos(a)*spread,tz=z+Math.sin(a)*spread*.78;
   const y=height*(.62+.28*f);
   bark(x,height*.46,z,tx,y,tz,.094*height/5);
   for(let k=0;k<17;k++){
    const d=hash(i*19+k*3+seed*7),data=foliage[(i+k)%5],a=hash(k+i*37+seed)*Math.PI*2;
    const off=hash(k+seed+i*73)*crown*.57,r=crown*(.24+d*.30);
    data.push([tx+Math.cos(a)*off,y+(hash(k*8+seed+i)-.3)*crown*.7,tz+Math.sin(a)*off,
      r*(.82+hash(k+71)*.52),r*(.65+d*.4),r,a]);
   }
  }
  for(let i=0;i<22;i++){
    const a=i*2.39,z0=hash(seed+i*7)*crown*.65,r=crown*(.30+.30*hash(i+seed));
    foliage[i%5].push([x+Math.cos(a)*z0,height*.96+hash(seed*i)*crown*.45,z+Math.sin(a)*z0,r,r*.65,r,a]);
  }
 }
 for(const item of [[-24.9,10.1,7.2,17],[23.5,9.5,7.55,53],[-16.0,8.85,3.8,84],[16.1,9.2,3.76,47],[-37.9,21,9.7,25],[38.6,17,8.5,38]])tree(...item);
 for(let i=0;i<foliage.length;i++){
  const data=foliage[i],objects=new T.InstancedMesh(leaf,leaves[i],data.length);
  data.forEach(([x,y,z,sx,sy,sz,a],k)=>{
   dummy.position.set(x,y,z);dummy.scale.set(sx,sy,sz);dummy.rotation.set(.37*a,a,a*.17);dummy.updateMatrix();objects.setMatrixAt(k,dummy.matrix);
  });
  objects.computeBoundingSphere();scene.add(objects);
 }
 castPatch(0,Z+1.75,51,7,.70);
 const strips=[],L=13.28,hangY=top+.42,panelSpacing=(W-2.44)/N,stripWidth=panelSpacing*.915;
 const bannerMat=sayings.map((_,i)=>{
  const map=clothPattern(T,i);
  return make(map?0xffffff:0xb22736,{side:T.DoubleSide,roughness:.91,map,emissive:0x4d050d,emissiveIntensity:.14});
 });
 const rolls=make(0x812334,{roughness:.94}),hanger=make(0x555349);
 const rollGeom=new T.CylinderGeometry(1,1,1,16),railGeom=new T.CylinderGeometry(.035,.035,W-1.87,12);
 const rail=new T.Mesh(railGeom,hanger);rail.rotation.z=Math.PI/2;rail.position.set(0,hangY+.106,Z+.632);scene.add(rail);
 const U=4,V=23;
 for(let i=0;i<N;i++){
  const geometry=new T.BufferGeometry(),arr=new Float32Array((U+1)*(V+1)*3),uv=new Float32Array((U+1)*(V+1)*2),ind=[];
  for(let v=0;v<=V;v++)for(let u=0;u<=U;u++){
    const k=v*(U+1)+u;uv[k*2]=u/U;uv[k*2+1]=1-v/V;
    if(u<U&&v<V)ind.push(k,k+U+1,k+1,k+1,k+U+1,k+U+2);
  }
  geometry.setAttribute('position',new T.BufferAttribute(arr,3).setUsage(T.DynamicDrawUsage));
  geometry.setAttribute('uv',new T.BufferAttribute(uv,2).setUsage(T.DynamicDrawUsage));geometry.setIndex(ind);
  const m=bannerMat[(i*3+Math.floor(i/5))%bannerMat.length];
  const mesh=new T.Mesh(geometry,m);
  mesh.position.set((i-(N-1)/2)*panelSpacing,hangY,Z+.654);
  mesh.frustumCulled=false;mesh.name='垂直横幅 '+String(i+1).padStart(2,'0');scene.add(mesh);
  const roll=new T.Mesh(rollGeom,rolls);roll.rotation.z=Math.PI/2;roll.rotation.order='YXZ';scene.add(roll);
  roll.name='布卷 '+String(i+1).padStart(2,'0');
  strips.push({mesh,roll,i,edge:L+hash(i+66)*.22});
 }
 let previousProgress=NaN, previousT=NaN;
 function update({progress=0,time=0}={}){
  progress=clamp(progress);
  if(progress===previousProgress&&time===previousT)return;
  previousProgress=progress;previousT=time;
  for(const {mesh,roll,i,edge} of strips){
   const drop=panelDrop(progress,i),length=drop*edge;
   const q=mesh.geometry.attributes.position,tu=mesh.geometry.attributes.uv;
   mesh.visible=length>.02;
   const freq=i*.81, gust=Math.sin(time*.99+freq*.17)*.62+Math.sin(time*2.3+freq*.36)*.25;
   const waveAge=1-smooth(.64,.986,drop);
   const zOffset=(u,t)=>{
    const phase=time*2.12-t*14.6+freq;
    const edgeWeight=.45+Math.abs(2*u-1)*.55;
    return t*drop*(.048+.062*gust)
     +.086*drop*t*edgeWeight*Math.sin(phase)
     +.095*waveAge*drop*t*Math.sin(time*3.3-t*21+freq*.65)
     +.021*drop*t*Math.cos((u-.5)*9+t*4+i);
   };
   const xOffset=t=>t*drop*(.055*gust+.034*Math.sin(time*2.31-t*13+freq));
   if(mesh.visible){
    for(let v=0;v<=V;v++)for(let u=0;u<=U;u++){
     const a=u/U,t=v/V,k=v*(U+1)+u,x=(a-.5)*stripWidth;
     q.setXYZ(k,x+xOffset(t),-length*t+.047*drop*t*t*Math.sin(a*3.14),zOffset(a,t));
     tu.setY(k,1-(length/edge)*t); // only reveal material already unrolled, never stretch characters
    }
    q.needsUpdate=tu.needsUpdate=true;mesh.geometry.computeVertexNormals();
   }
   const rad=lerp(.133,.023,Math.pow(drop,.6));
   roll.position.set(mesh.position.x+xOffset(1),hangY-length,Z+.654+zOffset(.5,1)+.23*rad);
   roll.rotation.y=(zOffset(0,1)-zOffset(1,1))/stripWidth;
   roll.scale.set(rad,stripWidth*1.015,rad);
  }
  // Upper uncovered glazing loses contrast as the fabric reaches the lower covered storeys.
  glass.color.setRGB(lerp(.175,.096,progress),lerp(.324,.199,progress),lerp(.293,.177,progress));
  glass.emissiveIntensity=lerp(.21,.061,progress);
 }
 function resize(aspect){
   if(!Number.isFinite(aspect)||aspect<=0)return;
   camera.aspect=aspect;
   const distance=60+clamp((1.77/aspect-1)*57,0,112);
   scene.fog.near=74+(distance-60);scene.fog.far=176+(distance-60);
   camera.position.set(10.2,6.4,Z+distance);
   camera.lookAt(1.25,10.25,Z);
   sky.position.copy(camera.position);
   camera.updateProjectionMatrix();
 }
 camera.far=320;
 resize(1.75);update({});return {scene,camera,update,resize};
}
