// Indoor blackout shares the scrub clock with the exterior, but not its fall.
// Each window reveals its own red spill directly from its physical coverage.
const SCENE_SECONDS=4.8;
const START_SECONDS=1.60;
const DROP_SECONDS=.56;
const OFFSETS_SECONDS=Object.freeze([.019,.000,.040,.014,.030,.006,.033,.017,.036,.023]);
export const INDOOR_WINDOW_START=START_SECONDS/SCENE_SECONDS;
export const INDOOR_WINDOW_END=(START_SECONDS+DROP_SECONDS+Math.max(...OFFSETS_SECONDS))/SCENE_SECONDS;
const meanDelay=OFFSETS_SECONDS.reduce((sum,v)=>sum+v,0)/OFFSETS_SECONDS.length;
const delayVariance=OFFSETS_SECONDS.reduce((sum,v)=>sum+(v-meanDelay)**2,0)/OFFSETS_SECONDS.length;
// The time at which the mean physical occlusion reaches exactly one half.
export const INDOOR_WINDOW_MID=(START_SECONDS+meanDelay+Math.sqrt(.5*DROP_SECONDS**2-delayVariance))/SCENE_SECONDS;
const clamp=x=>Math.min(1,Math.max(0,x));

export function interiorBayCover(progress,bay=0,bayCount=OFFSETS_SECONDS.length){
  const length=OFFSETS_SECONDS.length;
  const slot=Math.round(clamp(bay/Math.max(1,bayCount-1))*(length-1));
  const p=Number.isFinite(progress)?progress:0;
  const start=(START_SECONDS+OFFSETS_SECONDS[slot])/SCENE_SECONDS;
  const end=(START_SECONDS+OFFSETS_SECONDS[slot]+DROP_SECONDS)/SCENE_SECONDS;
  if(p<=start)return 0;
  if(p>=end||p>=INDOOR_WINDOW_END)return 1;
  const t=clamp((p-start)/(end-start));
  // Still pure acceleration per window, stopped by the sill without ease-out.
  return t*t;
}

export function interiorCue(progress=0){
  const bayCoverages=OFFSETS_SECONDS.map((_,bay)=>interiorBayCover(progress,bay));
  const cover=bayCoverages.reduce((sum,v)=>sum+v,0)/bayCoverages.length;
  const open=1-cover;
  return {cover,red:cover,day:open,overhead:open,reflections:cover,bayCoverages};
}
