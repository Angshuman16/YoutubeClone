import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 m-2 py-2 rounded-lg bg-slate-100 h-12 hover:bg-slate-200  overflow-hidden '>
         {name}
        </button></div>
  )
}

export default Button