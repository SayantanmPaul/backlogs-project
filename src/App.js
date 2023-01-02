import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navber from './navber';
import Postcard from './postcard';
import './App.css';

function App(){
  return (
  <div className='App'>
    
    <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">

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

      <ParallaxLayer offset={0} speed={0.30}>
        <div className='scroller flex place-content-center mt-[16%]'>
          <span className= "blockcontain font-medium leading-loose text-center text-5xl font-sans ">
          Share stories
          <br></br>
          Make The Difference<br></br> You Want To Make
          </span>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.35}>
        <div className='ground_1 bg-cover animation_layer parallax'></div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.5}>
        <div className='ground_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

     

      <ParallaxLayer offset={0} speed={0.40}>
        <div className='forest_1 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.40}>
        <div className='forest_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.35}>
        <div className='traveller bg-cover animation_layer parallaxer'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.25}>
      <Navber/>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.25}>
      <Postcard/>
      </ParallaxLayer>
      

    </Parallax>
    
  </div>
  );
}
export default App;