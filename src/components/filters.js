
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'

const FiltersStyled = styled.div`
    grid-area: filters;

    @media screen and (min-width: 762px) {
        
    }
`

function Filters() {
    return (
        <FiltersStyled>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>State</Accordion.Header>
                        <Accordion.Body>
                            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                <label className="btn btn-outline-primary" for="btncheck1">Alive</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                <label className="btn btn-outline-primary" for="btncheck2">Dead</label>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Gender</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                        <label className="btn btn-outline-primary" for="btncheck1">Male</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-outline-primary" for="btncheck2">Female</label>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Ocupation</Accordion.Header>
                    <Accordion.Body>
                        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                        <label className="btn btn-outline-primary" for="btncheck1">Male</label>

                        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                        <label className="btn btn-outline-primary" for="btncheck2">Female</label>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </FiltersStyled>
    )
}

export default Filters
