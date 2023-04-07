import React from 'react'

const Videocard = ({info}) => {
 
    console.log(info);

    const {statistics,snippet} = info;
    const {channelTitle,title, thumbnails}= snippet; 
    

  return(
    <div className='p-3 m-2 w-80 shadow-lg bg-slate-50 '>
        <img  classname='rounded-lg' src= {thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li> {statistics.viewCount} views</li>
        </ul>
      
    </div>
  );
}

export default Videocard