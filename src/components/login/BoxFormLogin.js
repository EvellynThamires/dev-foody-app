import React from 'react'
import styled from 'styled-components'

const BoxFormLogin = styled.div `
    width: 33vw;
    margin-left: 33vw;
`

export default ({ children }) => (
    <BoxFormLogin> 
        { children }
    </BoxFormLogin>
)