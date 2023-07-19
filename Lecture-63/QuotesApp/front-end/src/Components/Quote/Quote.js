import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Quote.module.css'



const Quote = (props) => {

  let navigate = useNavigate();
  const showQuoteHnadler = (id)=>{
    navigate(`/quotes/${id}`);
  }

  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHnadler(props.id)} >View full Quote</button>
    </li>
  )
}

export default Quote