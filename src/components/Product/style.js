import styled from 'styled-components'
import {colors} from '@/services/styledVariables'

export const Product = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${colors.support.bg};
    line-height: 1.2;
    &:last-child {
        border: 0;
    }
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed ${colors.gray1};
    padding: 10px 0;
    `

export const Header = styled.div`
    display: flex;
    border-bottom: 1px dashed ${colors.gray1};
    padding: 10px 0;
`

export const Main = styled.div`
    padding: 10px 0;
    display: ${({visible}) => visible ? 'block' : 'none'};
`

export const Name = styled.div`
    font-weight: bold;
`

export const StatusArea = styled.div`
    padding-left: 10px;
    display: flex;
    justify-content: flex-end;
    width: 160px;
`

export const Code = styled.div`
`

export const Date = styled.div`
`

export const Price = styled.span`
    font-weight: bold;
    color: ${colors.main};
    display: inline-block;
    margin-left: 5px;
`

export const Cashback = styled.div`
`
