import React, { useState } from "react";
import Modal from "./Modal";

function AddNewToDos() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='AddNewToDo'>
            <button className="btn" onClick={() => setShowModal(true)}>
                <div>
                    + New To Do
                </div>
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    hello i work
                </div>
            </Modal>
            </div>
    );
    };

export default AddNewToDos;