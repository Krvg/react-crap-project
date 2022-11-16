import React from 'react'
import { Link, useParams} from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const CountryPage = () => {
  const {data} = useContext(DataContext);
  const countryName = useParams();
  const countryObj = data.filter((country) => country.name.common == countryName.name)
  
  const findCountry = (shortName) =>{
    const found = data.filter((country) => country.cca3 == shortName)
    return found[0].name.common;
  }

  return (
    <div>
        <img src={countryObj[0].flags.png} alt="" />
        {countryObj[0].name.common}
        {countryObj[0].population}
        {countryObj[0].borders && countryObj[0].borders.map((border) =>(
        <Link key={border} to={'/countrypage/'+findCountry(border)}>
          <button 
            key={border}
          >{findCountry(border)}</button>
         </Link>
        ))}
    </div>
  )
}

export default CountryPage