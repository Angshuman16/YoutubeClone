import React from 'react'
import { formatCompactNumber } from '../utils/Helper';


const Videocard = ({info}) => {
 
    console.log(info);




    const {statistics,snippet} = info;
    const {channelTitle,title, thumbnails}= snippet; 
    

  return(
    <div className='p-3 m-2 w-72 shadow-lg bg-slate-50 h-72 overflow-hidden hover:scale-110' >
        <img alt="kuchbhi1" className='rounded-lg' src= {thumbnails?.medium?.url} />
        <ul>
        
           <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
            <div className='flex'>
            <img alt="thumbnail" className='rounded-full h-9  w-9' src= {thumbnails?.medium?.url} />
            <li className='text-gray-500 text-[15px] ml-2'>{channelTitle}</li>
            </div>
           
            <li className='text-gray-500 text-[13px]'> {statistics?.viewCount ? formatCompactNumber(statistics?.viewCount) : 0} views  . {  <li className='text-gray-500 text-[13px]'>{formatCompactNumber(statistics?.viewCount)} Likes</li>}</li>
           
        </ul>
      
    </div>
    // <div className='p-2 m-2 w-72'>
    //   <img className='rounded-lg hover:drop-shadow-xl' alt='thumbnail' src={thumbnails?.medium?.url} />
    //   <ul className='flex justify-start items-start'>
    //     <img className='rounded-full w-7 h-7 mt-2 mr-2' alt='thumbnail' src={thumbnails?.default?.url} />
    //     <div>
    //       <li className='font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
    //       <li className='text-gray-500 text-[13px]'>{channelTitle}</li>
    //       <li className='text-gray-500 text-[13px]'>{statistics?.viewCount ? formatCompactNumber(statistics?.viewCount) : 0} views  </li>
    //     </div>
    //   </ul>
    // </div>
  );
}

 export const ConvertToRedBorder = ({info}) =>{
  return(
    <div className='border border-black p-2 m-2'>
    <Videocard info={info} />
    </div>
  );
 
};

export default Videocard