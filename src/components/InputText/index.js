import React from 'react'
import { Input } from './style'

export default ({label, step, onChange=() => {}, value='', type='text'}) => {
    return (
        <Input 
            placeholder={label} 
            type={type}
            value={value}
            step={step}
            onChange={e => onChange(e)}
        />
    )
}
