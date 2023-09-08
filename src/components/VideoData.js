import React, { useState,useEffect } from 'react'
import { formatCompactNumber } from '../utils/Helper';


const VideoData = ({data}) => {

    const [isSubcribed,setSubscribe] =useState(false);

    const[likeButton,setlikeButton] = useState(false);

    const[isshared,setShared] = useState(false);
    const[LikeCount,setLikeCount]=useState();

    useEffect(() => {
      // console.log("data"+data?.statistics?.likeCount);
      setLikeCount(data?.statistics?.likeCount);
      console.log(LikeCount);
      
    }, [data?.statistics?.likeCount]);

    


    const handleLikeClick = () =>{
      if(likeButton)
      {
        setlikeButton(false);
        setLikeCount(Number(LikeCount)-1);
      }
      else
      {
        setlikeButton(true);
        setLikeCount(Number(LikeCount)+1);
      }



    }

   



  
  return (
    

    <div>
    <div>
    <div className='font-medium text-[18px]'>{data?.snippet?.title}</div>
        {/* <p className="font-bold text-lg py-2"> Description: {data?.snippet?.description}</p> */}
        <div className='flex flex-wrap'>
        <img className='rounded-full mt-6  w-10 h-10' alt='thumbnail' src={data?.snippet?.thumbnails?.default?.url} />
        <div className='flex flex-col justify-center ml-2 px-4'>
                                            <div className='font-bold text-[16px] dark:text-white'>{data?.snippet?.channelTitle}</div>
                                            <div className='text-gray-500  dark:text-white text-[12px]'>{formatCompactNumber(data?.statistics?.viewCount)} Subscriber</div>
                                        </div>

           
         <div className='p-2 m-2 text-xl'>
     { isSubcribed?(
        //  <button
        //   className='p-2 m-2 bg-red-600 rounded-xl  font-bold' 
        //   onClick={() => setSubscribe(false)} >
        <button className='bg-black rounded-full dark:bg-red-600 p-2 px-4 ml-2 text-white'
        onClick={() => setSubscribe(false)}>
          Subscribed</button>

        // Subscribed</button>
         ):(
           
          <button className='bg-black rounded-full p-2 px-4 ml-2 dark:bg-red-600 text-white'
          onClick={() => setSubscribe(true)}>
          Subscribe</button>

          // <button
          // className='p-2 m-2 bg-red-600 rounded-xl  font-bold' 
          // onClick={() => setSubscribe(true)}>
          //   Subscribe
          // </button>
         )}
         
         
         
         </div>
         </div>
    </div>

<div className='flex flex-wrap'>



   
    
    <div className='p-2 m-2 text-xl  dark:text-white '> {LikeCount}
      
      
       
      
    

     
     <button className='px-4 py-2 m-2 rounded-full text-white bg-black  dark:text-black' onClick={handleLikeClick}>
      {likeButton== true ?(
        <button>Liked</button>

      ):(
        <button>Like</button>
      )}
      </button> </div>









    <div className='p-2 m-2 text-xl dark:text-white'>{data?.statistics?.commentCount}
    <button className='p-2 m-2  rounded-full text-white bg-black  dark:text-black'>Comments</button> </div>

   
    



         <div className='p-2 m-2 text-xl'>
     { isshared?(
         <button
          className='p-2 m-2 rounded-full text-white bg-black  ' 
          onClick={() => setShared(false)} >

         Shared</button>
         ):(

          <button
          className='p-2 m-2 rounded-full text-white bg-black' 
          onClick={() => setShared(true)}>
            Share
          </button>
         )}
         
         
         </div>



       <div>

       </div>

   

    </div>
    </div>
  )
}

export default VideoData;