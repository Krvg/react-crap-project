import React from 'react';
import HomeNav from './HomeNav';
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
        console.log("eff ran");
        setisLoading(true);
        const fetchData = async () =>{
            try{
                const resp = await fetch(API_URL);
                if(!resp.ok) throw Error("Failed to connect to countries database")
                const data = await resp.json();
                console.log(data);
                setData(data);
            } catch (err){
                setFetchError(err.message);
                console.log(err.message);
            } finally{
                setisLoading(false);
            }
        }

        setTimeout(() =>{fetchData()},1000)

        return() =>{
            console.log("unmounted");
            effectRan.current = true;
        }
        }
        // fetchData();
    },[])

  return (
    <div className="Home">
        <HomeNav />
        <Content 
            isLoading={isLoading} 
            data={data}
            fetchError={fetchError}
        />
    </div>
  )
}

export default Home