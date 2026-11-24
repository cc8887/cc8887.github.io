// Shared, deterministic timeline for a weighted bottom rail on each hanging banner.
// Input is normalized scene time; output length is normalized to the banner's rest length.
// This leaves scrub & replay independent of FPS, wall clock, and current render backend.
export const DURATION_SECONDS=4.8;
export const PANEL_COUNT=56;
export const NOMINAL_LENGTH=13.28; // visual model meters, matches façade cloth geometry
export const BASE_ACCELERATION=6.8; // m/s²: effective fall under reel friction, not free fall
const clamp=(x,lo=0,hi=1)=>Math.max(lo,Math.min(hi,x));
const random=n=>{const f=Math.sin((n+2.81)*127.1)*43758.5453123;return f-Math.floor(f);};
const DAMPING=12, OSCILLATION=23, SETTLE_TIME=.66;

export function panelTiming(i,count=PANEL_COUNT){
 const lane=clamp(i/Math.max(1,count-1));
 const delay=.46+.36*lane+.14*random(i+11);
 const acceleration=BASE_ACCELERATION*(.81+.39*random(i+93));
 const normalizedAcceleration=acceleration/NOMINAL_LENGTH;
 const fallTime=Math.sqrt(2/normalizedAcceleration);
 return {delay,acceleration,normalizedAcceleration,fallTime,catchTime:delay+fallTime};
}

export function panelMotion(progress,i,count=PANEL_COUNT){
 const p=clamp(Number.isFinite(progress)?progress:0);
 const elapsed=p*DURATION_SECONDS;
 const {delay,normalizedAcceleration:a,fallTime,catchTime}=panelTiming(i,count);
 const t=elapsed-delay;
 if(t<=0)return {drop:0,velocity:0,recoil:0,settle:0,phase:'rolled'};
 if(elapsed<catchTime)return {drop:.5*a*t*t,velocity:a*t,recoil:0,settle:0,phase:'fall'};
 const after=elapsed-catchTime;
 if(after>=SETTLE_TIME)return {drop:1,velocity:0,recoil:0,settle:1,phase:'rest'};
 // Match the fall velocity at the instant the fabric catches. An underdamped
 // wave carries the weighted rail briefly past taut, then returns above it.
 // Fade out the last tiny residual to reach an exact rest pose.
 const envelope=Math.exp(-DAMPING*after);
 const speed=a*fallTime;
 const oscillation=Math.sin(OSCILLATION*after);
 const damped=speed*envelope*oscillation/OSCILLATION;
 const dampingTail=clamp((SETTLE_TIME-after)/.12);
 const fade=dampingTail*dampingTail*(3-2*dampingTail);
 const fadeRate=dampingTail<1?-6*dampingTail*(1-dampingTail)/.12:0;
 const recoil=damped*fade;
 const velocity=speed*envelope*(Math.cos(OSCILLATION*after)-DAMPING*oscillation/OSCILLATION)*fade+damped*fadeRate;
 return {drop:1+recoil,velocity,recoil,settle:1-envelope*fade,phase:'catch'};
}

export function panelDrop(progress,i,count=PANEL_COUNT){
 return panelMotion(progress,i,count).drop;
}

// Bounds describe the portion of cloth length needed to mask a particular
// window row (measured down from the exterior rail). The averaged coverage
// can drive fixture changes, while individual panels can drive window light.
export function coverageAt(progress,min=.31,max=.49,count=PANEL_COUNT){
 if(count<1)return 0;
 let sum=0;
 for(let i=0;i<count;i++){
  const length=panelDrop(progress,i,count);
  const region=max>min?clamp((length-min)/(max-min)):Number(length>=min);
  sum+=region*region*(3-2*region);
 }
 return sum/count;
}
