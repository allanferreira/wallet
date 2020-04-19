import React from 'react'
import Login from './Login'
import Register from './Register'
import { Container, Form } from './style'

export default () => (
    <Container>
        <Form>
            <Login/>
            <Register/>
        </Form>
    </Container>
)
