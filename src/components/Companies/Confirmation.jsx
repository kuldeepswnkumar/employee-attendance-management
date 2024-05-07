import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Confirmation() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className='text-black'>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='text-black' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='text-black'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Confirmation