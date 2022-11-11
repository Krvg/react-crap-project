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
  const [selectedData, setSelectedData] = useState(data);

  useEffect(() =>{
    setSearched(data)
    setSelectedData(data)
  }, [data])

  console.log(searched);

  return (
    <div className='content'>
        <ContentNav 
          data={data} 
          setSearched={setSearched}
          option={option}
          setOption={setOption}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
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