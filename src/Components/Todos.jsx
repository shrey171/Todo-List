import React, { useState } from 'react'
import Todo from './Todo';
import Form from './Form'

export default function Todos(){
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Study",
      desc: "Study the concepts and build a strong foundation."
    },
    {
      sno: 2,
      title: "Play",
      desc: "Playing is as important as studying."
    },
    {
      sno: 3,
      title: "Walk",
      desc: "Walking is as important as studying and playing."
    }
  ]);
  let count = 3;

  function addTodo(){
    count++;
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#description").value;
    const todo = {sno: count, title, desc};
    setTodos(()=> {
      return [...todos, todo]
    } );
  }
   
  function onDelete(sno) {
    const temp = todos.filter((todo)=>{
      return todo.sno !== sno;
    })
    setTodos(temp);
  }


  return (
    <>
    <Form addTodo={addTodo}/>
    <div className='container' id="todos">
      <h2 className='text-center mb-5'>All Todos</h2>
      {todos.map((e)=> {
        return <Todo todo={e} onDelete={onDelete} key={e.sno}/>
      })}
    </div>
    </>
  )
}
