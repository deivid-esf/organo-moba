import "./Campo.css"

const Campo = ( { type = "text", valor, label, required, placeholder, aoAlterado }) => {

  const aoDigitado = (e) => {
    aoAlterado(e.target.value)
  }
  
  return(
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input type={type} value={valor} onChange={aoDigitado} required={required} placeholder={placeholder}/>
    </div>
  )
}

export default Campo