import styled from 'styled-components'
import {colors} from '@/services/styledVariables'

export const Products = styled.ul`
    grid-area: products;
    overflow-y: scroll;
    box-sizing: border-box;
    border-right: 1px solid ${colors.support.bg};
`
