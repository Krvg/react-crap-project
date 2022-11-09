import React from 'react'
import { FaMoon } from "react-icons/fa";

const HomeNav = () => {

  const toggleDarkMode = () =>{
    document.body.classList.toggle('white');
  }
  
  return (
    <div className="homenav">
        <p>Where in the world?</p>
        <button onClick={() => {toggleDarkMode()}}><FaMoon/> Dark Mode</button>
    </div>
  )
}

export default HomeNav