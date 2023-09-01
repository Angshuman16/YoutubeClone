import React from 'react'

const Chatmsg = ({name,message}) => {
  return (
    <div className='flex items-center p-1 shadow-sm'>
   
            <img className='h-8' 
            alt="User"
             src="https://static.thenounproject.com/png/4035892-200.png" />
        

        <span className='px-2   font-bold'>{name}</span>
        <span>{message}</span>
        

        
        
        </div>
  )
}

export default Chatmsg