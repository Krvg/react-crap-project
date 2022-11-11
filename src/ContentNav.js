import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState, useEffect } from 'react';
import Filter from './Filter';
import useComponentVisible from './useComponentVisible';
import { useContext } from 'react';
import DataContext from './context/DataContext';
 
const ContentNav = ({setSearched, option, setOption, selectedData, setSelectedData}) => {
  const options = ["All","America","Africa","Asia","Europe","Oceania"];
  const {data} = useContext(DataContext);

  const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false);

  useEffect(() =>{
      const temp_selectedData = option !== "All" ? data.filter((country) => country.region.toLowerCase().includes(option.toLowerCase())) : data ;
      setSelectedData(temp_selectedData);
      setSearched(temp_selectedData)
  }, [option])

  const search = (input) =>{
    const frominput = selectedData.filter(country => country.name.common.toLowerCase().includes(input.toLowerCase()));
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
            <button className='select' onClick={() => setIsComponentVisible(true)}>{option}<MdOutlineKeyboardArrowDown/></button>
            {isComponentVisible && 
            <Filter 
              refs={ref}
              setIsComponentVisible={setIsComponentVisible}
              options={options}
              setOption={setOption}
            />}
        </label>
    </div>
  )
}

export default ContentNav