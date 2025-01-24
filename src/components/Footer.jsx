import React from "react";
import "C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/styles/Footer.css"; // Importando o CSS

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logotipo da UFF */}
      <img
        src="C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/images/logo uff branco.svg"
        alt="Logotipo da UFF"
        className="footer-logo"
      />
      {/* Texto do Copyright */}
      <p>
        Copyright &copy; Engenharia Mecânica - UFF{" "}
        <span id="date">2025.</span> All rights reserved.
      </p>
      {/* Logotipo da Engenharia */}
      <img
        src="C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/images/logo engenharia.png"
        alt="Logotipo da Engenharia"
        className="footer-logo"
      />
    </footer>
  );
};

export default Footer;