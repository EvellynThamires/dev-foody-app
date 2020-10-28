import React from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../plugins/firebase'
import styled from 'styled-components'

import BackgroundHall from '../components/hall/BackgroundHall'

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

  const Container = styled.div `
    display: flex;
    width: 80%;
    margin: 0 auto;
  `

  const MenuHall = styled.div `
    background-color: #CECECE;
    width: 60%;
  ` 

  const Banner = styled.div `
    height: 15%;
    background-color: #85938D;
  `

  return (
    <Container>
      <BackgroundHall>
        Olá
      </BackgroundHall>
      <MenuHall>
      </MenuHall>
    </Container>
  )
}
