import React from 'react'
import { Alert } from './style'

export default ({text, danger=false}) => <Alert danger={danger}>{text}</Alert>
