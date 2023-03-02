import './CampoTexto.css'
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    let valor = 'Neymar Junior'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label> {/* retorna os valores no app, precisa das chaves. */}
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto

