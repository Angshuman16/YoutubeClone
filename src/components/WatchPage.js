import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

import CommentContainer from './CommentContainer';
import { YOUTUBE_VIDEO_API } from '../Constants';
import VideoComponent from './VideoComponent';
import VideoData from './VideoData';





const WatchPage = () => {



  


    const[searchParams]= useSearchParams();
    console.log(searchParams.get("v"));
    
    const VideoDetails = VideoComponent();
    const result= VideoDetails.filter(videos=>videos.id==searchParams.get("v"));
    const data=result[0];
    {console.log(result)};



  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(closeMenu());
  },[])
  

 
  




  
  return (
    <>
    
    <div className='p-5 m-2 my-20'>
      <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player"  allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share"></iframe>
      

       <VideoData data={data} />
          
    </div>
   
     <CommentContainer />
     
    

    </>
   
  )
}

export default WatchPage