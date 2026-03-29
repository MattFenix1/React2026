import './Modal.css';

function Modal({closeModal}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={()=>closeModal(false)}>X</button>
                </div>
                <div className="title">
                    <h1>Is this task done?</h1>
                </div>
                <div className="footer">
                    <button onClick={()=>closeModal(false)} id="cancelBtn">No</button>
                    <button onClick={()=>closeModal(true)}>Yes</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;