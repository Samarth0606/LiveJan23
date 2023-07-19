import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShowQuotes = () => {
    const params = useParams();

    let [quote,setQuote] = useState({
        author:'', 
        text:''
    })

    async function fetchQuote(){
        let res = await axios.get(`http://localhost:8080/quotes/${params.id}`)
        let {author , text} = res.data;
        // console.log(author);
        // console.log(text);
        setQuote({author , text});
        // console.log(quote);
    }

    useEffect(()=>{
        fetchQuote();
    } , [])


  return (
    <div>
        <p>{quote.text}</p>
        <h2>{quote.author}</h2>
    </div>
  )
}

export default ShowQuotes