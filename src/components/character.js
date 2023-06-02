
import styled from 'styled-components'

const CharacterStyled = styled.div`
    display: flex;
    border: 2px solid var(--primary);
    border-radius: .5rem;
    block-size: 32rem;
    .card {
        inline-size: 100%;
        padding-block: 1rem;
    }
    .card-img-top {
        text-align: center;
        inline-size: auto;
        block-size: 20rem;
    }
    .card-body {
        flex: 1;
        padding: 1.5rem 1rem 0 1rem ;
    }
`

function Character(props) {
    return (
        <CharacterStyled>
            <div className="card">
                <img className="card-img-top" src={props.Imagen} alt=" footage card" />
                <div className="card-body">
                    <h4 className="card-title">{props.Nombre}</h4>
                    <p>{props.Estado}</p>
                    <p>{props.Genero}</p>
                </div>
            </div>
        </CharacterStyled>
    )
}

export default Character
