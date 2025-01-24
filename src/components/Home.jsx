import React from "react";
import "../styles/Home.css"; // Estilo para a tab inicial

const Home = ({ setActiveTab }) => {
  return (
    <div className="home">
      <h2>Bem-vindo ao nosso trabalho!</h2>
      <p>
        Este site foi desenvolvido para auxiliar na comunicação com a linguagem de
        sinais. Aqui você pode:
      </p>
      <ul className="home-list">
        <li>
          <button
            className="home-button"
            onClick={() => setActiveTab("translator")}
          >
            Traduzir texto para sinais em Libras
          </button>
        </li>
        <li>
          <button
            className="home-button"
            onClick={() => setActiveTab("alphabet")}
          >
            Aprender o alfabeto em Libras
          </button>
        </li>
        <li>
          <button
            className="home-button"
            onClick={() => setActiveTab("signDictionary")}
          >
            Consultar um dicionário de sinais
          </button>
        </li>
        <li>
          <button
            className="home-button"
            onClick={() => setActiveTab("team")}
          >
            Conhecer nossa equipe
          </button>
        </li>
      </ul>
      <p>
        Navegue pelas diferentes abas para explorar as funcionalidades!
      </p>
      <p>
        É importante salientar que, embora o site tenha sido desenvolvido com o intuito de auxiliar na comunicação com a linguagem de sinais, ele não substitui a aprendizagem da língua de sinais com um profissional qualificado. Para aprender Libras, procure um curso presencial ou online com professores especializados. <br />Além disso, ele continua em desenvolvimento, então pode conter erros e bugs.
      </p>
    </div>
  );
};

export default Home;

