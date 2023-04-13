import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API } from '../Constants';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const[searchParams]= useSearchParams();
    console.log(searchParams.get("v"));


  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(closeMenu());
  },[])



  
  return (
    <>
    <div className='flex flex-col'>
    <div className='p-5 m-2'>
      <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player"  allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share"></iframe>
    </div>
     <CommentContainer />
    </div>

    </>
   

   


   
  )
}

export default WatchPage