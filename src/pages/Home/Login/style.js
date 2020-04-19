import styled from 'styled-components'

export const Login = styled.form`
    display: ${({formLogin}) => formLogin ? 'block': 'none'};
`
