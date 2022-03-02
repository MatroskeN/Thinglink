import css from './Box.module.scss';
import React from "react";
import {useState} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

function Box(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className={css.root}>
            <div className={css.title}>
                Pellentesque praesent porta tortor
            </div>
            <div className={css.text}>
                Maecenas dignissim netus dictum id sed. Nibh convallis justo cum dolor eros elit lorem blandit. Turpis in odio dignissim pulvinar integer nunc vel, nunc. Duis gravida aenean amet, enim. Pellentesque lectus enim amet a. Ut quis augue enim elit egestas a. At platea tellus vehicula est massa suscipit nibh etiam accumsan. Odio integer risus, risus phasellus massa pellentesque. Nec cras in enim, commodo arcu nisi, enim. Vitae, sodales nullam vel urna dictum pellentesque leo quis semper.
            </div>
            <button onClick={handleShow}>
                Button
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Box;