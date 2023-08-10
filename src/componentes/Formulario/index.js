import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [funcao, setFuncao] = useState("");
  const [imagem, setImagem] = useState("");
  const [lane, setLane] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    props.heroiCadastrado({
      nome,
      funcao,
      imagem,
      lane,
    });
    setNome('')
    setFuncao('')
    setImagem('')
    setLane('')
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do herói</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite o nome do herói"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Função"
          placeholder="Digite a função do herói"
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <CampoTexto
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
    </section>
  );
};

export default Formulario;
