import React, { useState,useEffect } from 'react'


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
        <p className="font-bold text-lg py-2">{data?.snippet?.title}</p>
        <div className='flex flex-wrap'>
         <p className=" p-2 my-5 text-xl font-bold">{data?.snippet?.channelTitle}</p>  
         <div className='p-2 m-2 text-xl'>
     { isSubcribed?(
         <button
          className='p-2 m-2 bg-red-600 rounded-xl  font-bold' 
          onClick={() => setSubscribe(false)} >

         Subscribed</button>
         ):(

          <button
          className='p-2 m-2 bg-red-600 rounded-xl  font-bold' 
          onClick={() => setSubscribe(true)}>
            Subscribe
          </button>
         )}
         
         
         </div>
         </div>
  </div>

    <div className='flex flex-wrap'>



   
    
    <div className='p-2 m-2 text-xl'>{LikeCount}

     
     <button className='p-2 m-2 font-bold rounded-xl bg-green-300 ' onClick={handleLikeClick}>
      {likeButton== true ?(
        <button>Liked</button>

      ):(
        <button>Like</button>
      )}
      </button> </div>









    <div className='p-2 m-2 text-xl'>{data?.statistics?.commentCount}
    <button className='p-2 m-2 font-bold rounded-xl bg-cyan-200'>Comment</button> </div>

   
    



         <div className='p-2 m-2 text-xl'>
     { isshared?(
         <button
          className='p-2 m-2 bg-blue-300 rounded-xl  font-bold' 
          onClick={() => setShared(false)} >

         Shared</button>
         ):(

          <button
          className='p-2 m-2 bg-blue-300 rounded-xl  font-bold' 
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