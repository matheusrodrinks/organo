import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {
    return (

    //const css= {backgroundColor: props.corSecundaria} e aí botar a const css dentro de style
    //const cssTitulo = {borderColor: props.corPrimaria} bota a const dentro de style do h3

    (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
      
    )
}

export default Time



