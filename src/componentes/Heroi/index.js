import "./Heroi.css"

const Heroi = ({nome, funcao, imagem, alt, corPrincipal}) => {
  return (
    <div className="heroi">
      <div className="cabecalho" style={{backgroundColor: corPrincipal}}>
        <img src={imagem} alt={alt}/>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{funcao}</h5>
      </div>

    </div>
  )
}

export default Heroi