const Modal = (props) => {

    const cancelHandler = () => {
        props.cancelHandler();
    }

    const confirmHandler = () => {
        props.confirmHandler();
    }

    return (
        <div className="modal">
            <div>Are you sure?</div>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal;