import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Constants';
import Videocard from './Videocard';

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


   return (<div className='flex overflow-visible'>
    {Object.values(videos).map(item => <Videocard key={item.id} info={item} />)}
    
    </div>
   );

   



};
export default VideoContainer