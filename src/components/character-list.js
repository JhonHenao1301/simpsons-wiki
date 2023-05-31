
import styled from 'styled-components'
import Character from './character'

const CharacterListStyled = styled.div`
    /* border: 1px solid red; */
    grid-area: characterList;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 14rem));;
    column-gap: 1rem;
    row-gap: 1.5rem;
`

function CharacterList({ docs }) {
    let list = docs
    if(!list || list.length === 0) return <div className='alert alert-primary' role='alert'>No characters found</div>

    return (
        <CharacterListStyled>
            { 
                list?.map((item) =>{
                    return <Character {...item} key={item._id} />
                })
            }
        </CharacterListStyled>
    )
}

export default CharacterList
