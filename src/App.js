import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navber from './navber';
import './App.css';

function App(){
  return (
  <div className='App'>
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">

      <ParallaxLayer offset={0} speed={0.25}>
        <div className=' artboard bg-cover animation_layer parallax'>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.30}>
        <div className='mountain_1 bg-cover animation_layer parallax '> </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.4}>
        <div className='mountain_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      
      <ParallaxLayer offset={0} speed={0.5}>
        <div className='mountain_3 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='ground_1 bg-cover animation_layer parallax'></div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.5}>
        <div className='ground_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.}>
        <div className=' w-100% h-0 pd '></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.45}>
        <div className='forest_1 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.40}>
        <div className='forest_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.35}>
        <div className='traveller bg-cover animation_layer parallaxer'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.35}>
      <Navber/>

      </ParallaxLayer>

    </Parallax>
    
  </div>
  );
}
export default App;