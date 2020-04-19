import styled from 'styled-components'

export const App = styled.div`
    display: grid;
    grid-template-rows: 60px auto;
    grid-template-columns: 400px auto;
    grid-template-areas: 'navbar navbar' 'products main';
    height: 100vh; 
`
