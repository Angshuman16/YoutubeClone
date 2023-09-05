import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';


import CommentContainer from './CommentContainer';

import VideoComponent from './VideoComponent';
import VideoData from './VideoData';





const WatchPage = () => {

    const[searchParams]= useSearchParams();
    console.log(searchParams.get("v"));
    
    const VideoDetails = VideoComponent();

    const result= VideoDetails.filter(videos=>videos.id===searchParams.get("v"));

    const data=result[0];
    {console.log(result)};



  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(closeMenu());
  })

  return (
    <div className='flex flex-col w-full'>
    
    <div className='px-5 flex'>
      <div>
      <iframe width="1000" height="530" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player"  allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share"></iframe>

     </div>
     <div  className='w-full'>
      <LiveChat />
     </div>

     </div>

      <div className='px-5 w-auto'>

       <VideoData data={data} />
       <CommentContainer />

       
       </div>
          
   

    <div>
    
    </div>
    
   
     
     
    

    </div>
   
   
  )
}

export default WatchPage