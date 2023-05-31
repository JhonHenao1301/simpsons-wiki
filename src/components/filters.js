
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Selector from './selector'

const FiltersStyled = styled.div`
    grid-area: filters;
`

function Filters({ setStatus, setGender }) {
    return (
        <FiltersStyled>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>State</Accordion.Header>
                        <Accordion.Body>
                            <Selector className="form-select form-select-lg" aria-label=".form-select-lg example" defaultValue="" setStatus={setStatus}>
                                <option value="">All</option>
                                <option value="vivo">Vivo</option>
                                <option value="fallecido">Fallecido</option>
                                <option value="desconocido">Desconocido</option>
                                <option value="ficticio">Ficticio</option>
                                <option value="divino">Divino</option>
                            </Selector>
                        </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Gender</Accordion.Header>
                    <Accordion.Body>
                        <Selector className="form-select form-select-lg" aria-label=".form-select-lg example" defaultValue="" setGender={setGender}>
                            <option value="">All</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </Selector>
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
