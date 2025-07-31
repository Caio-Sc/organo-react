import './Card.css'

export const Card = (props) =>{
    return(
        <div className='card'>
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
                <img src={props.colaborador.imagem} alt={"Empregado " + props.colaborador.nome}/>
            </div>
            <div className='rodape'>
                <h4>
                    {props.colaborador.nome}
                </h4>
                <h5>
                    {props.colaborador.cargo}
                </h5>
            </div>
        </div>
    )
}
