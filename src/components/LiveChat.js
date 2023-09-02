import React, { useEffect,useState } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'

import { addMessage } from '../utils/ChatSlice';
import { generateRandomNames, makeRandomMessages } from '../utils/Helper';

const LiveChat = () => {

    const dispatch= useDispatch();

    const chatMessages= useSelector((store) => store.chat.messages);
    const [message,setmessage] = useState('');

    

   useEffect(() =>{



    const i= setInterval(() =>{
      //API Polling - Calling in the API to fetch Live data
     
      dispatch(
        addMessage({
            name:generateRandomNames(),
            message:makeRandomMessages(28), 
        })
      );
    },2000)

    return() => clearInterval(i);


   },[])

    
  return (
    <>
    <div className='w-full h-[530px] mx-2 p-2 border border-black bg-slate-200 rounded-xl overflow-y-scroll flex flex-col-reverse'>
      <div>  
    {/* <Chatmsg name="Angshuman Pathak" message="I love React, I learn from akshay!" /> */}


    {
        // chatMessages.map((c,index) =>(
        //     <Chatmsg key={index} 
        //     name={c.name}
        //     message={c.message}
        //      />
        // ))

        chatMessages.map((c,i) =>(
          <Chatmsg key={i}
           name={c.name} 
           message={c.message} />
        ))

        
    }
    </div>
   

    
    
  </div>

   <form  className='w-full p-2 ml-2 border border-black flex rounded-lg' onSubmit={(e) =>{
    e.preventDefault();
    console.log('Subitted',message);
    dispatch(addMessage({
      name:"Angshuman",
      message:message,

    }));
    setmessage(" ");

   }}>
   <input type='text' placeholder='Enter Your Message' className='h-6 w-[20rem] ml-1 pl-2 ' value={message} 
   onChange={(e) =>{
    setmessage(e.target.value);
   }} ></input>
   <button className='pl-2 pr-2 ml-2   bg-green-100 rounded-lg'>Send</button>
 </form>
 </>

  )
}

export default LiveChat