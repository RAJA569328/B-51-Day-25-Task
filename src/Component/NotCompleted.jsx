import React from 'react'

function NotCompleted({TodoTask}) {
    return (<div className='container-fluid row row-cols-1 row-cols-5 g-2 mt-5' style={{marginLeft:'7%'}}>
    {TodoTask.filter((value,index)=>value.Completed ==! true).map((value,index)=>{
        return  <div key={index} id={index} className="card" style={{margin:'10px'}}>
                    <ul className='mt-5'>
                    <li className="list-group-item"><b>Name:</b> {value.TodoName}</li>
                    <li className="list-group-item"><b>Description:</b> {value.Description}</li>
                    <li className="list-group-item mt-2"><b>status :</b> <span style={{backgroundColor:'red', color:'white', borderRadius:'25px', padding:'6px'}}> Not Completed</span></li>
                    </ul>
                </div>
    })}
</div>
    )
}

export default NotCompleted