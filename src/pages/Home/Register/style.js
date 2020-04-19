import styled from 'styled-components'

export const Register = styled.form`
    display: ${({formLogin}) => formLogin ? 'none': 'block'};
`
