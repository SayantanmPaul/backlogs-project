import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FiChevronsDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Navber from './navber';
import Postcard from './postcard';
import './App.css';

function App() {
  const [animation, setAnimation] = useState('bounce 0.5s linear infinite');

  useEffect(() => {
    setAnimation('bounce 1s ease-in-out 3');
  }, []);
  return (
    <div className="App">
      <Parallax pages={3} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className=" artboard bg-cover animation_layer parallax"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="scroller flex place-content-center lg:mt-[12%] mt-44">
            <span className="blockcontain tracking-tight leading-loose text-center text-3xl lg:text-4xl ">
              <p className="Lexend text-[#5F2131]">
                Share <span className="satisfy text-[#50183C]"> stories</span>
              </p>
              <p className="Lexend text-[#652731]">
                Make The <span className="text-[#3B1029]">Difference</span>
              </p>
              <p className="Lexend text-[#4F183C]">You Want To Make</p>
            </span>
            <div className=" pt-20 bg-gradient-to-r from-transparent to-[#FAFCD4] w-[120px] h-[270px] rotate-90"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="mountain_1 bg-cover animation_layer parallax "> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div className="mountain_2 bg-cover animation_layer parallax"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className="mountain_3 bg-[length:1790px_780px] animation_layer parallax">
            {' '}
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.25}>
          <div className="ground_1 bg-cover animation_layer parallax"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2}>
          <div className="ground_2 bg-cover animation_layer parallax"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className="forest_1 bg-cover animation_layer parallax"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div className="forest_2 bg-cover animation_layer parallax"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.35}>
          <div className="traveller bg-cover animation_layer parallaxer"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2}>
          <div className="blureffect"> </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.2}>
          <div className="flex justify-center lg:pt-[700px] md:pt-[720px] pt-[610px]">
            <FiChevronsDown
              className="cursor-pointer"
              size={30}
              style={{ animation, color: '#227C70' }}
            />
          </div>
        </ParallaxLayer>

        <div className="mx-auto">
          <ParallaxLayer offset={0} speed={0.25}>
            <Navber />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.25}>
            <div className="flex justify-center">
              <div className="max-w-7xl flex-1">
                <div className="flex flex-col gap-3 md:gap-6 lg:ml-[6%] lg:mx-0 lg:mt-[70%] md:mt-[105%] mx-[20px] mt-[750px]  ">
                  <Postcard />
                  <Postcard />
                  <Postcard />
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}
export default App;
