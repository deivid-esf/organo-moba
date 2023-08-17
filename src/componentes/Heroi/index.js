import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Heroi.css"

const Heroi = ({heroi, cor, aoDeletar, aoFavoritar}) => {

  function favoritar(){
    aoFavoritar(heroi.id)
  }
  const propsfavoritos = {
    size: 30,
    color: "#ff0000",
    onClick: favoritar
  }
  return (
    <div className="heroi">
      <AiFillCloseCircle
        size={30}
        className="deletar"
        onClick={() => aoDeletar(heroi.id)}
      />
      <div className="cabecalho" style={{backgroundColor: cor}}>
        <img src={heroi.imagem} alt={heroi.alt} style={{backgroundColor: cor}}/>
      </div>
      <div className="rodape">
        <h4>{heroi.nome}</h4>
        <h5>{heroi.funcao}</h5>
        <div className="favoritar">
          {heroi.favorito
            ? <AiFillHeart {...propsfavoritos} />
            : <AiOutlineHeart {...propsfavoritos} /> }
        </div>
      </div>

    </div>
  )
}

export default Heroi