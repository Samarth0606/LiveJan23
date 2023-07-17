import React from 'react'
import styles from './Quote.module.css'



const Quote = (props) => {
  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button>View full Quote</button>
    </li>
  )
}

export default Quote