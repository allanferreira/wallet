import React from 'react'
import Status from '@/components/Status'
import currency from '@/services/currency'
import {
    Product,
    Code,
    Header,
    Main,
    Name,
    StatusArea,
    Date,
    Price,
    Cashback,
    Details,
} from './style'

export default ({
    name,
    value, 
    code, 
    date, 
    cashbackPercentage,
    status,
}) => {
    
    const price = () => currency(value).format()
    const percentage = () => cashbackPercentage + '%'
    const percentageCurrency = () => currency(value/cashbackPercentage).format()
    const cashbackIsVisible = () => status === 'Aprovado'

    return (
        <Product>
            <Header>
                <Name>{name} - {price()}</Name>
                <StatusArea>
                    <Status value={status}/>
                </StatusArea>
            </Header>
            <Main visible={cashbackIsVisible()}>
                <Cashback>
                    Cashback de {percentage()}  
                    <Price>
                        ({percentageCurrency()})
                    </Price>
                </Cashback>
            </Main>
            <Details>
                <Code>COD: {code}</Code>
                <Date>{date}</Date>
            </Details>
        </Product>
    )
}
