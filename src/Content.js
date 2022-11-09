import React from 'react';
import ContentNav from './ContentNav';
import ContentFlags from './ContentFlags';
import {useState, useEffect} from 'react';

const Content = ({data, fetchError, isLoading}) => {

  const [searched, setSearched] = useState(data);

  useEffect(() =>{
    setSearched(data)
  }, [data])

  console.log(searched);
  return (
    <div className='content'>
        <ContentNav 
          data={data} 
          setSearched={setSearched}
        />
        <ContentFlags 
            fetchError={fetchError}
            isLoading={isLoading}
            data={searched}
        />
    </div>
  )
}

export default Content