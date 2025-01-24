import React from "react";
import "../styles/Footer.css"; // Importando o CSS

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logotipo da UFF */}
      <img
        src="/images/uff.svg"
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
        src="/images/engenharia.png"
        alt="Logotipo da Engenharia"
        className="footer-logo"
      />
    </footer>
  );
};

export default Footer;