import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [heroi, setHeroi] = useState("");
  const [funcao, setFuncao] = useState("");
  const [imagem, setImagem] = useState("");
  const [lane, setLane] = useState("");
  const [nomeLane, setNomeLane] = useState("");
  const [corLane, setCorLane] = useState("");

  const adicionarHeroi = (e) => {
    e.preventDefault();
    props.heroiCadastrado({
      heroi,
      funcao,
      imagem,
      lane,
    });
    setHeroi('')
    setFuncao('')
    setImagem('')
    setLane('')
  };

  const adicionarLane = (e) => {
    e.preventDefault();
    props.cadastrarLane({
      nome: nomeLane,
      cor: corLane
    })
    setNomeLane('')
    setCorLane('')
  }
  return (
    <section className="formulario">
      <form onSubmit={adicionarHeroi}>
        <h2>Preencha os dados para criar o card do herói</h2>
        <Campo
          required={true}
          label="Nome"
          placeholder="Digite o nome do herói"
          valor={heroi}
          aoAlterado={(valor) => setHeroi(valor)}
        />
        <Campo
          required={true}
          label="Função"
          placeholder="Digite a função do herói"
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <Campo
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Lane"
          itens={props.lanes}
          valor={lane}
          aoAlterado={(valor) => setLane(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
      <form onSubmit={adicionarLane}>
        <h2>Preencha os dados para criar uma lane nova</h2>
        <Campo
          required
          label="Nome"
          placeholder="Digite o nome da lane"
          valor={nomeLane}
          aoAlterado={(valor) => setNomeLane(valor)}
        />
        <Campo
          type="color"
          valor={corLane}
          aoAlterado={(valor) => setCorLane(valor)}
        />

        <Botao>Criar time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
