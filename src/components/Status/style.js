import styled from 'styled-components'
import {colors} from '@/services/styledVariables'

export const Status = styled.div`
    border-radius: 4px;
    padding: 2px 5px;
    font-size: 12px;
    border-style: solid;
    border-width: 1px;
    align-items: center;
    display: flex;
    height: 16px;
    opacity: ${({active}) => active ? '1' : '.5'};
    ${({children}) => {
        let style
        switch (children) {
            case 'Reprovado':
                style = `
                    background: ${colors.danger.bg};
                    border-color: ${colors.danger.text};
                    color: ${colors.danger.text};
                `
                break;
            case 'Em validação':
                style = `
                    background: ${colors.support.bg};
                    border-color: ${colors.support.text};
                    color: ${colors.support.text};
                `
                break;
            case 'Aprovado':
                style = `
                    background: ${colors.success.bg};
                    border-color: ${colors.success.text};
                    color: ${colors.success.text};
                `
                break;
            default:
                style = `
                    background: ${colors.support.bg};
                    border-color: ${colors.support.text};
                    color: ${colors.support.text};
                `
        }
        return style
    }}
`
