import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../Constants';
import Videocard,{ConvertToRedBorder} from './Videocard';
import { Link } from 'react-router-dom';
import WatchPage from './WatchPage';

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


   return (<div className='flex flex-wrap'>
{/* 
    {videos[0] && <ConvertToRedBorder info={videos[0]} />} */}
    {Object.values(videos).map(item => 
    <Link to= {"/watch?v=" + item.id}>
    <Videocard key={item.id} info={item} />
    <WatchPage key={item.id} info={item} />
    </Link>
    )}
    
    </div>
   );

   



};
export default VideoContainer