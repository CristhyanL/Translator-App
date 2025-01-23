import React, { useState } from "react";
import "../styles/Translator.css"; // Importando o arquivo CSS

// Função para remover acentos das letras
const removeAccents = (str) => {
  const accents = {
    á: "A",
    à: "A",
    ã: "A",
    â: "A",
    é: "E",
    è: "E",
    ê: "E",
    í: "I",
    ì: "I",
    ó: "O",
    ò: "O",
    õ: "O",
    ô: "O",
    ú: "U",
    ù: "U",
    ç: "C",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    Ç: "C",
  };

  return str
    .split("")
    .map((char) => accents[char] || char)
    .join("");
};

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedSigns, setTranslatedSigns] = useState([]);

  const handleTranslate = () => {
    const sanitizedText = removeAccents(text);

    const signs = sanitizedText
      .toUpperCase()
      .split("")
      .map((char) => {
        if (char === " ") {
          return { char: " ", isSpace: true };
        }

        if (char.match(/[A-Z]/)) {
          return {
            char,
            isSpace: false,
            src: `/assets/signs/${char}.jpg`, // Corrigido o caminho para uso direto
          };
        }
        return null;
      });

    setTranslatedSigns(signs.filter(Boolean));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTranslate();
    }
  };

  return (
    <div className="translator-container">
      <h3>Digite na caixa de texto abaixo, o que você deseja que seja traduzido para LIBRAS:</h3>
      <div className="translator-input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="translator-input"
          placeholder="Digite algo para traduzir..."
        />
        <button
          onClick={handleTranslate}
          className="translator-button"
        >
          Traduzir
        </button>
      </div>
      <div className="translator-images">
        {translatedSigns.map((sign, index) =>
          sign.isSpace ? (
            <div
              key={index}
              className="translator-space"
            />
          ) : (
            <div key={index} className="translator-sign">
              <img src={sign.src} alt={`Letra ${sign.char}`} />
              <p>{sign.char}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Translator;