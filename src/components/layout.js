
import styled from 'styled-components'

const LayoutStyled = styled.div`
    display: grid;
    grid-template-areas: 'filters filters' 'characterList characterList';
    min-block-size: 100vh;
    margin: 0;
    padding-inline: 2rem;
    margin-block-start: 2rem;
    margin-block-end: 1rem;
    gap: 1rem;

    @media screen and (min-width: 1060px) {
        padding-inline: 2rem;
        display: grid;
        grid-template-areas: 'filters characterList';
        grid-template-columns: 278px 1fr;
    }
`

function Layout({children}) {
    return (
        <LayoutStyled>
            { children }
        </LayoutStyled>
    )
}

export default Layout
