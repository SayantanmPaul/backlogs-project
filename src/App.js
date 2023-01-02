import React,{useState, useEffect} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navber from './navber';
import Postcard from './postcard';
import './App.css';

function App(){
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.9, maximum-scale=1.2, minimum-scale=0.8, user-scalable=no');
  }, []);

  const [offset,setOffset]= useState()
  const handleScroll= ()=> setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)


  return (
  <div className='App'>
    
    <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">

      <ParallaxLayer offset={0} speed={0.25}>
        <div className=' artboard bg-cover animation_layer parallax'>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.30}>
        <div className='scroller flex place-content-center lg:mt-[16%] mt-44'>
          <span className= "blockcontain font-medium leading-loose text-center text-3xl lg:text-5xl font-sans ">
          Share stories
          <br></br>
          Make The Difference<br></br> You Want To Make
          </span>
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

      
      <ParallaxLayer offset={0} speed={0.25}>
        <div className='ground_1 bg-cover animation_layer parallax'></div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.15}>
        <div className='ground_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.25}>
      <div className='forest_1 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.25}>
        <div className='forest_2 bg-cover animation_layer parallax'> </div>
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={0.35}>
        <div className='traveller bg-cover animation_layer parallaxer'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.25}>
      <Navber/>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.15}>
        <div className='blureffect'> </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.25}>
      <Postcard/>
      </ParallaxLayer>
      

    </Parallax>
    
  </div>
  );
}
export default App;