import React from 'react'
import { Link } from "react-router-dom";
import {useContext, useEffect} from "react"
import "../CSS/Navbar.css"
import ThemeToggle from "./ThemeToggle.jsx"
import { ThemeContext } from '../context/ThemeContext'
const Navbar = React.memo(() => {
    //  const {theme} = useContext(ThemeContext);
    // function toggleTheme(){
    //     if(theme === "light"){
    //         setTheme("dark");
    //         // document.body.classList.toggle("dark");
    //     }
    //     else{
    //         setTheme("light");
    //     }
    //     console.log("Toggle theme")
    // }
    const { theme, dispatch } = useContext(ThemeContext);

    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    };

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        //document.body.className = theme; 
    }, [theme]);
  return (
    <div>
        <nav className='navbar'>
            <h1>To Do App</h1>
                <div className="wrapper">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/add" className="link">Add Task</Link>
                    {/* <button className='theme-btn' onClick={toggleTheme}> 
                        {theme==="light" ? "Dark Mode" : "Light Mode"}
                    </button> */}

                    <ThemeToggle/>
                </div>
             
        </nav>
    </div>
  )
}
)

export default Navbar