
import styled from 'styled-components'

const CharacterListStyled = styled.div`
    grid-area: characterList;
    border: 1px solid red;
`

function CharacterList() {
    return (
        <CharacterListStyled>
            CharacterList
        </CharacterListStyled>
    )
}

export default CharacterList
