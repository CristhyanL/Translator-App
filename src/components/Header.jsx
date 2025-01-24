import React from "react";
import "C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/styles/Header.css"; // Importando o arquivo de estilos

const Header = ({ setActiveTab }) => {
  return (
    <header className="header">
      <nav id="nav">
        <div className="nav-center">
          {/* Cabeçalho da navegação */}
          <div className="nav-header">
              <img src="../public\images\libras.jpeg" alt="logo" className="logo" />
          </div>

          {/* Links de navegação */}
          <div className="links-container">
            <ul className="links">
              <li>
                <button
                  className="scroll-link"
                  onClick={() => setActiveTab("home")}
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => setActiveTab("translator")}
                >
                  Tradutor
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => setActiveTab("alphabet")}
                >
                  Alfabeto
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => setActiveTab("signDictionary")}
                >
                  Dicionário
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => setActiveTab("team")}
                >
                  Equipe
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
