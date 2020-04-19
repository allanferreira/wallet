import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Title from '@/components/Title'
import InputText from '@/components/InputText'
import Alert from '@/components/Alert'
import Button from '@/components/Button'
import { Register } from './style'

export default () => {

    const dispatch = useDispatch()
    const formLogin = useSelector(state => state.formLogin)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [form, setForm] = useState({
        name: '',
        cpf: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const register = () => {
        
        setError(false)
        const hasEmptyField = 
            !form.name || !form.cpf || !form.email || !form.password || !form.confirmPassword

        if(hasEmptyField) {
            setError(true)
        } else {
            setSuccess(true)
            cleanForm()
        }
    }
    
    const cleanForm = () => {
        setForm({
            name: '',
            cpf: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    const changeInput = (type, value) => {
        setError(false)
        setForm({
            ...form,
            [type]: value,
        })
    }

    const backToLogin = () => {
        dispatch({
            type: '@formLogin/SET',
            value: true,
        })
    }

    return (
        <Register formLogin={formLogin}>
            <Title text='Registrar'/>

            { error &&
                <Alert text='Não deixe campos em branco!' danger/>
            }

            { success &&
                <Alert text='Cadastrado com sucesso!'/>
            }

            <InputText 
                label='Nome completo'
                value={form.name}
                onChange={e => changeInput('name', e.target.value)}
            />

            <InputText 
                label='CPF'
                value={form.cpf}
                onChange={e => changeInput('cpf', e.target.value)}
            />
            
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

            <InputText 
                label='Confirmar senha' 
                value={form.confirmPassword}
                onChange={e => changeInput('confirmPassword', e.target.value)}
                type="password"
            />

            <Button onClick={() => register()} text='Registrar'/>
            <Button onClick={() => backToLogin()} text='Voltar para o login'/>
        </Register>
    )
}
