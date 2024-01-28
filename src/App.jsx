import React, { useState } from 'react'
import Form from './Component/Form'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {

  let [TodoTask, usTodoTask] = useState([
    {
      id:1,
      TodoName: 'Python',
      Description: 'Learn Python',
      Completed: false,
    },
    {
      id:2,
      TodoName: 'Javascript',
      Description: 'Learn Javascript',
      Completed: false,
    },
    {
      id:3,
      TodoName: 'Java',
      Description: 'Learn Java',
      Completed: false,
    },
    {
      id:4,
      TodoName: 'C++',
      Description: 'Learn C++',
      Completed: false,
    }
  ])

  return (
    <>
    <Form TodoTask={TodoTask} usTodoTask={usTodoTask}/>
    </>
  )
}

export default App