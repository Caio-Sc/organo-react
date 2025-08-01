import Card from '../Card';
import './Time.css';

export const Time = (props) => {
    return(
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Card key={colaborador.nome} colaborador={colaborador} corPrimaria={props.corPrimaria} corSecundaria={props.corSecundaria}/>)}
            </div>
        </section>
    )
}

