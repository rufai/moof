import React, { useState } from 'react'
import Modal from './Modal'
export default function Dasboard() {

    const [show, setShow]  = useState(false)
    
    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow(false)
    }

    return (
        <div>
            <main>
                <h1>Modal</h1>
                <Modal show={show} handleClose={hideModal}>
                    <p>Modal</p>
                </Modal>
                <button type="button" onClick={showModal}>
                    Open
                </button>
            </main>
        </div>
    )
}