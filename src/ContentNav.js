import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react';
 
const ContentNav = ({data ,setSearched}) => {

  const search = (input) =>{
    const frominput = data.filter(country => country.name.common.toLowerCase().includes(input.toLowerCase()));
    setSearched(frominput);
  }

  return (
    <div className="content-nav">
        <label htmlFor="search">
            <FaSearch />
            <input 
                type="text"
                role="search" 
                placeholder='Search for a country...'
                onChange={e => search(e.target.value)}
            />
        </label>

        <label htmlFor="select">
            <button>Filter by region <MdOutlineKeyboardArrowDown/></button>
        </label>
    </div>
  )
}

export default ContentNav