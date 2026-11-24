import {panelDrop,PANEL_COUNT} from './motion.js';

// The modeled interior is the third storey. Relative to the 20.14 m rail,
// its glazing starts at ~79% curtain drop and is covered at ~92.5%.
export const THIRD_WINDOW_TOP=.79;
export const THIRD_WINDOW_BOTTOM=.925;
const clamp = x => Math.min(1,Math.max(0,x));
const ease = (a,b,x) => {
  const t=clamp((x-a)/(b-a));
  return t*t*(3-2*t);
};

// Spatial red bounce advances before the third-storey windows are physically
// screened. It comes from the upper rolls entering the view outdoors, not
// from an instantaneous full-window tint. The actual screen remains separate.
export function interiorCue(progress,bay=null,bays=10){
  const p=clamp(progress);
  // Near camera maps to the middle of the façade; the corridor looks toward
  // its right wing. Whole-corridor cue samples this same stretch.
  const n=Math.max(1,Math.trunc(bays));
  const pick=i=>Math.round(.42*(PANEL_COUNT-1)+i*(.51*(PANEL_COUNT-1))/Math.max(1,n-1));
  let cover=0,spill=0,total=0;
  const first=bay===null?0:Math.round(clamp(bay/Math.max(1,n-1))*(n-1));
  const last=bay===null?n-1:first;
  for(let i=first;i<=last;i++){
    const middle=pick(i);
    for(let j=-2;j<=2;j++){
      const raw=panelDrop(p,Math.max(0,Math.min(PANEL_COUNT-1,middle+j)));
      const drop=clamp(raw),w=3-Math.abs(j);
      cover+=ease(THIRD_WINDOW_TOP,THIRD_WINDOW_BOTTOM,drop)*w;
      spill+=ease(.12,.67,drop)*w;
      total+=w;
    }
  }
  cover/=total;spill/=total;
  // The side-lit red design arrives early, while open lower slices can still
  // pass a little ordinary light. Actual contact completes the effect.
  const red=clamp(.84*spill+.16*cover);
  const day=(1-.78*spill)*(1-cover);
  const overhead=1-ease(.045,.87,red);
  const reflections=clamp(.78*ease(.06,.86,spill)+.22*cover);
  return {cover,red,day,overhead,spill,reflections};
}
