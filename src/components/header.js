
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './search'

const HeaderStyled = styled.header`

    .container {
        max-width: 100%;
    }

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

function Header({ setSearch }) {
    return (
        <HeaderStyled>
            <Navbar bg="light" expand="md">
                <Container className='container m-0 p-0 px-4'>
                    <Navbar.Brand href="#home">
                        <img src="/rosquilla.png" alt="Donnut" width={24} height={24} />
                        Simpsons App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="">
                            <Nav.Link href="#home">
                                <Search setSearch={setSearch} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </HeaderStyled>
    )
}

export default Header
