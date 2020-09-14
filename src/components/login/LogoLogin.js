import React from 'react'
import styled from 'styled-components'

import logo from '../../assets/images/logo.png'

const Logo = styled.img `
    display: block;
    width: 200px;
    margin-left: auto;
    margin-right: auto;

` 

export default () => <Logo src={logo} />