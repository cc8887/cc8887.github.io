import {DURATION_SECONDS as bannerDur} from "./motion.js";
import {INDOOR_WINDOW_START, INDOOR_WINDOW_END, INDOOR_WINDOW_MID} from "./lighting.js?v=window-stagger-1";
const $ = (id)=>document.getElementById(id);
const title=$("scene-title"), status=$("scene-status"), stage=$("stage"), message=$("stage-message");
const progressInput=$("progress"), wellInput=$("well"), percentage=$("percentage"), wellValue=$("well-value");
const still=window.matchMedia("(prefers-reduced-motion: reduce)");
const keyframes=[...document.querySelectorAll("[data-progress]")];
const viewControls={outside:$("outside"),inside:$("inside")};
const i18n={
  outside:{title:"教学楼外墙",label:"外景",states:["横幅卷起","横幅延展中","红布盖住外墙"]},
  inside:{title:"三层走廊",label:"内景",states:["白色顶灯与窗边日光","窗布错落下坠，光线随遮挡变化","左窗红光主导，尽头留冷光"]},
};
let canvas=$("scene");
let view="outside",progress=0,well=0.8,time=0;
let backend=null,switching=false,raf=0,last=null,dir=0,currentRegion="";
function redraw(){
  if(backend&&!raf&&!document.hidden)raf=requestAnimationFrame(frame);
}
function clean(node,str){if(node.textContent!==str)node.textContent=str;}
function keyProgress(key){
  const p=Number(key.dataset.progress);
  return view==="inside"&&p===.5
    ?INDOOR_WINDOW_MID
    :p;
}
function controls(){
  const p=Math.round(progress*100),w=Math.round(well*100);
  if(progressInput.value!==String(p))progressInput.value=p;
  if(wellInput.value!==String(w))wellInput.value=w;
  progressInput.style.setProperty("--fill",p+"%");
  wellInput.style.setProperty("--fill",w+"%");
  percentage.value=p+"%";
  wellValue.value=w+"%";
  for(const key of keyframes)key.setAttribute("aria-pressed",String(Math.abs(keyProgress(key)-progress)<.005));
  for(const [name,btn] of Object.entries(viewControls))btn.setAttribute("aria-pressed",String(name===view));
  const idx=view==="inside"
    ?(progress<=INDOOR_WINDOW_START?0:progress>=INDOOR_WINDOW_END?2:1)
    :(progress===0?0:progress===1?2:1);
  const zone=view+"/"+idx;
  if(currentRegion!==zone){
    currentRegion=zone;
    const item=i18n[view];
    const copy=item.states[idx];
    clean(title,item.title);clean(status,copy);
    $("shot").lastChild.textContent=item.label;
    canvas.setAttribute("aria-label",item.title+"，"+copy);
  }
  clean($("play-caption"),dir?"暂停":progress===1?"重播落幕":"播放落幕");
  $("play").setAttribute("aria-label",dir?"暂停播放":progress===1?"重播落幕":"播放落幕");
  $("play-icon").setAttribute("d",dir?"M8 6v12m8-12v12":"m9 6.5 7.5 5.5L9 17.5z");
  $("reverse").setAttribute("aria-pressed",String(dir<0));
  clean($("well-tip"),view==="inside"?"只改变走廊尽头，不染红整幅画面。":"切到走廊内可查看这个变化。");
}
function change(p){
  dir=0;last=null;
  progress=Math.min(1,Math.max(0,p));
  time=progress*bannerDur;
  controls();redraw();
}
function transport(d) {
  if(!backend)return;
  if((d===1&&dir!==0)||(d===-1&&dir<0)){dir=0;last=null;controls();redraw();return;}
  if(still.matches){change(d===1?1:0);return;}
  if(d===1&&progress===1)progress=0;
  if(d===-1&&progress===0)progress=1;
  last=null;time=progress*bannerDur;dir=d;
  controls();redraw();
}
function frame(now){
  raf=0;
  if(!backend)return;
  if(last===null)last=now;
  const dt=Math.min(.075,Math.max(0,(now-last)/1000));
  last=now;
  if(dir){
    progress=Math.min(1,Math.max(0,progress+dir*dt/bannerDur));
    time=progress*bannerDur;
    if((dir>0&&progress>=1)||(dir<0&&progress<=0)){dir=0;last=null;}
    controls();
  }
  try{
    backend.draw({view,progress,time,well});
  }catch(e){
    if(backend.type==="webgl"){console.warn("3D view failed, switching to compatibility view:",e);void setupFallback();return;}
    console.error(e);unavailable();return;
  }
  if(dir)redraw();
}
for(const [name,btn] of Object.entries(viewControls))btn.addEventListener("click",()=>{view=name;controls();redraw();});
progressInput.addEventListener("input",()=>change(Number(progressInput.value)/100));
wellInput.addEventListener("input",()=>{well=Number(wellInput.value)/100;controls();redraw();});
for(const key of keyframes)key.addEventListener("click",()=>change(keyProgress(key)));
$("play").addEventListener("click",()=>transport(1));
$("reverse").addEventListener("click",()=>transport(-1));
$("reset").addEventListener("click",()=>change(0));
document.addEventListener("visibilitychange",()=>{
  last=null;
  if(document.hidden&&raf){cancelAnimationFrame(raf);raf=0;}
  if(!document.hidden)redraw();
});
still.addEventListener("change",()=>{if(still.matches&&dir)change(progress);});
const resize=()=>{if(!backend)return;backend.resize();redraw();};
if(window.ResizeObserver)new ResizeObserver(resize).observe(stage);
else window.addEventListener("resize",resize);
function unavailable(){
  backend=null;dir=0;controls();
  stage.setAttribute("aria-busy","false");
  message.textContent="当前浏览器未能启动场景。刷新试一下，或试用另一浏览器。";
  message.hidden=false;
  for(const el of [...Object.values(viewControls),...keyframes,$("play"),$("reverse"),$("reset"),progressInput,wellInput])el.disabled=true;
}
function bindEngine(b,label){
  backend=b;
  b.resize();
  $("engine").textContent=label;
  stage.setAttribute("aria-busy","false");
  message.hidden=true;
  controls();redraw();
}
async function setupFallback(){
  if(switching||backend?.type==="fallback")return;
  switching=true;backend=null;
  try{
    const replacement=canvas.cloneNode(false);
    canvas.replaceWith(replacement);
    canvas=replacement;
    const mod=await import("./fallback.js?v=window-stagger-1");
    const f=mod.createFallback(canvas);
    bindEngine({type:"fallback",resize:()=>f.resize(),draw:(state)=>f.draw(state)},"兼容预览");
  }catch(error){console.error(error);unavailable();}
  finally{switching=false;}
}
async function init(){
  controls();
  try{
    const gl=canvas.getContext("webgl2",{antialias:true,alpha:false,powerPreference:"low-power"});
    if(!gl){await setupFallback();return;}
    const [THREE,{createExterior},{createInterior}]=await Promise.all([
      import("./vendor/three.module.js"),import("./exterior.js?v=weighted-hem-1"),import("./interior.js?v=window-stagger-1"),
    ]);
    const renderer=new THREE.WebGLRenderer({canvas,context:gl,antialias:true,alpha:false});
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.15;
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    const scenes={outside:createExterior(THREE),inside:createInterior(THREE)};
    const resize3D=()=>{
      const {width,height}=stage.getBoundingClientRect();
      if(width<1||height<1)return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));
      renderer.setSize(width,height,false);
      for(const item of Object.values(scenes))item.resize(width/height);
    };
    canvas.addEventListener("webglcontextlost",e=>{e.preventDefault();void setupFallback();},{once:true});
    bindEngine({type:"webgl",resize:resize3D,draw(state){
      const item=scenes[state.view];item.update(state);
      renderer.render(item.scene,item.camera);
    }},"Three.js 实时");
  }catch(e){
    console.warn("3D view unavailable, switching to compatibility view:",e);
    await setupFallback();
  }
}
void init();
