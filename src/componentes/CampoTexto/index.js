import './CampoTexto.css'
const CampoTexto = (props) => {
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label> {/* retorna os valores no app, precisa das chaves. */}
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto

