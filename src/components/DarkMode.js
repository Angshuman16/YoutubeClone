import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";


const DarkMode = () => {
   

    const [mode,setmode] = useState("light");

    const [theme,setTheme] = useState("light");


    

    useEffect(() =>{
        if(theme === "dark")
        {
            document.documentElement.classList.add("dark");

        }
        else{
            document.documentElement.classList.remove("dark");
        }

    },[theme])

    const handleThemeSwitch = () =>{
        setTheme(theme === "dark" ? "light": "dark");
    }

    const toggleButton = () =>{
        if(mode === "light")
        {
            setmode("dark");
        }
        if(mode==="dark")
        {
            setmode("light");
        }
    }

    
    console.log(mode);
    return (
        <div className='dark_mode'>
            <button className="w-25 p-2  h-10 rounded-xl dark:bg-yellow-200 bg-blue-100" onClick={handleThemeSwitch}>Theme</button>
        </div>
        
    );
};

export default DarkMode;
