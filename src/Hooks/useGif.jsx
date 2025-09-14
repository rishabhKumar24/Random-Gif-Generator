import { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = () => {
    // Hook logic here
    const API_KEY = `b5Ea096ID71W53KjpJZhyVlCJkXNO95I`;
    const randomImageUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
    const tagImageUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=g`;

    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);
    
    

    async function fetchData(tag) {
        setLoading(true);
        const url = tag ? tagImageUrl : randomImageUrl;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { gif, loading, fetchData };

}

export default useGif;

  
