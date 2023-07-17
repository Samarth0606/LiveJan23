import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    let [input,setInput] = useState('');
    let [isValid , setIsValid] = useState(true);

    function inputChangeHandler(e){ 
        setInput(e.target.value)
        if(input.trim().length > 0){
            setIsValid(true);
        }
    }

    function formSubmitHandler(e){ 

        e.preventDefault();
        if(input.trim().length === 0 ){
            setIsValid(false);
            return;
        }

        const newTodo = {
            id: props.todos.length,
            todo: input,
            checked:false
        }
        props.addTodo(newTodo);
        // console.log(input);
        setInput('');
    }
    

    
  return (
    <form onSubmit={formSubmitHandler}>
        <input style={{border: `${!isValid ? '5px solid blue' : '' } `}} onChange={inputChangeHandler} className='divv' type="text" name="" id="" placeholder='Add your todos' value={input} />
    </form>
  )
}

export default Form