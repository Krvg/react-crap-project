import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from './context/DataContext'

const CountryPage = () => {

  const {country, data} = useContext(DataContext);
  const countryObj = data.filter((countryName) => countryName.name.common == country)
  console.log(countryObj);

  return (
    <div>
        {countryObj[0].name.common}
        {countryObj[0].population}
    </div>
  )
}

export default CountryPage