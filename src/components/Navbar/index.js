import React from 'react'
import {Link, useHistory, useLocation } from 'react-router-dom'
import {routes} from '@/components/Router'
import useWallet from '@/hooks/useWallet'
import {Navbar, Logo, Pages, Page, Wallet, Coin} from './style'

export default () => {

    const history = useHistory()
    const location = useLocation()
    const {wallet} = useWallet()
    const openRoutes = routes.filter(route => route.hidden !== true) 

    const isHome = () => location.pathname === '/'
    const logout = () => history.push('/')

    if(isHome()) return <></>

    return (
        <Navbar>
            <Pages>
                <Page>
                    <Link to='/dashboard/products'>
                        <Logo>WALLET</Logo>
                    </Link>
                </Page>

                {openRoutes.map((route, index) => 
                    <Page key={index}>
                        <Link to={route.path}>
                            {route.name}
                        </Link>
                    </Page>
                )}

                <Page onClick={() => logout()}>
                    Sair
                </Page>
            </Pages>
            <Wallet>
                Cashback
                <Coin>{wallet}</Coin>
            </Wallet>
        </Navbar>
    )
}
