import React from 'react'
import FlagBlock from './FlagBlock'

const ContentFlags = ({data}) => {
  return (
    <div className="Content-flags">
        {/* <FlagBlock
            name = {data[0].name.common}
            population= {data[0].population}
            region = {data[0].region}
            capital = {data[0].capital[0]}
        /> */}

        {data.map((country) => (
            <FlagBlock
            name = {country.name.common}
            population= {country.population}
            region = {country.region}
            capital = {country.capital}
            img= {country.flags.svg}
        />
        ))}
    </div>
  )
}

export default ContentFlags