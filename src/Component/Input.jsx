import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function Input({input, Description,HandleInput, HandleDescription, AddTodoTask }) {
    
    const navigate = useNavigate();

    let [Dropdowns, setDropDowns] = useState('All')
    
    return (<>
    <div className='h1'>
                        <h1>TODO LIST</h1>
                    </div>
                    <form onSubmit={AddTodoTask} className='d-flex justify-content-evenly align-items-center flex-wrap-wrap' style={{height:'300px'}}>
                        <div className="mb-3 col-4">
                            <input type="text" className="form-control" id="TodoName" value={input} placeholder="Todo Name" onChange={HandleInput} style={{border:'2px solid black'}}/>
                        </div>
                        <div className="mb-3 col-4">
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={Description} style={{border:'2px solid black'}} onChange={HandleDescription} placeholder="Todo Description"/>
                        </div>
                        <div>
                            <button className='btn btn-success'>Add Todo</button>
                        </div>
                    </form>

                    <div className=' container d-flex justify-content-evenly'>
                        <span><h3>My Todos</h3></span>
                        <div className='d-flex'>
                        <span><h3>Status : </h3> </span>
                        <Dropdown onSelect={(e)=> setDropDowns(e)} style={{marginLeft:'10px'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {Dropdowns}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                            <Dropdown.Item eventKey="All" onClick={()=>{navigate('/MyTodo')}} >All</Dropdown.Item>
                                <Dropdown.Item eventKey={'Completed'} onClick={()=> {navigate('/Completed')}}>Completed</Dropdown.Item>
                                <Dropdown.Item eventKey={"Not Completed"} onClick={()=>{navigate('/NotCompleted')}}>Not Completed</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    </div>

                    

                    </>
    )
}

export default Input