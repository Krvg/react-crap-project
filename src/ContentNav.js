import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
 
const ContentNav = () => {
  return (
    <div className="content-nav">
        <label htmlFor="search">
            <FaSearch />
            <input 
                type="text"
                role="search" 
                placeholder='Search for a country...'
            />
        </label>

        <label htmlFor="select">
            <button>Filter by region <MdOutlineKeyboardArrowDown/></button>
        </label>
    </div>
  )
}

export default ContentNav