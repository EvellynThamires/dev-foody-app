import React from 'react'
import styled from 'styled-components'
import img from '../../img/Background.jpg'

const BackgroundLogin = styled.div `
    background-image:url("${img}");
    background-size: cover; 
    min-height:100vh; 
    padding-top: 5vh;
`
export default ({ children }) => (
    <BackgroundLogin> 
        { children }
    </BackgroundLogin>
)