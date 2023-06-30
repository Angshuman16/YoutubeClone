import React from 'react'


const Videocard = ({info}) => {
 
    console.log(info);




    const {statistics,snippet} = info;
    const {channelTitle,title, thumbnails}= snippet; 
    

  return(
    <div className='p-3 m-2 w-72 shadow-lg bg-slate-50 h-72 overflow-hidden hover:scale-110' >
        <img alt="kuchbhi1" className='rounded-lg' src= {thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li> {statistics.viewCount} views</li>
            <li>{statistics.likeCount} Likes</li>
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