import React from 'react'
import WatchPage from './WatchPage';
import { YOUTUBE_VIDEO_API } from '../Constants';
import { useState,useEffect } from 'react';

const VideoComponent = () => {


    const [videos, setVideos] = useState([]);
   useEffect(() =>{
    getVideos();
   },[]);

   const getVideos = async () =>{

    const data= await fetch(YOUTUBE_VIDEO_API);
    const json=  await data.json();
   
    setVideos(json.items);

   }

  return videos;
}

export default VideoComponent