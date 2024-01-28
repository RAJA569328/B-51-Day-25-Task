import React, { useState } from 'react'
import Completed from './Completed'
import MyTodos from './MyTodos'
import NotCompleted from './NotCompleted'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import Input from './Input';


function Form({TodoTask, usTodoTask}) {

    let [input, setInput] = useState('')
    let [Description, setDescription] = useState('')

    let HandleInput=(event)=>{
        setInput(event.target.value)
    }

    let HandleDescription=(event)=>{
        setDescription(event.target.value)
    }

    let AddTodoTask = () => {
        event.preventDefault()
        
        let AddTodo = {
            id:2,
            TodoName: `${input}`,
            Description: `${Description}`,
            Completed: false,
        }
        TodoTask.unshift(AddTodo)

        setInput('');
        setDescription('')
    }

    return (
        
    <div id="wrapper">
                <BrowserRouter>
                    <Input input={input} Description={Description} HandleInput={HandleInput} HandleDescription={HandleDescription} AddTodoTask={AddTodoTask}/>
                    
                    
                    
                    <Routes>
                        <Route path='MyTodo' element={<MyTodos  TodoTask={TodoTask} usTodoTask={usTodoTask} input={input} setInput={setInput} Description={Description} setDescription={setDescription}/>}/>
                        <Route path='NotCompleted' element={ <NotCompleted TodoTask={TodoTask} />} />
                        <Route path='Completed' element={ <Completed  TodoTask={TodoTask} /> } />
                        <Route path='*' element={<MyTodos  TodoTask={TodoTask} usTodoTask={usTodoTask} input={input} setInput={setInput} Description={Description} setDescription={setDescription}/>}/>
                    </Routes>
                    </BrowserRouter>
                    
            </div>
            
    )
}

export default Form


{/* <MyTodos  TodoTask={TodoTask} usTodoTask={usTodoTask} input={input} setInput={setInput} Description={Description} setDescription={setDescription}/>
                    <NotCompleted TodoTask={TodoTask} />
                    <Completed  TodoTask={TodoTask} /> */}