import { useState } from "react";
import AddTaskForm from "./forms/AddTaskForm";
import UserTable from "./tables/UserTable";
import EditTaskForm from "./forms/EditTaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {

  const usersData = [
    { id: 1, taskname: 'Yasar', description: 'Task 1', duedate: "2023-06-24", status: "Yet to Start" }
  ];


  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false)


  const initialFormState = { id: null, taskname: '', description: '', duedate: "", status: "" }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // ADD Task
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  // DELETE Task
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false);
  }
  
  // Edit
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, taskname: user.taskname, description: user.description, duedate: user.duedate, status: user.status });
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1 className="my-4">CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-md-4">
          {editing ? (<div>
            <h2>Edit Task</h2>
            <EditTaskForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>) : (<div>
            <h2>Add Task</h2>
            <AddTaskForm addUser={addUser} />
          </div>
          )
          }
        </div>
        <div className="col-md-8 mt-4 mt-md-0">
          <h2>View Task</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;