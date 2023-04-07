import React from 'react'
import Maincomponent from './Maincomponent'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (                 // Here Either there will be the MainComponent or the Watchpage so for teh Routing we do
                           // use the Outlet.
    <div className="flex">
    
    <Sidebar />
     <Outlet /> 

    </div>
  )
}

export default Body