import React, {useState} from 'react'

function Modal() {
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <button onClick={toggleModal}>Show Modal</button>
            { showModal && 
                <div>
                    This is a modal
                </div>
            }
        </>
    )
}

export default Modal
