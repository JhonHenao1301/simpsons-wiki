
import styled from 'styled-components'

const SearchStyled = styled.div`
`

function Search({ setSearch, setLimit, totalDocs }) {
    function handleInputChange(event) {
        let search = event.target.value.toLowerCase()
        if(search) {
            setLimit(totalDocs)
            setSearch(search)
        }
            else { 
                setLimit(12)
                setSearch('') 
            }
    }

    return (
        <SearchStyled>
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search the character" aria-label="Search" onChange={handleInputChange}/>
                    <button className="btn btn-outline-light" type="submit">
                        <img src="/search.svg" alt="Search" width={20} height={20} />
                    </button>
                </form>
            </div>
        </SearchStyled>
    )
}

export default Search
