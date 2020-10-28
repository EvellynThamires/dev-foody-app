import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/background-hall.jpg';

const BackgroundHall= styled.div `
  background-color: turquoise;
  width: 40%;
`

export default ({ children }) => (
  <BackgroundHall>
    { children }
  </BackgroundHall>
)