import React from 'react'
import Button from './Button'
import { popular } from '../Constants'

const Buttonlist = () => {
  return (
    <>
    <div className='flex overflow-hidden dark:bg-black m-0 '>
     
      
    {
       Object.values(popular).map(item =>{
        return(
          <Button key={item.name} name= {item.name}/>
        )
       })
       
    }
    {/* <Button name= "App" />
    <Button name= "Movies" /> */}
    </div>
    </>
  )
}

export default Buttonlist