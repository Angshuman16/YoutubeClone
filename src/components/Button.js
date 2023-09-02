import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 m-2 py-2 rounded-lg bg-gray-200 h-12 hover:bg-black hover:text-white overflow-hidden '>
         {name}
        </button></div>
  )
}

export default Button