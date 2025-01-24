import React, { useState } from "react";
import "../styles/Header.css"; // Importando o arquivo de estilos

const Header = ({ setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Função para fechar o menu ao clicar em um link
  const closeMenu = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav id="nav">
        <div className="nav-center">
          {/* Cabeçalho da navegação */}
          <div className="nav-header">
            <img src="../images/libras.jpeg" alt="logo" className="logo" />
            {/* Botão hambúrguer */}
            <button className="nav-toggle" onClick={toggleMenu}>
              ☰
            </button>
          </div>

          {/* Links de navegação */}
          <div className={`links-container ${isMenuOpen ? "show-links" : ""}`}>
            <ul className="links">
              <li>
                <button
                  className="scroll-link"
                  onClick={() => closeMenu("home")}
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => closeMenu("translator")}
                >
                  Tradutor
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => closeMenu("alphabet")}
                >
                  Alfabeto
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => closeMenu("signDictionary")}
                >
                  Dicionário
                </button>
              </li>
              <li>
                <button
                  className="scroll-link"
                  onClick={() => closeMenu("team")}
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
