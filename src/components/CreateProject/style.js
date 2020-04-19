import styled from 'styled-components'

export const Center = styled.div`
    display: flex;
    justify-content: center;
`

export const Debug = styled.div`
    display: flex;
    margin-top: 5px;
    div {
        cursor: pointer;
        margin-bottom: 10px;
        margin-right: 10px;
        &:last-child {
            margin-right: 0;
            margin-bottom: 0;
        }
    }
`

export const DebugMessage = styled.div`
    font-size: 14px;
    padding: 10px 0;
`

export const Form = styled.div`
    grid-area: main;
    box-sizing: border-box;
    padding: 20px;
    width: 60%;
`
