

import styled from 'styled-components'

const SelectorStyled = styled.select`
    border: 1px solid var(--grey-20);
    border-radius: .5rem;
    padding-inline: 1rem;
    block-size: 2.5rem;
    flex: 1;
`

function Selector({children, setStatus, setGender}) {
    
    function handleStatus(e) {
        if(setStatus) {
            setStatus(e.target.value)
        }
        if(setGender) {
            setGender(e.target.value)
        }
    }
    return (
        <SelectorStyled onChange={handleStatus}>
            {children}
        </SelectorStyled>
    )
}

export default Selector
