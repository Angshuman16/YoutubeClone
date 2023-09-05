import React from 'react'
import ShimmerCard from './ShimmerCard'



const Shimmer = () => {
    return (
      <div className='flex flex-wrap justify-start ml-[40px]'>
        {
          Array(40).fill().map((val, index) => {
            return <ShimmerCard key={index} />
          })
        }
      </div>
    )
  }
  

export default Shimmer;