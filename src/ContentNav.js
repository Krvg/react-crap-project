import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useState, useEffect } from 'react';
import Filter from './Filter';
 
const ContentNav = ({data ,setSearched, option, setOption}) => {
  const options = ["All","America","Africa","Asia","Europe","Oceania"];
  const [active, setActive] = useState(false);
  const [selectedData, setSelectedData] = useState(option);

  useEffect(() =>{
    console.log(option);
      const temp_selectedData = option != "All" ? data.filter((country) => country.region.toLowerCase().includes(option.toLowerCase())) : data ;
      console.log(temp_selectedData);
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
            <button className='select' onClick={() => setActive(true)}>{option}<MdOutlineKeyboardArrowDown/></button>
            <Filter 
              options={options}
              // option={option}
              setOption={setOption}
              active={active}
              setActive={setActive}
            />
        </label>
    </div>
  )
}

export default ContentNav