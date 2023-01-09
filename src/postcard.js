import React from 'react';
import author from './Images/author.jpg';
import unsplash1 from './Images/unsplash1.jpg';
import './cssproperties/postcard.css';
import { BsBookmarkPlus } from 'react-icons/bs';

import { Link } from 'react-router-dom';

function Postcard(props) {
  return (
    <div className=" flex lg:justify-start md:justify-center ">
      <div className="wrapper flex lg:max-w-[45rem]  items-center gap-[25px] cursor-pointer">
        <div className="postdetail flex-[2.5] flex flex-col">
          <div className="flex">
            <div className="grid plaxe-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]">
              <img
                src={author}
                alt="Author"
                style={{ width: '30px', height: '23px' }}
              />
            </div>
            <div className="authorname pl-[5px] pb-1 font-semibold text-[#2e2e2e] text-sm">
              Reyse Mark
            </div>
          </div>
          <Link to="./Post/Post.js">
            <h1 className="font-[770] lg:text-[22px] text-[17px]  text-[#292929] leading-7 font-poppins heading">
              You should have these extentions in your vs code 2023
            </h1>
            <div className="text-[#696969] hidden lg:block md:block heading">
              So you want to make your boring vscode giveing your more
              productivity, Don't worry I gotcha!
            </div>
          </Link>
          <div className="flex items-center justify-between text-[#787878]">
            <span className="my-2 text-[.8rem] flex ">
              September 13 · 4 min read ·
            </span>
            <span className="bg-[#ececec] p-[5px] text-[.8rem] lg:block md:block hidden rounded-full m-1">
              development
            </span>
            <span className="cursor-pointer">
              <BsBookmarkPlus size={20} />
            </span>
          </div>
        </div>
        <div className="thubnailcontainer w-[200px] h-[111px] ">
          <img
            src={unsplash1}
            alt="imageunsplash"
            className=" rounded-lg bg-auto absolte"
          />
        </div>
      </div>
    </div>
  );
}

export default Postcard;
