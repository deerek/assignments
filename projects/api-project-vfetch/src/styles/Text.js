import styled from 'styled-components';

export const H1 = styled.h1`
    color: aqua;
    padding 50px;
`

const H6 = styled.h6`
    padding: 3px;
    border-radius: 24px;
    height: 50px;
    background-color: red;
`

const CoolButton = H6.extend`
    background: linear
`