import React from 'react'
import FlagBlock from './FlagBlock'

const ContentFlags = ({data, isLoading, fetchError}) => {
  return (
    <div className="content-flags">
        {/* <FlagBlock
            name = {data[0].name.common}
            population= {data[0].population}
            region = {data[0].region}
            capital = {data[0].capital[0]}
        /> */}
        {isLoading && <p>Loading ...</p>}
        {fetchError && <p>Connection to database failed</p>}
        {!isLoading && !fetchError &&
        data.map((country) => (
            <FlagBlock
            name = {country.name.common}
            population= {country.population}
            region = {country.region}
            capital = {country.capital}
            img= {country.flags.png}
        />
        ))}
    </div>
  )
}

export default ContentFlags