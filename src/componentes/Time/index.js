import Heroi from "../Heroi";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({time, herois, aoDeletar, mudarCor, aoFavoritar}) => {


  return (
    herois.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(time.cor, '.6') }}
      >
        <input
          type="color"
          className="input-color"
          value={time.cor}
          onChange={e => mudarCor(e.target.value, time.id)}
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="herois">
          {herois.map((heroi, indice) => {
            return (
              <Heroi
                key={indice}
                heroi={heroi}
                cor={time.cor}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
