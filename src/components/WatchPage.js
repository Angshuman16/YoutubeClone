import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API } from '../Constants';

const WatchPage = () => {
    const[searchParams]= useSearchParams();
    console.log(searchParams.get("v"));


  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(closeMenu());
  },[])



  const [comments,setComments] = useState([]);
     useEffect(() =>{
      getComments();
     },[]);

     const getComments= async () =>{
      const data= await fetch(YOUTUBE_COMMENTS_API);
      const json= await data.json();
      setComments(json.items);
     }
  return (
    <div className='p-5 m-2'>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
      web-share" allowfullscreen></iframe>

      



      
    </div>
   

   


   
  )
}

export default WatchPage