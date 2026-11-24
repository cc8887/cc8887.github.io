// Indoor blackout is an authored cue, not the downstairs view of the exterior
// simulation. It shares the scrub clock only; every interior bay uses this
// single front, so visible coverage and illumination cannot become desynced.
export const INDOOR_WINDOW_START=1.60/4.8;
export const INDOOR_WINDOW_END=2.72/4.8;
const clamp=x=>Math.min(1,Math.max(0,x));

export function interiorCue(progress=0){
  const p=Number.isFinite(progress)?progress:0;
  const t=clamp((p-INDOOR_WINDOW_START)/(INDOOR_WINDOW_END-INDOOR_WINDOW_START));
  const cover=t*t*(3-2*t);
  const open=1-cover;
  return {cover,red:cover,day:open,overhead:open,reflections:cover};
}
