import React from 'react'
import Maincomponent from './Maincomponent'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className="flex">
    
    <Sidebar />
    <Maincomponent />
    </div>
  )
}

export default Body