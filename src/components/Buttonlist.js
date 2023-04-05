import React from 'react'
import Button from './Button'
import { popular } from '../Constants'

const Buttonlist = () => {
  return (
    <>
    <div className='flex overflow-hidden '>
     
      
    {

      Object.values(popular).map(items =>{
        return(
          <Button name={items.name} />
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