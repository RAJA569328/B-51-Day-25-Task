import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function MyTodos({ TodoTask }) {
  // Initialize individual states for each button
  const [buttonStates, setButtonStates] = useState(TodoTask.map(() => "Not Completed"));

  function handleClick(index) {
    // Create a new array with the updated state for the clicked button
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = newButtonStates[index] === 'Not Completed' ? 'Completed' : 'Not Completed';

    // Update the state
    setButtonStates(newButtonStates);
  }

  return (
    <>
      <div className='container col-4'>
        {TodoTask.map((value, index) => (
          <div className="card" style={{ margin: '10px' }} key={index}>
            <ul className='mt-5'>
              <li className="list-group-item"><b>Name:</b> {value.TodoName}</li>
              <li className="list-group-item"><b>Description:</b> {value.Description}</li>
              <li className="list-group-item"><b>Status :</b>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {buttonStates[index]}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={() => handleClick(index)}>
                      {buttonStates[index] === 'Not Completed' ? 'Completed' : 'Not Completed'}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <div className="card-body d-flex justify-content-end">
              <button className='btn btn-success' style={{ margin: '5px' }}>Edit</button>
              <button className='btn btn-danger' style={{ margin: '5px' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyTodos;