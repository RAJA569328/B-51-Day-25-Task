import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

 
function MyTodos({TodoTask, usTodoTask, input, setInput, Description, setDescription}) {

    function HandleClick(index, value) {
        const newTodoTask = [...TodoTask];
        newTodoTask[index].Completed = !value.Completed;
        usTodoTask(newTodoTask);
      }

    function HandleEdit(value,index){
        TodoTask.splice(index,1)
        setInput(value.TodoName);
        setDescription(value.Description);
    }

    function HandleDelete(index){
        const newTodoTask = TodoTask.filter((_, i) => i !== index);
    usTodoTask(newTodoTask);
    }

    return (<>
    <div className='container-fluid row row-cols-1 row-cols-6 g-2 mt-5' style={{marginLeft:'10%'}}>
                {
                    TodoTask.map((value, index)=> {
                       return <div key={index} id={index} className="container card col-3 d-flex flex-wrap " style={{margin:'10px'}}>
                        <ul className='mt-5'>
                        <li className="list-group-item"><b>Name:</b> {value.TodoName}</li>
                        <li className="list-group-item"><b>Description:</b> {value.Description}</li>
                        <li className="list-group-item"><b>status :</b>
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={!value.Completed?{backgroundColor:'red'}:null}>
                                                                        {value.Completed? 'Completed':"Not Completed"}
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#" onClick={()=>HandleClick(index,value)}>{value.Completed? "Not Completed":'Completed'}</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                        </li>
                    </ul>
                    <div className="card-body d-flex justify-content-end">
                        <button className='btn btn-success' style={{margin:'5px'}} onClick={()=>HandleEdit(value,index)}>Edit</button>
                        <button className='btn btn-danger' style={{margin:'5px'}} onClick={()=>HandleDelete(index)}>Delete</button>
                    </div>
                </div>
                    })
                }
            </div>
            </>
            )
}

export default MyTodos