import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const handleDelete = () => {
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
            { modalIsOpen && <Modal cancelHandler={handleCloseModal} confirmHandler={handleCloseModal} /> }
            { modalIsOpen && <Backdrop handleCloseModal={handleCloseModal} /> }
        </div>
    );
}

export default Todo;