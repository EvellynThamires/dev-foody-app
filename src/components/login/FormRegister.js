import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../plugins/firebase'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import growl from 'growl-alert'
import 'growl-alert/dist/growl-alert.css'

export default () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [post, setPost] = useState('')

    const history = useHistory()

    const register = (event) => {
        if(!name || !email || !password || !post) {
            event.preventDefault()
            growl({ text: 'Preencha todos os campos!', type: 'warning', fadeAway: true, fadeAwayTimeout: 2000 });
        } else {
            event.preventDefault()
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    const userCollection = firebase.firestore().collection('users')
                        firebase.auth().onAuthStateChanged((user) => {
                            userCollection
                                .doc(user.uid)
                                .set({
                                    name, 
                                    post,
                                })
                        })
                        growl({ text: 'Usuário criado', type: 'success', fadeAway: true, fadeAwayTimeout: 2000 });
                        history.push('hall')
                })
                .catch(() => {
                    growl({ text: 'Não foi possível criar o cadastro', type: 'error', fadeAway: true, fadeAwayTimeout: 2000 });
                })
        }
    }

    return (
        <Container> 
            <Row>
                <Col className='mt-2 px-0'>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control as="select" value={post} onChange={e => setPost(e.target.value)}>
                                <option value='cargo'>Cargo</option>
                                <option value='waiter'>Garçom/Garçonete</option>
                                <option value='cook'>Cozinha</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value={name}
                                onChange={e => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} 
                                onChange={e => setEmail(e.target.value)} />
                        </Form.Group>
                
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <Button variant="primary" type="submit" onClick={register} block>Cadastrar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}