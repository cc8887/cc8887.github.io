import {interiorCue} from './lighting.js?v=window-sync-1';

// Interior of a fictional school, matched by rhythm and light rather than by address.
// The two states share a model; separate banks of practical lights do the switching.
export function createInterior(THREE) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111a1e);
  scene.fog = new THREE.FogExp2(0x0b1116, .012);
  const camera = new THREE.PerspectiveCamera(55, 16/9, .035, 55);
  camera.position.set(.46, 1.58, 3.02);
  camera.lookAt(-.27, 1.49, -18);
  const clamp = x => Math.min(1, Math.max(0, x));
  const standard = (color, extra={}) => new THREE.MeshStandardMaterial({ color, roughness:.71, ...extra });
  const basic = (color,extra={}) => new THREE.MeshBasicMaterial({color,...extra});
  const unit = new THREE.BoxGeometry(1,1,1);
  const addBox=(x,y,z,w,h,d,mat,parent=scene)=>{
    const obj=new THREE.Mesh(unit,mat);
    obj.position.set(x,y,z);obj.scale.set(w,h,d);parent.add(obj);return obj;
  };
  const lamps = [];
  const addPoint=(x,y,z,col,power,radius)=>{
    const l=new THREE.PointLight(col,power,radius,2);
    l.position.set(x,y,z);scene.add(l);return l;
  };
  // Pane glaze, plaster, floor and other architectural finishes stay fixed.
  const dim=128, pix=new Uint8Array(dim*dim*4);
  let rand=881;
  for(let y=0;y<dim;y++) for(let x=0;x<dim;x++){
    rand=(Math.imul(rand,1664525)+1013904223)>>>0;
    const v=207+(rand>>>27)+6*Math.cos(x*.113)*Math.sin(y*.178);
    const line=x===0||y===0 ? .6 : x===1||y===1||x===127||y===127 ? .86:1;
    const q=(y*dim+x)*4;
    pix[q]=v*line;pix[q+1]=v*line;pix[q+2]=v*line;pix[q+3]=255;
  }
  const tiles=new THREE.DataTexture(pix,dim,dim,THREE.RGBAFormat);
  tiles.wrapS=tiles.wrapT=THREE.RepeatWrapping;
  tiles.repeat.set(6,47);tiles.magFilter=THREE.LinearFilter;
  tiles.minFilter=THREE.LinearMipmapLinearFilter;tiles.generateMipmaps=true;tiles.needsUpdate=true;
  const paint=standard(0xc2bcb0);
  const ceiling=standard(0xd3ccc0);
  const taper=standard(0x929387);
  const bottom=standard(0x52665b,{roughness:.55});
  const skirting=standard(0x343938,{roughness:.45});
  const floor=standard(0x727771,{roughness:.22,map:tiles,metalness:.04});
  const windowFrame=standard(0x293c3d,{roughness:.46,metalness:.22});
  const sill=standard(0x9c9d8d,{roughness:.43});
  const board=standard(0x3e544e,{roughness:.78});
  const oak=standard(0x63493d,{roughness:.52});
  const darkGlass=standard(0x243634,{roughness:.37});
  const doorMetal=standard(0x829496,{metalness:.57,roughness:.33});
  const brighterPaper=standard(0xd9d3bb);
  const creamPaper=standard(0xb4ae98);
  const thinInk=standard(0x65756a);
  const bin=standard(0x4d584c);
  const pipeline=standard(0x6c6b59,{roughness:.56,metalness:.16});
  const sealingFitting=standard(0x726f60);
  const floorDeck=new THREE.Mesh(new THREE.PlaneGeometry(3.35,30.9),floor);
  floorDeck.position.set(0,0,-10.97);
  floorDeck.rotation.x=-Math.PI/2;
  scene.add(floorDeck);
  addBox(0,3.17,-10.97,3.42,.18,30.9,ceiling);
  addBox(1.77,.416,-10.97,.22,.82,30.9,bottom);
  addBox(-1.77,.416,-10.97,.24,.82,30.9,bottom);
  for(const side of [-1,1]) {
    addBox(side*1.65,.065,-10.97,.07,.13,30.92,skirting);
    addBox(side*1.665,.845,-10.97,.08,.042,30.8,sill);
    addBox(side*1.77,2.915,-10.97,.24,.42,30.9,paint);
  }
  addBox(1.78,2.436,-11,.22,.58,30.6,paint);
  addBox(1.18,3.028,-11,.038,.038,30.62,pipeline);
  addBox(1.32,2.986,-11,.023,.023,30.62,pipeline);
  const litCeilings=[];
  const windows=[];
  const stripeGeo=new THREE.PlaneGeometry(1,1);
  const windowFaceGeo=new THREE.PlaneGeometry(2.28,1.63);
  const trayGeo=new THREE.CylinderGeometry(.159,.163,.067,18);
  const puckGeo=new THREE.CylinderGeometry(.129,.156,.061,18);
  const shadeMaterial=()=>new THREE.ShaderMaterial({
    uniforms:{cover:{value:0},id:{value:0}},
    vertexShader:`
      varying vec2 coords; void main(){coords=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}
    `,
    fragmentShader:`
      uniform float cover,id; varying vec2 coords;
      void main(){
        vec2 p=coords;
        float edge=1.-cover;
        float f=cover<=0.?0.:cover>=1.?1.:smoothstep(edge-.005,edge+.005,p.y);
        // Sample from behind the leading hem. Fixed cloth markings travel down
        // with it, rather than appearing to fill a stationary red rectangle.
        float clothY=p.y+cover-1.;
        float wave=.66+.19*cos(p.x*75.+id)+.07*cos(p.x*159.+(clothY+.1)*1.7+id);
        float slit=pow(max(0.,sin(p.x*517.+id)),34.)*.15+pow(max(0.,cos(p.x*181.+id)),75.)*.13;
        vec3 daylight=mix(vec3(.24,.38,.39),vec3(.74,.84,.82),smoothstep(0.,.82,p.y));
        daylight+=.032*sin(p.x*4.+2.9*p.y+id);
        vec3 vermilion=mix(vec3(.30,.005,.035),vec3(.94,.024,.085),wave);
        vec2 inkUV=vec2(1.-p.x,clothY)*vec2(13.,6.);
        vec2 cell=fract(inkUV), board=floor(inkUV);
        float stem=(1.-smoothstep(.045,.079,abs(cell.x-.53)))*smoothstep(.13,.25,cell.y)*(1.-smoothstep(.72,.85,cell.y));
        float arms=(1.-smoothstep(.038,.069,abs(cell.y-.30-.32*step(.5,cos(board.x+board.y*2.)))))
          *smoothstep(.23,.36,cell.x)*(1.-smoothstep(.69,.79,cell.x));
        vermilion=mix(vermilion,vec3(.96,.30,.35),max(stem,arms)*.18);
        vermilion+=slit*vec3(.8,.42,.59);
        float hem=1.-smoothstep(.004,.025,max(0.,clothY));
        vermilion*=1.-.28*hem*step(.0001,cover)*(1.-step(.9999,cover));
        gl_FragColor=vec4(mix(daylight,vermilion,f),1.);
        #include <colorspace_fragment>
      }
    `
  });
  for(let i=0;i<10;i++){
    const z=2.5-i*2.58;
    const pillar=z-1.29;
    // Wall piers cast local cuts and repeat down the aisle.
    addBox(-1.60,1.61,pillar,.34,3.22,.29,paint);
    addBox(-1.44,.42,pillar,.044,.84,.30,bottom);
    addBox(1.61,1.587,pillar,.36,3.174,.34,paint);
    addBox(1.428,.421,pillar,.034,.84,.35,bottom);
    addBox(0,2.98,pillar,3.35,.23,.22,ceiling);
    addBox(0,2.874,pillar,3.26,.035,.17,taper);
    addBox(-1.574,.873,z,.34,.078,2.39,sill);
    addBox(-1.46,.819,z,.13,.037,2.35,skirting);
    const shade=shadeMaterial();
    shade.uniforms.id.value=i*2.971;
    const exterior=new THREE.Mesh(windowFaceGeo,shade);
    exterior.position.set(-1.795,1.708,z);
    exterior.rotation.y=Math.PI/2;scene.add(exterior);
    windows.push({shade,z});
    addBox(-1.733,.923,z,.055,.056,2.31,windowFrame);
    addBox(-1.733,2.506,z,.055,.058,2.31,windowFrame);
    addBox(-1.729,1.596,z,.060,.058,2.315,windowFrame);
    for(const dz of [-1.15,-.39,.39,1.15]){
      addBox(-1.727,1.706,z+dz,.064,1.65,.043,windowFrame);
    }
    const lightGrey=standard(0xe0ddd6,{emissive:0xe8e0cb,emissiveIntensity:.53});
    const holder=new THREE.Mesh(trayGeo,sealingFitting);
    holder.position.set(-.08,3.028,z-.15);scene.add(holder);
    const cap=new THREE.Mesh(puckGeo,lightGrey);
    cap.position.set(-.08,2.975,z-.15);scene.add(cap);
    litCeilings.push(lightGrey);
    // Classroom side: alternate classroom doors and noticeboard / storage bays.
    if(i%2===0){
      addBox(1.678,1.245,z-.11,.13,2.50,1.58,oak);
      addBox(1.597,1.247,z-.10,.027,2.42,1.46,windowFrame);
      addBox(1.575,1.59,z-.10,.022,1.16,1.30,darkGlass);
      addBox(1.566,.62,z-.10,.023,.64,1.28,bottom);
      for(const dz of [-.71,.0,.57]){
        addBox(1.55,1.62,z+dz,.047,1.35,.061,windowFrame);
      }
      addBox(1.54,1.27,z-.10,.05,.045,1.39,windowFrame);
      addBox(1.52,.97,z+.40,.082,.082,.042,doorMetal);
      addBox(1.54,.052,z-.10,.045,.056,1.48,sill);
      addBox(1.59,2.505,z-.10,.14,.056,1.64,oak);
      addBox(1.63,2.647,z+.54,.101,.121,.34,board);
      for(let j=0;j<3;j++) addBox(1.574,2.64+(j===1?.014:0),z+.47+j*.078,.005,.025,.041,brighterPaper);
      addBox(1.778,1.68,z+1.01,.23,1.58,.46,paint);
      addBox(1.778,1.70,z-.994,.23,1.58,.22,paint);
    }else{
      addBox(1.772,1.699,z,.225,1.65,2.60,paint);
      addBox(1.626,1.75,z+.20,.059,.90,1.43,oak);
      addBox(1.587,1.75,z+.20,.026,.82,1.35,board);
      for(let j=0;j<4;j++){
        const pz=z-.28+j*.29,py=1.86-(j%2)*.245,h=(j%2)?.35:.47,w=.22;
        addBox(1.568,py,pz,.009,h,w,j%2===0?creamPaper:brighterPaper);
        for(let l=0;l<5;l++)addBox(1.561,py+.12-l*.047,pz+(l%2)*.013,.004,.009,.135-(l%3)*.012,thinInk);
      }
    }
  }
  // Deep far window: independent cold daylight / exit cue in both states.
  const exitX=.09, exitZ=-24.64;
  for(const side of [-1,1]) {
    addBox(side*1.752,1.736,-23.26,.23,1.82,2.71,paint);
    addBox(side*1.68,1.82,-24.98,.10,2.34,1.42,paint);
  }
  addBox(-1.08,1.52,exitZ,1.10,3.10,.23,paint);
  addBox(1.22,1.52,exitZ,.85,3.10,.23,paint);
  addBox(exitX,2.91,exitZ,2.09,.46,.25,paint);
  const coolCyan=basic(0x83e9f2,{toneMapped:false});
  const skyCyan=basic(0xd5ffff,{toneMapped:false});
  const strongCyan=coolCyan.color.clone(), strongSky=skyCyan.color.clone();
  addBox(exitX,1.35,exitZ-1.39,2.25,2.57,.14,coolCyan);
  addBox(exitX,1.74,exitZ-1.30,1.98,1.64,.025,skyCyan);
  addBox(exitX,.50,exitZ-1.28,2.17,.56,.04,bottom);
  for(const x of [-.94,-.32,.43,1.11])
    addBox(x,1.77,exitZ-1.25,.039,1.72,.038,windowFrame);
  addBox(exitX,1.47,exitZ-1.25,2.03,.049,.035,windowFrame);
  addBox(exitX,.91,exitZ-1.24,2.06,.049,.035,windowFrame);
  addBox(exitX,2.60,exitZ-1.22,2.04,.049,.035,windowFrame);
  addBox(-.51,2.63,exitZ+.18,.48,.138,.034,board);
  addBox(-.51,2.63,exitZ+.201,.42,.082,.01,basic(0x50bf9d,{toneMapped:false}));
  addBox(-.51,2.632,exitZ+.209,.262,.017,.012,basic(0xd9fff5,{toneMapped:false}));
  // A few quiet school props; the red state leaves these as near-black silhouettes.
  const umbrellaMat=standard(0x152124);
  const bag=standard(0x20242c);
  const cylinder=new THREE.CylinderGeometry(.17,.125,.43,12);
  for(const z of [1.16,-4.18,-9.05,-17.10]){
    const body=new THREE.Mesh(cylinder,bin);body.position.set(-1.38,.23,z);scene.add(body);
    const rim=new THREE.Mesh(new THREE.CylinderGeometry(.187,.182,.037,12),windowFrame);
    rim.position.set(-1.38,.448,z);scene.add(rim);
  }
  for(const [z,bias] of [[1.90,.04],[-2.78,.02],[-7.68,-.11]]){
    const stick=addBox(-1.49,.53,z,.038,.82,.042,umbrellaMat);
    stick.rotation.z=-.23;stick.rotation.x=bias;
    const handle=new THREE.Mesh(new THREE.TorusGeometry(.070,.011,8,16,Math.PI*1.23),doorMetal);
    handle.position.set(-1.56,.966,z+.05);handle.rotation.z=1.63;scene.add(handle);
    const cloth=new THREE.Mesh(new THREE.ConeGeometry(.085,.63,7),umbrellaMat);
    cloth.position.set(-1.50,.41,z-.02);cloth.rotation.z=2.92;scene.add(cloth);
  }
  addBox(-1.40,.33,.90,.24,.55,.38,bag);
  addBox(-1.252,.22,.85,.066,.25,.25,umbrellaMat);
  const benchZ=-5.14;
  addBox(-1.43,.49,benchZ,.39,.085,1.29,oak);
  addBox(-1.54,.24,benchZ-.48,.05,.48,.047,windowFrame);
  addBox(-1.54,.24,benchZ+.48,.05,.48,.047,windowFrame);

  // Normal lighting: the outside wall is the broad cool light, ceiling pucks read softly.
  const heaven=new THREE.HemisphereLight(0xdbe7e6,0x9c9380,.91);
  scene.add(heaven);
  const ordinary = [2,-4,-10,-16,-21].map((z,i)=>addPoint(-1.36,1.91,z,0xc7e5e5,6.4-i*.34,7.8));
  const overhead = [1,-8,-16].map(z=>addPoint(-.08,2.78,z,0xffecd2,5.8,8.5));
  const end=addPoint(.06,1.48,-23.93,0x60e2ff,15.8,8.9);
  // Red: same windows motivate it, but alternate low raking pools and higher bounce.
  const creepy=[{z:2.24,x:-1.36,y:2.34,power:18.0},{z:-2.45,x:-1.37,y:1.52,power:16.0},
    {z:-7.74,x:-1.39,y:2.38,power:22.0},{z:-12.73,x:-1.22,y:1.98,power:18.5},
    {z:-17.71,x:-1.33,y:2.34,power:19.5},{z:-21.19,x:-1.33,y:1.32,power:9.0}];
  for(const [i,set] of creepy.entries()) lamps.push(addPoint(set.x,set.y,set.z,i===1?0xff1813:0xff062b,0,8.2));
  const redBounce=addPoint(.78,2.48,-5.3,0xf20a17,0,10);

  // Soft, spatially placed pools and elongated highlights represent the contribution
  // of an extended window source. They are on the floor/side walls, not the screen.
  const decal=(color, horizontal, x,y,z,w,h,rotation=0)=>{
    const mat=new THREE.ShaderMaterial({
      uniforms:{ink:{value:new THREE.Color(color)},amp:{value:0},angle:{value:rotation},horizontal:{value:horizontal?1:0}},
      transparent:true,depthWrite:false,side:THREE.FrontSide,blending:THREE.AdditiveBlending,
      vertexShader:`
        varying vec2 coords; void main(){coords=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}
      `,
      fragmentShader:`
        uniform vec3 ink; uniform float amp,angle,horizontal; varying vec2 coords;
        void main(){
          vec2 p=(coords-.5)*2.;
          float f=(1.-smoothstep(.00,.98,abs(p.x)))*(1.-smoothstep(.0,.99,abs(p.y)));
          float rib=.69+.31*pow(abs(sin((p.x+p.y*angle)*17.)),7.);
          float bars=mix(1.,rib,horizontal);
          gl_FragColor=vec4(ink,amp*bars*f);
          #include <colorspace_fragment>
        }
      `
    });
    const mesh=new THREE.Mesh(stripeGeo,mat);
    mesh.position.set(x,y,z);mesh.scale.set(w,h,1);mesh.renderOrder=2;
    if(horizontal)mesh.rotation.x=-Math.PI/2;else mesh.rotation.y=-Math.PI/2;
    mesh.visible=false;scene.add(mesh);return mesh;
  };
  const floorPools=[],wallPools=[];
  for(let k=0;k<9;k++){
    const z=1.85-k*2.58;
    floorPools.push(decal(k%3===0?0xff2344:0xec0923,true,-.73+(.12*(k%3)),.009,z+.19,1.58+(k%2)*.48,2.77,-.43));
    wallPools.push(decal(k%3===1?0xfd843c:0xff2244,false,1.539,1.03+(k%2)*.18,z-.37,.53+(k%3)*.13,1.72,0));
  }
  const bluePool=decal(0x87e5fb,true,.1,.011,-22.85,1.55,5.32,-.1);
  const whitePool=decal(0xc6e0d6,true,-.49,.012,-3.48,2.13,5.19,.1);
  const ambientFill=new THREE.AmbientLight(0x5f342f,.065);
  scene.add(ambientFill);

  // Instance repeated trim, slats, panels and assemblies without changing their
  // transforms. This keeps the hero shot practical at modest laptop pixel ratios.
  const instanceGroups=new Map();
  for(const mesh of scene.children){
    if(mesh.geometry!==unit && mesh.geometry!==trayGeo)continue;
    const key=mesh.geometry.uuid+mesh.material.uuid;
    if(!instanceGroups.has(key))instanceGroups.set(key,[]);
    instanceGroups.get(key).push(mesh);
  }
  for(const group of instanceGroups.values()){
    if(group.length<3)continue;
    const inst=new THREE.InstancedMesh(group[0].geometry,group[0].material,group.length);
    for(let i=0;i<group.length;i++){
      group[i].updateMatrix();
      inst.setMatrixAt(i,group[i].matrix);
      scene.remove(group[i]);
    }
    inst.instanceMatrix.needsUpdate=true;
    inst.computeBoundingSphere();
    scene.add(inst);
  }

  function update({progress=0,time=0,well=1}={}){
    const cue=interiorCue(progress), darkness=cue.red;
    const exitStrength=well===false?0:well===true||!Number.isFinite(well)?1:clamp(well);
    const natural=cue.day;
    heaven.intensity=.045+.865*natural;
    ambientFill.intensity=.072+.10*natural;
    end.intensity=2.0+(10.5+4.7*darkness)*exitStrength;
    coolCyan.color.setRGB(.034,.050,.053).lerp(strongCyan,exitStrength);
    skyCyan.color.setRGB(.043,.061,.067).lerp(strongSky,exitStrength);
    for(const [i,l] of ordinary.entries())l.intensity=(6.4-i*.34)*cue.day;
    for(const l of overhead)l.intensity=5.9*cue.overhead;
    for(const l of litCeilings)l.emissiveIntensity=.002+.628*cue.overhead;
    for(const w of windows)w.shade.uniforms.cover.value=cue.cover;
    for(const [i,l] of lamps.entries()){
      const lit=cue.red;
      const amplitude=(.985+.015*Math.sin(time*.83+i*1.72));
      l.intensity=creepy[i].power*lit*amplitude;
    }
    redBounce.intensity=darkness*5.1;
    function draw(pool,strength){pool.visible=strength>.001;pool.material.uniforms.amp.value=strength;}
    for(const [i,pool] of floorPools.entries())draw(pool,cue.reflections*(.050+(i%3)*.014));
    for(const [i,pool] of wallPools.entries())draw(pool,cue.reflections*(.037+(i%3)*.04));
    draw(bluePool,(.074+.10*darkness)*exitStrength);
    draw(whitePool,.087*natural);
  }
  function resize(aspect){
    camera.aspect=aspect;
    // Narrow screens preserve the height of the aisle, rather than cropping the exit.
    camera.fov=aspect<1.15?61:55;
    camera.updateProjectionMatrix();
  }
  update();
  return {scene,camera,update,resize};
}
