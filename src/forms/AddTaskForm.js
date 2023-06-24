import { useState } from "react";

 const AddTaskform = (props)=>{
    const initialformState = {id:null,taskname:'',description:'',duedate:"",status:""}
    const [task,setTask] =  useState(initialformState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target

       setTask({...task,[name]:value})
    }
    return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!task.taskname||!task.description||!task.duedate||!task.status) return;
            props.addUser(task);
            setTask(initialformState);
        }
    }>
         <div class="mb-3">
    <label htmlFor="taskname" class="form-label">Task Name</label>
    <input type="text" className="form-control" onChange={handleInputChange} name="taskname" value={task.taskname} />
  </div>
  <div class="mb-3">
    <label htmlFor="Description" class="form-label">Description</label>
    <input type="text" className="form-control" onChange={handleInputChange} name="description" value={task.description} />
  </div>
  <div class="mb-3">
    <label htmlFor="Due Date" class="form-label">Due Date</label>
    <input type="date" className="form-control" onChange={handleInputChange} name="duedate" value={task.duedate}/>
  </div>
  <div class="mb-3">
    <label htmlFor="Task Status" class="form-label">Task Status</label>
    <select className="form-select" onChange={handleInputChange} name="status" value={task.status}>
       <option value="">Select Status</option>
       <option value="Yet to Start">Yet to start</option>
       <option value="Working">Woking</option>
       <option value="Completed">Completed</option>
       </select>
  </div>   
        <button className="btn btn-success">Add Task</button>
      </form>
    )
 }

export default AddTaskform;