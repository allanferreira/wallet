import React from 'react'
import { Button } from './style'

export default ({text, onClick=() => {}}) => (
    <Button onClick={()=> onClick()}>
        {text}
    </Button>
) 
