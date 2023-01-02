import React from "react";
import author from './Images/author.jpg';

function Postcard(){
    return(
        <div className= 'wrapper flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer'>
        <div className= 'postdetail flex-[2.5] flex flex-col'>
            <div className= 'flex'>
                <div className= 'grid plaxe-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                <img src={author} alt="Author" style={{ width: '40px', height: '40px' }} />

                </div>
                <div className='authorname font-semibold'>Reyse Mark</div>
            </div>
            <h1 className='font-bold text-2xl'>You should have these extentions in your 
            vs code right now in 2022</h1>
            <div className='text-[#696969]'>So you want to make your boring vscode giveing your more
            productivity, Don't worry I gotcha!</div>
            <div className='flex items-center justify-between text-[#787878]'>
            <span className='my-2 text-[.8rem]'>September 13 · 4 min read · 
                <span className='bg-[#DCDCDC] p-1 rounded-full t'>development</span>
                </span>
                <span className='cursor-pointer'>
                    
                </span>
            </div>
        </div>
        <div className='thubnailcontainer'></div>
        <img src={author} alt="Alt Text" style={{ width: '100px', height: '100px' }} />

        </div>
        
    );
}

export default Postcard