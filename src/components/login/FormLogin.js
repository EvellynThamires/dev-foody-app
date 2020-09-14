import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../plugins/firebase'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import growl from 'growl-alert'
import 'growl-alert/dist/growl-alert.css'

import ForgotPassowrd from './ForgotPassword'

export default () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const login = (event) => {
        if(!email || !password) {
            event.preventDefault()
            growl({ text: 'Preencha os campos', type: 'warning', fadeAway: true, fadeAwayTimeout: 2000 });
        } else {
            event.preventDefault()
            firebase.auth().signInWithEmailAndPassword(email, password) 
                .then(() => {
                    growl({ text: 'Usuário logado', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
                    history.push('/hall')
                })
                .catch(() => {
                    growl({ text: 'Usuário incorreto', type: 'error', fadeAway: true, fadeAwayTimeout: 2000 });
                })
        }  
    }
    
    return (
        <Container>
            <Row>
                <Col className='mt-2 px-0'>
                    <Form>
                        <Form.Group controlId="formBasicLoginEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                
                        <Form.Group controlId="formBasicLoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <Button variant="primary" type="submit" onClick={login} block>Login</Button>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-3">
                            <Col xs lg="6" className='text-center'>
                                <ForgotPassowrd />
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}