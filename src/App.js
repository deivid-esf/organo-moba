import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from 'uuid'


function App() {
  
  const [lanes, setLanes] = useState([
    {
      id: uuidv4(),
      nome: "Top Lane",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Mid Lane",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Bot Lane",
      cor: "#FFBA29",
    },
    {
      id: uuidv4(),
      nome: "Jungle",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Rotação",
      cor: "#82CFFA",
    },
  ]);

  const [herois, setHerois] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: "Miya",
      funcao: "Atiradora/DPS",
      imagem: "https://pm1.aminoapps.com/7149/b1e80333fd873ab3578bb646832b801be40dbd5dr1-450-462v2_00.jpg",
      lane: lanes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Melissa",
      funcao: "Atiradora/DPS",
      imagem: "https://i.pinimg.com/736x/9c/e7/93/9ce793b96608ebb8d7d326a1ee9a8906.jpg",
      lane: lanes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Wanwan",
      funcao: "Atiradora/DPS",
      imagem: "https://i.pinimg.com/1200x/7a/da/88/7ada88140f5b765f883a4d33a8e7104c.jpg",
      lane: lanes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Vexana",
      funcao: "Maga/explosão",
      imagem: "https://i.pinimg.com/236x/61/74/03/617403f568efc7b7061fd68186b5ce82.jpg",
      lane: lanes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nana",
      funcao: "Maga/poker",
      imagem: "https://i.pinimg.com/originals/4e/3d/b0/4e3db0560d2f50b779252cfe0dce39cd.jpg",
      lane: lanes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Cecilion",
      funcao: "Mago/explosão",
      imagem: "https://evos.gg/images/articles/TWScL3CoCU7xlZggxwpyzVmVlFqbmzS2JgeCKlhR.jpg",
      lane: lanes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Freya",
      funcao: "Soldado",
      imagem: "https://e1.pxfuel.com/desktop-wallpaper/79/305/desktop-wallpaper-mobile-legends-freya-build-e-dicas-freya-ml.jpg",
      lane: lanes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Chou",
      funcao: "Soldado",
      imagem: "https://w0.peakpx.com/wallpaper/7/962/HD-wallpaper-chou-mlbb-fighter-gaming-hero-legend-legends-ml-moba-mobile.jpg",
      lane: lanes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Esmeralda",
      funcao: "Soldado/tank",
      imagem: "https://pm1.aminoapps.com/7164/ea162824605f4f0ccc9cc69602261bcddf101342r1-415-739v2_hq.jpg",
      lane: lanes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Yin",
      funcao: "Assassino",
      imagem: "https://e1.pxfuel.com/desktop-wallpaper/214/92/desktop-wallpaper-pin-on-%E2%86%AC-m-o-b-i-l-e-l-e-g-e-n-d-s-%E2%9D%80-yin-mobile-legends-thumbnail.jpg",
      lane: lanes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Helcurt",
      funcao: "Assassino",
      imagem: "https://pm1.aminoapps.com/6786/5943d5463fb10b05e1e5594196bc199d7c2a293dv2_hq.jpg",
      lane: lanes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Harley",
      funcao: "Assassino/mago",
      imagem: "https://i.pinimg.com/originals/f4/d0/80/f4d0807183d244de86bccdb84fc14152.jpg",
      lane: lanes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Diggie",
      funcao: "Suporte/poker",
      imagem: "https://i.pinimg.com/originals/37/37/6f/37376fbaa81aebc49c981427e2d318ea.jpgpm",
      lane: lanes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Carmilla",
      funcao: "Suporte/tank",
      imagem: "https://i.pinimg.com/474x/05/79/a1/0579a15bf4bf82dae2e647393efd291c.jpg",
      lane: lanes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Estes",
      funcao: "Healer/suporte",
      imagem: "https://pbs.twimg.com/media/EXvCD0LWsAEnAEo.png",
      lane: lanes[4].nome
    }
  ]);

  function deletarHeroi(id) {
    setHerois(herois.filter(heroi => heroi.id !== id))
  }
  
  function mudarCor(cor, id) {
    setLanes(lanes.map(lane => {
      if(lane.id === id) {
        lane.cor = cor
      }
      return lane
    }))
  }

  function cadastrarLane(novaLane) {
    setLanes([...lanes, { ...novaLane, id: uuidv4() } ])
  }

  function novoHeroiAdicionado(heroi) {
    setHerois([...herois, heroi ]);
  };

  function resolverFavorito(id) {
    setHerois( herois.map ( heroi => {
      if(heroi.id === id) heroi.favorito = !heroi.favorito;
      console.log(heroi)
      return heroi
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarLane={cadastrarLane}
        lanes={lanes.map((lane) => lane.nome)}
        heroiCadastrado={novoHeroiAdicionado}
      />
      {lanes.map((lane) => (
        <Time
          mudarCor={mudarCor}
          id={uuidv4()}
          key={lane.nome}
          time={lane}
          herois={herois.filter(heroi => heroi.lane === lane.nome)}
          aoDeletar={deletarHeroi}
          aoFavoritar={resolverFavorito}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
