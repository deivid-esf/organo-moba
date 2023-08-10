import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const lanes = [
    {
      nome: "Top Lane",
      corPrincipal: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Mid Lane",
      corPrincipal: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Bot Lane",
      corPrincipal: "#FFBA29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Jungle",
      corPrincipal: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Rotação",
      corPrincipal: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
  ];

  const [herois, setHerois] = useState([]);

  const novoHeroiAdicionado = (heroi) => {
    debugger
    setHerois([...herois, heroi]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        lanes={lanes.map((lane) => lane.nome)}
        heroiCadastrado={novoHeroiAdicionado}
      />
      {lanes.map((lane) => (
        <Time
          key={lane.nome}
          titulo={lane.nome}
          corPrincipal={lane.corPrincipal}
          corSecundaria={lane.corSecundaria}
          herois={herois.filter(heroi => heroi.lane === lane.nome)}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
