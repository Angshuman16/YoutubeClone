import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';



const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  
   useEffect(() =>{
    getVideos();
   },[]);

   const getVideos = async () =>{

    const data= await fetch(YOUTUBE_VIDEO_API);
    const json=  await data.json();
   
    setVideos(json.items);

   }


    /* Videocard is taking info as props */

    if (!videos.length) return <Shimmer /> //early return

   return (
   <div className='flex flex-wrap'>

    {Object.values(videos).map(item => 
    <Link key={item.id} to= {"/watch?v=" + item.id}>
    <Videocard key={item.id} info={item} />
    
    </Link>

)}

    
    </div>
   );

   
};
export default VideoContainer