import React, {useState, useEffect} from 'react'
import useProducts from '@/hooks/useProducts'
import useWallet from '@/hooks/useWallet'
import {Center, Form, Debug, DebugMessage} from './style'
import Status from '@/components/Status'
import Title from '@/components/Title'
import InputText from '@/components/InputText'
import Alert from '@/components/Alert'
import Button from '@/components/Button'

export default () => {

    const {addWallet} = useWallet()
    const {products,addProduct} = useProducts()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [form, setForm] = useState({
        code: '',
        name: '',
        status: 'Em validação',
        date: '',
        value: '',
    })
    
    const cleanForm = () => {
        setForm({
            code: '',
            name: '',
            status: 'Em validação',
            date: '',
            value: '',
        })
    }

    const changeInput = (type, value) => {
        setError(false)
        setSuccess(false)
        setForm({
            ...form,
            [type]: value,
        })
    }

    const send = () => {
        
        setError(false)
        setSuccess(false)

        const hasEmptyField = 
            !form.code || !form.name || !form.status || !form.date || !form.value

        if(hasEmptyField) {
            setError(true)
        } else {
            setSuccess(true)
            
            addProduct({
                ...form,
                cashbackPercentage: 10, 
            })

            cleanForm()
        }
    }
    
    useEffect(() => {
        if(products.length === 0) return
        addWallet()
    }, [products])

    return (
        <Center>
            <Form>
                <Title text='Cadastre seu produto'/>

                { error &&
                    <Alert text='Não deixe campos em branco!' danger/>
                }

                { success &&
                    <Alert text='Produto cadastrado com sucesso!'/>
                }

                <InputText
                    label='Código'
                    value={form.code}
                    onChange={e => changeInput('code', e.target.value)}
                />

                <InputText
                    label='Nome do produto'
                    value={form.name}
                    onChange={e => changeInput('name', e.target.value)}
                />

                <InputText
                    label='Data de compra'
                    type='date'
                    value={form.date}
                    onChange={e => changeInput('date', e.target.value)}
                />

                <InputText
                    label='Valor'
                    value={form.value}
                    type='number'
                    step='.01'
                    onChange={e => changeInput('value', e.target.value)}
                />

                <DebugMessage>
                    Marque uma opção para fins de debug do status:
                    <Debug>
                        <Status 
                            active={form.status === 'Em validação'} 
                            value='Em validação'
                            onClick={() => setForm({...form, status: 'Em validação'})}
                        />

                        <Status 
                            active={form.status === 'Aprovado'} 
                            value='Aprovado'
                            onClick={() => setForm({...form, status: 'Aprovado'})}
                        />

                        <Status 
                            active={form.status === 'Reprovado'} 
                            value='Reprovado'
                            onClick={() => setForm({...form, status: 'Reprovado'})}
                        />
                    </Debug>
                </DebugMessage>

                <Button onClick={() => send()} text='Cadastrar produto'/>
            </Form>
        </Center>
    )
}
