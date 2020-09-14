import React, { useState } from 'react'
import firebase from '../../plugins/firebase'
import { Modal, Button, Form } from 'react-bootstrap'
import growl from 'growl-alert'
import 'growl-alert/dist/growl-alert.css'

export default () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('')

    const forgotPassword = () => {
        firebase.auth().useDeviceLanguage()
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                growl({ text: 'Email enviado', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
            })
            .catch(() => {
                growl({ text: 'Email incorreto', type: 'error', fadeAway: true, fadeAwayTimeout: 2000 });
            })
    }

    return (
        <React.Fragment>
            <Button variant="link" onClick={handleShow}>Esqueci minha senha</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Encontre sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Insira seu email para procurar sua conta.</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={forgotPassword}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}