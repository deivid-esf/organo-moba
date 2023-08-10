import Heroi from "../Heroi";
import "./Time.css";

const Time = (props) => {
  return (
     props.herois.length > 0 && <section className="time" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrincipal }}>{props.titulo}</h3>
      <div className="herois">
        {props.herois.map((heroi) => (
          <Heroi
          key={heroi.nome}
          nome={heroi.nome}
          funcao={heroi.funcao}
          imagem={heroi.imagem}
          alt={props.nome} 
          corPrincipal={props.corPrincipal}
          />
          ))}
      </div>
    </section>
  );
};

export default Time;
