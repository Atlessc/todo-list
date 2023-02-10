import React, { useState } from "react"
import Modal from "./Modal"
import { Person , CalendarDate , EnvelopAt , BodyText } from 'react-bootstrap-icons'

function AddNewToDos() {
    const [showModal, setShowModal] = useState(false)

    const {text, setText} = useState("")
    const {email, setEmail} = useState("")
    const {date, setDate} = useState("")
    const {description, setDescription} = useState("")


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
                    <button className="CloseBtn" onClick={() => setShowModal(false)}>X</button>
                    <form className="form">
                        <label htmlFor="title"><BodyText/>Title</label>
                        <br/>
                        <input type="text" name="title" value={text} onChange={ (e) => setText(e.target.value)} className="title" />
                        <br/>
                        <label htmlFor="Email">Email</label>
                        <br/>
                        <input type="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="Email" />
                        <br/>
                        <label htmlFor="Date">Date</label>
                        <br/>
                        <input type="date" name="Date" value={date} onChange={(e) => setDate(e.target.value)} className="Date" />
                        <br/>
                        <label htmlFor="Description">Description</label>
                        <br/>
                        <input type="textarea" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="Description" placeholder="What was the issue?"/>
                        <br/>
                        <input type="submit" value="Submit" className="formBtn"/>
                        <input type="reset" value="Reset" className="formBtn"/>
                    </form>
                </section>
            </Modal>
        </div>
    )
}


export default AddNewToDos