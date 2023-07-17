import React from 'react'
import Todo from './Todo';
import "./TodoList.css"

const TodoList = ({todos,deleteTodo,checkTodo }) => {

  const allTodos = todos.map((item,index)=>{
      return <Todo key={index} todoItem={item} deleteTodo={deleteTodo} checkTodo={checkTodo}  />
  })

  return (
    <section>
        <ul className='todo-list'>
            {allTodos}
        </ul>
    </section>
  )
}

export default TodoList