import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext'

const FlagBlock = ({img, name, population, region, capital}) => {

  const {setCountry} = useContext(DataContext);
  
  return (
    <Link className='links' to={`countrypage/${name}`}>
    <div 
      className="flagblock"
      onClick={() => setCountry(name)}
    >
      
        <div className='flag-img'><img src={img} alt='flag'></img></div>
        <div className="FlagName">
            <span>{name}</span>
        </div>
        <div className="Misc">
            <span>Population: {population}</span>
            <span>Region: {region}</span>
            <span>Capital: {capital}</span>
        </div>
    </div>
    </Link>
  )
}

export default FlagBlock