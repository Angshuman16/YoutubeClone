import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";





const DarkMode = ({chooseMode}) => {
   

    const [theme,setTheme] = useState("light");

    let mode= theme;


    

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

    console.log(theme);
   
    
    
   
    return (
        <div className='dark_mode'>
            {theme=='dark'? <button className="w-25 p-2  h-10 rounded-xl dark:bg-yellow-200 " onClick={handleThemeSwitch}>Dark</button>:
            <button className="w-25 p-2  h-10 rounded-xl  bg-blue-100" onClick={handleThemeSwitch}>Light</button>}

             {chooseMode(mode) }
   
           
            
        </div>
        
    );
};


export default DarkMode;
