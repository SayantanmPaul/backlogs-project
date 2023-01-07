import React from 'react';
import author from './Images/author.jpg';
import unsplash1 from './Images/unsplash1.jpg';
import './cssproperties/postcard.css';

function Postcard() {
  return (
    <div className=" flex justify-center lg:mr-[500px]">
      <div className="wrapper flex max-w-[46rem] items-center gap-[1rem] cursor-pointer">
        <div className="postdetail flex-[2.5] flex flex-col">
          <div className="flex">
            <div className="grid plaxe-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
              <img
                src={author}
                alt="Author"
                style={{ width: '30px', height: '23px' }}
              />
            </div>
            <div className="authorname pl-1 pb-1">Reyse Mark</div>
          </div>
          <h1 className="font-[770] text-[22px] text-[#292929] leading-7 font-poppins heading">
            You should have these extentions in your vs code 2023
          </h1>
          <div className="text-[#696969] hidden lg:block md:block heading">
            So you want to make your boring vscode giveing your more
            productivity, Don't worry I gotcha!
          </div>
          <div className="flex items-center justify-between text-[#787878]">
            <span className="my-2 text-[.8rem]">
              September 13 · 4 min read ·
              <span className="bg-[#ececec] p-[7px] rounded-full ml-1">
                development
              </span>
            </span>
            <span className="cursor-pointer"></span>
          </div>
        </div>
        <div className="thubnailcontainer"></div>
        <img src={unsplash1} alt="Alt Text" className="w-60 rounded-xl" />
      </div>
    </div>
  );
}

export default Postcard;
