import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import Title from '@/components/Title'
import InputText from '@/components/InputText'
import Alert from '@/components/Alert'
import Button from '@/components/Button'
import { Login } from './style'

export default () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const formLogin = useSelector(state => state.formLogin)
    const [error, setError] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const login = () => {
        
        setError(false)
        const hasEmptyField = !form.email || !form.password

        hasEmptyField
            ? setError(true)
            : history.push('/dashboard/products')

    }

    const changeInput = (type, value) => {
        setError(false)
        setForm({
            ...form,
            [type]: value,
        })
    }

    const goToRegister = () => {
        dispatch({
            type: '@formLogin/SET',
            value: false,
        })
    }

    return (
        <Login formLogin={formLogin}>
            <Title text='Entrar'/>

            { error &&
                <Alert text='Não deixe campos em branco!' danger/>
            }

            <InputText 
                label='Email'
                value={form.email}
                onChange={e => changeInput('email', e.target.value)}
            />
            
            <InputText 
                label='Senha' 
                value={form.password}
                onChange={e => changeInput('password', e.target.value)}
                type="password"
            />
            
            <Button onClick={() => login()} text='Entrar'/>
            <Button onClick={() => goToRegister()} text='Registrar-se'/>
        </Login>
    )
}
