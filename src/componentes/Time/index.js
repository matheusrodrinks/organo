import './Time.css'

const Time = (props) => {
    return (

    //const css= {backgroundColor: props.corSecundaria} e aí botar a const css dentro de style
    //const cssTitulo = {borderColor: props.corPrimaria} bota a const dentro de style do h3

    <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time



