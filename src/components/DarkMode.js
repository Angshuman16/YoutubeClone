import React, { useState } from "react";


const DarkMode = () => {
    const [mode,setmode] = useState(true);

    const toggleButton = () =>{
        setmode(!mode);
    }
    return (
        <div className='dark_mode'>
            {mode?
           (<button  className="bg-yellow-300 text-black rounded-full p-2" onClick={toggleButton} >
             Light</button>):(<button  className=" bg-black text-white rounded-full p-2" onClick={toggleButton} >
             Dark</button>)}
        </div>
    );
};

export default DarkMode;
