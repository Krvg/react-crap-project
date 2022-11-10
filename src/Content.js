import React from 'react';
import ContentNav from './ContentNav';
import ContentFlags from './ContentFlags';
import {useState, useEffect} from 'react';
import { useContext } from 'react';
import DataContext from './context/DataContext'

const Content = () => {

  const {isLoading, data, fetchError} = useContext(DataContext)

  const [searched, setSearched] = useState(data);
  const [option, setOption] = useState("Filter by regions");

  useEffect(() =>{
    setSearched(data)
  }, [data])

  return (
    <div className='content'>
        <ContentNav 
          data={data} 
          setSearched={setSearched}
          option={option}
          setOption={setOption}
        />
        <ContentFlags
            option={option}
            fetchError={fetchError}
            isLoading={isLoading}
            data={searched}
        />
    </div>
  )
}

export default Content