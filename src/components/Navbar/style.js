import styled from 'styled-components'
import {colors} from '@/services/styledVariables'

export const Navbar = styled.div`
    border-bottom: 1px solid ${colors.support.bg};
    grid-area: navbar;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const Logo = styled.div`
    font-weight: 800;
    font-size: 20px;
    color: ${colors.main};
`

export const Pages = styled.ul`
    display: flex;
    align-items: center;
`

export const Page = styled.li`
    padding: 20px;
    cursor: pointer;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
`

export const Wallet = styled.div`
    font-size: 12px;
    text-align: right;
    color: ${colors.main};
`

export const Coin = styled.div`
    font-size: 20px;
    font-weight: bold;
`
