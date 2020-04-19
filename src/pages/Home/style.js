import styled from 'styled-components'
import {colors} from '@/services/styledVariables'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    border-right: 1px solid ${colors.support.bg}; 
`
export const Form = styled.div`
    padding: 40px;
    box-sizing: border-box;
`
