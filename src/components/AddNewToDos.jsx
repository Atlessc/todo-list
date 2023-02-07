import React, { useState } from "react";
import Modal from "./Modal";

function AddNewToDos() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='AddNewToDo'>
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    + New To Do
                </button>
            </div>
                <Modal showModal={showModal} setShowModal={setShowModal}>
                    <div>
                        hello i work
                    </div>
                </Modal>
            </div>
    );
};

export default AddNewToDos;