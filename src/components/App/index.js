import React from 'react'
import {App} from './style'
import Store from '@/components/Store'
import Router from '@/components/Router'
import Navbar from '@/components/Navbar'

export default () => (
    <Store>
        <App>
            <Router>
                <Navbar/>
            </Router>
        </App>
    </Store>
)
