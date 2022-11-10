import React from 'react';
import Content from './Content';
import { useState, useEffect, useRef } from 'react';

const Home = () => {
    const API_URL = `https://restcountries.com/v3.1/all`

    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);
    const effectRan = useRef(false)

    useEffect(() =>{
        if(effectRan.current === false){
        setisLoading(true);
        const fetchData = async () =>{
            try{
                const resp = await fetch(API_URL);
                if(!resp.ok) throw Error("Failed to connect to countries database")
                const data = await resp.json();
                setData(data);
            } catch (err){
                setFetchError(err.message);
            } finally{
                setisLoading(false);
            }
        }

        setTimeout(() =>{fetchData()},1000)

        return() =>{
            effectRan.current = true;
        }
        }
        // fetchData();
    },[API_URL])

  return (
    <div className="Home">
        <Content 
            isLoading={isLoading} 
            data={data}
            fetchError={fetchError}
        />
    </div>
  )
}

export default Home