import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API } from '../Constants';
import CommentContainer from './CommentContainer';
import { YOUTUBE_VIDEO_API } from '../Constants';




const WatchPage = () => {

   

 

    const[searchParams]= useSearchParams();
    console.log(searchParams.get("v"));


  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(closeMenu());
  },[])



  
  return (
    <>
    <div className='flex flex-row'>
    <div className='p-5 m-2 my-20'>
      <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player"  allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share"></iframe>

      <p></p>
          
    </div>
    <div className='bg-slate-400 my-20 h-52'>
     <CommentContainer />
     </div>
    </div>

    </>
   

   


   
  )
}

export default WatchPage