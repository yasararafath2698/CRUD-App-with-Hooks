import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserTable = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Task Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user) => (
                            <>
                                <tr key={user.id}>
                                    <td>{user.taskname}</td>
                                    <td>{user.description}</td>
                                    <td>{user.duedate}</td>
                                    <td><button title="Click to edit status" onClick={() => {
                                        props.editRow(user)
                                    }} className="btn btn-primary">{user.status}</button></td>
                                    <td>
                                        <button className="btn btn-danger" onClick={handleShow}>Delete</button>
                                    </td>

                                </tr>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delete task</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you sure want to delete?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="danger" onClick={() => {
                                            props.deleteUser(user.id)
                                            handleClose()
                                        }}>
                                            Yes, Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                            </>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>No task is there</td>
                        </tr>
                    )
                    }

                </tbody>
            </table>



        </>
    )
}










export default UserTable;