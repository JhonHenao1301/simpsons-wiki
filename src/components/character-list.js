
import styled from 'styled-components'
import Character from './character'

const CharacterListStyled = styled.div`
    grid-area: characterList;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 14rem));
    column-gap: 1rem;
    row-gap: 1.5rem;
`

function CharacterList({ docs, status, gender, search }) {
    let list = docs
    if(!list || list.length === 0) return <div className='alert alert-primary' role='alert'>No characters found</div>

    // Function to filter by Status
    if (status !== "") {
        list = list.filter((item) => {
          if (item.Estado) {
            return item.Estado.toLowerCase() === status;
          }
          return null
        })
    }

    // Function to filter by Status
    if (gender !== "") {
        list = list.filter((item) => {
          if (item.Genero) {
            return item.Genero.toLowerCase() === gender;
          }
          return null
        })
    }

    // Function to filter by Species
    // if (species !== "") {
    //     list = list.filter((item) => {
    //       if (item.species) {
    //         return item.species.toLowerCase() === species;
    //       }
    //       return null
    //     })
    // }

    //Functions to find the character by his name
    if(search !== '') {
        list = list.filter((item) => {
            return item.Nombre.toLowerCase().search(search) >= 0
        })
    }

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
