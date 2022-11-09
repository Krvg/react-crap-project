import React from 'react'

const FlagBlock = ({img, name, population, region, capital}) => {
  return (
    <div className="flagblock">
        <img src={img} alt='flag'></img>
        <div className="FlagName">
            <span>{name}</span>
        </div>
        <div className="Misc">
            <span>Population: {population}</span>
            <span>Region: {region}</span>
            <span>Capital: {capital}</span>
        </div>
    </div>
  )
}

export default FlagBlock