import React from 'react'
import {useContext} from "react"
import "../CSS/Navbar.css"
import { ThemeContext } from '../App';
const Navbar = React.memo(() => {
     const {theme, setTheme} = useContext(ThemeContext);
    function toggleTheme(){
        if(theme === "light"){
            setTheme("dark");
            // document.body.classList.toggle("dark");
        }
        else{
            setTheme("light");
        }
        console.log("Toggle theme")
    }
  return (
    <div>
        <nav className='navbar'>
            <h1>To Do App</h1>
            
             <button className='theme-btn' onClick={toggleTheme}> 
                {theme==="light" ? "Dark Mode" : "Light Mode"}
             </button>
        </nav>
    </div>
  )
}
)

export default Navbar