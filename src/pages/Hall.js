import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../plugins/firebase'

export default () => {
  
  const history = useHistory()

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((
        history.push('/')
      ))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>Salão</h1>
      <button onClick={logout}>Sair</button>
    </div>
  )
}
