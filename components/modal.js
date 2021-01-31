const Modal = (props) =>{

    let closeBtn = null;

    const submitModal = () => {
        alert('submitting modal')
        closeBtn.click();
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button
                                ref={ele => closeBtn = ele}
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal">Close</button>
                            { props.hasSubmit &&
                                <button
                                    onClick={submitModal}
                                    type="button"
                                    className="btn btn-primary">Save changes</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;