import React, { useEffect } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';

const LiveChat = () => {

    const dispatch= useDispatch();

    const chatMessages= useSelector((store) => store.chat.messages);


   useEffect(() =>{



    const i= setInterval(() =>{
      //API Polling - Calling in the API to fetch Live data
      console.log("API POLLING");

      dispatch(
        addMessage({
            name:"Abhay",
            message:"Lorem ipsum dolor site Amet",
        })
      );
    },2000)

    return() => clearInterval(i);


   },[])

    
  return (
    <div className='w-full h-[530px] mx-2 p-2 border border-black bg-slate-200 rounded-xl overflow-y-scroll'>
        
    {/* <Chatmsg name="Angshuman Pathak" message="I love React, I learn from akshay!" /> */}


    {
        // chatMessages.map((c,index) =>(
        //     <Chatmsg key={index} 
        //     name={c.name}
        //     message={c.message}
        //      />
        // ))

        chatMessages.map((c,i) =>(
          <Chatmsg key={i} name={c.name} message={c.message} />
        ))

        
    }

    
    
  </div>
  )
}

export default LiveChat