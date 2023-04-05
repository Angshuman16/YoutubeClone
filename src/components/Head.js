import React from 'react'
import Buttonlist from './Buttonlist'
import { useDispatch } from 'react-redux'

import { toggleMenu } from '../utils/appSlice'


const Head = () => {
  const dispatch = useDispatch();
     
  const toggleMenuHandler = () =>{
     dispatch(toggleMenu())
  };
  return (

   
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">

        <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer'
          onClick={() => toggleMenuHandler()}
        alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>
        
        <a href="/">
        <img className='h-8 mx-2'
        
         alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
          </a>
        </div>
       
 
        <div className='col-span-10 px-28'>
            <input className=' border border-gray-400 w-1/2 py-1 px-4 rounded-l-full' type="text" placeholder='Search'/>
            <button className='py-1  border border-gray-400 rounded-r-full bg-gray-100 px-5'>
                   🔍
              </button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt="User" src="https://static.thenounproject.com/png/4035892-200.png" />
        </div>
    </div>
  )
}

export default Head