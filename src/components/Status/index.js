import React from 'react'
import { Status } from './style'

export default ({value, active=true, onClick=() => {}}) => (
    <Status 
        active={active}
        onClick={() => onClick()}
    >
        {value}
    </Status>
) 
