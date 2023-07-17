import React from 'react'
import './Todo.css'
import {BsTrashFill} from "react-icons/bs"

const Todo = ({todoItem,deleteTodo,checkTodo}) => {


  function deleteTodoHandler(id){
    deleteTodo(id);
  }

  const inputChnageHandler = (id)=>{
    checkTodo(id);
  }



  return (
    <div>
      {/* <li className='todo' style={{textDecoration: `${todoItem.checked ? 'line-through' : ''}`}}> */}
      {/* or */}
      <li className={`${todoItem.checked ? 'todo checked' : 'todo'}`}>
        <input onChange={()=>inputChnageHandler(todoItem.id)} type="checkbox" defaultChecked={todoItem.checked} />
        <span> TASK:{todoItem.todo} </span>   
        <span onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span>  
      </li>
    </div>
  )
}

export default Todo