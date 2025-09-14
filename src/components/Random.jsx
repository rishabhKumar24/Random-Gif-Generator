import React, { use, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Spinner from './Spinner'



const Random = () => {

    const API_KEY = `b5Ea096ID71W53KjpJZhyVlCJkXNO95I`;

    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);

    

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    

    
    function clickHandler() {
        fetchData();

    }


  return (
    <div className='w-1/2 h-[470px] bg-orange-800  
    rounded-lg border-white shadow-xl
     shadow-green-900 flex flex-col 
      items-center gap-4 mt-[120px] '>


       <h1 className='text-white text-2xl font-bold uppercase pt-2 underline'>A Random Gif</h1>\

       {
         loading ? <Spinner /> : (<img src={gif} alt="Random Gif" width="300" height="300" className='rounded-lg border-2 border-white shadow-md shadow-green-900'/>)
       }

       

       <button onClick={clickHandler}
       className='w-10/12 bg-yellow-500 cursor-pointer text-white pt-1 py-1 mt-0 font-bold text-2xl rounded-2xl uppercase'>Generate</button>


    </div>

  )
}

export default Random