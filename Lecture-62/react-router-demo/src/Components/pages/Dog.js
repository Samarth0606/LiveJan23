import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dog = () => {
    let navigate = useNavigate();
    let redirectPageHandler = ()=>{
        navigate('/');
    }

  return (
    <div>
        <h1>Woof Woof</h1>
        <button onClick={redirectPageHandler}>Main page</button>
        
    </div>
  )
}

export default Dog