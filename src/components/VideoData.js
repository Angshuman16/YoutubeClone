import React from 'react'

const VideoData = ({data}) => {


  
  return (

    <div className='flex flex-wrap'>
   
    
    <div className='p-2 m-2 text-xl'>{data?.statistics?.likeCount} Likes </div>,
    <div className='p-2 m-2 text-xl'>{data?.statistics?.commentCount} comments </div>
   

    </div>
  )
}

export default VideoData;