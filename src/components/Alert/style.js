import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Alert = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    background: ${({danger}) => danger ? colors.danger.bg : colors.success.bg };
    color: ${({danger}) => danger ? colors.danger.text : colors.success.text };
    border: 1px solid ${({danger}) => danger ? colors.danger.text : colors.success.text };
`
