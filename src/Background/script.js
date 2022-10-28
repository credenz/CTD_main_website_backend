// import React from 'react'
// import Particles from "react-particles";
// import { loadTrianglesPreset } from "tsparticles-preset-triangles";

// export default class ParticlesContainer extends React.PureComponent{
//   // this customizes the component tsParticles installation
//   async customInit(engine){
//     // this adds the preset to tsParticles, you can safely use the
//     await loadTrianglesPreset(engine);
//   }

//   render() {
//     const options = {
//       preset: "triangles",
//     };

//     return <Particles options={options} init={this.customInit} />;
//   }
// }


// import React from "react";
// import WAVES from "vanta/dist/vanta.waves.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag


import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

 const Home1 = ({children}) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: window.THREE,
        color: 0x054c73,
  backgroundColor: 0x0d1119,

  points: 20.00,
  maxDistance: 21.00,
  spacing: 16.00
  //       color1: 0x1beded,
  // color2: 0x6060c
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    {children}
  </div>
}

export default Home1;


