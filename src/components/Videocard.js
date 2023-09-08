import React from 'react'
import { formatCompactNumber } from '../utils/Helper';


const Videocard = ({info}) => {
 
    console.log(info);




    const {statistics,snippet} = info;
    const {channelTitle,title, thumbnails}= snippet; 
    

  return(
    <div className='p-3 m-2 w-[18rem] ml-5 shadow-lg dark:bg-black bg-slate-50 h-72 overflow-hidden hover:bg-slate-200 transition duration-150 ' >
        <img alt="kuchbhi1" className='rounded-lg' src= {thumbnails?.medium?.url} />
        <ul>
        
           <li className='font-semibold dark:text-white py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{title}</li>
            <div className='flex'>
            <img alt="thumbnail" className='rounded-full h-9  w-9' src= {thumbnails?.medium?.url} />
            <li className='text-gray-500 text-[15px] dark:text-white mt-2 ml-2'>{channelTitle}</li>
            </div>
           
            <li className='text-gray-500 dark:text-white text-[13px]'> {statistics?.viewCount ? formatCompactNumber(statistics?.viewCount) : 0} views  . {  <li className='text-gray-500 text-[13px] dark:text-white'>{formatCompactNumber(statistics?.viewCount)} Likes</li>}</li>
           
        </ul>
      
    </div>
    
    
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