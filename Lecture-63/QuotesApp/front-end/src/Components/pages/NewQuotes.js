import React from 'react'
import styles from './NewQuote.module.css'


const NewQuotes = () => {
  return (
    <form className={styles['new-quote-form']}>
        <div>
            <label htmlFor='author'>Author: </label>
            <input type="text" id='author' placeholder="Author's Name" />
        </div>

        <div>
            <label htmlFor="quote">Quote: </label>
            <textarea name="" id="quote" cols={15} rows={4} placeholder="Author's Quote"></textarea>
        </div>

        <button> Add Quote </button>
    </form>
  )
}

export default NewQuotes