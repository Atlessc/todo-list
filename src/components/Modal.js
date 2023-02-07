import React, { useRef } from "react";

export default function Modal({ children, showModal, setShowModal }) {

    const modalRef = useRef()

    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }

    return (
        showModal && (
        <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="Container">
            {children}
        </div>
        </div>
        )
    )
    }
}
