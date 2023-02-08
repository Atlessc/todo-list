import React, { useState } from "react"
import Modal from "./Modal"

function AddNewToDos() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='AddNewToDo'>
            <div className="btn">
            <button onClick={() => setShowModal(true)}>
                + New To Do
            </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <section>
                    <h3>Add New To Do</h3>
                    <form>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </form>
                </section>
            </Modal>
        </div>
    )
}


export default AddNewToDos