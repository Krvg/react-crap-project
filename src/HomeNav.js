import React from 'react'
import { FaMoon } from "react-icons/fa";

const HomeNav = () => {
  return (
    <div className="homenav">
        <p>Where in the world?</p>
        <button><FaMoon/> Dark Mode</button>
    </div>
  )
}

export default HomeNav