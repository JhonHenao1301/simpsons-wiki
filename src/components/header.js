
import styled from 'styled-components'
import Search from './search'

const HeaderStyled = styled.header`
    border: 1px solid red;
    padding-inline: 2rem;
    a {
        display: flex;
        align-items: center;
        font: var(--headline-1);
        gap: .5rem;
    }
    a:hover {
        font-size: 1.75rem;
        color: var(--yellow-10);
        transition: all .3s ease;
    }

`

function Header() {
    return (
        <HeaderStyled>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand " href="#home">
                        <img src="/rosquilla.png" alt="Donnut" width={24} height={24} />
                        Simpsons App
                    </a>
                    <Search />
                </div>
            </nav>
            
        </HeaderStyled>
    )
}

export default Header
