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
                    <form className="form">
                        <label htmlFor="title">Title</label>
                        <br/>
                        <input type="text" name="title" id="title" />
                        <br/>
                        <label htmlFor="Email">Email</label>
                        <br/>
                        <input type="email" name="Email" id="Email" />
                        <br/>
                        <label htmlFor="Date">Date</label>
                        <br/>
                        <input type="date" name="Date" id="Date" />
                        <br/>
                        <label htmlFor="Description">Description</label>
                        <br/>
                        <input type="textarea" name="Description" id="Description" placeholder="What was the issue?"/>
                        <br/>
                        <input type="submit" value="Submit" className="formBtn"/>
                        <input type="reset" value="Reset" className="formBtn"/>
                        <input type="button" value="Cancel" className="formBtn" onClick={() => setShowModal(false)}/>
                    </form>
                </section>
            </Modal>
        </div>
    )
}


export default AddNewToDos