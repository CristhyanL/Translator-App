import React, { useState } from "react";
import "C:/Users/crist/translator-app/public/styles/Translator.css";

// Dicionário de palavras e sinais
const dictionary = {
  amor: { signImage: "A_Amor.jpg", signGif: "A_Amor.mp4" },
  amigo: { signImage: "A_Amigo.jpg", signGif: "A_Amigo.mp4" },
  arroz: { signImage: "A_Arroz.jpg", signGif: "A_Arroz.mp4" },
  bola: { signImage: "B_Bola.jpg", signGif: "B_Bola.mp4" },
  bicho: { signImage: "B_Bicho.jpg", signGif: "B_Bicho.mp4" },
  casa: { signImage: "C_Casa.jpg", signGif: "C_Casa.mp4" },
  cachorro: { signImage: "C_Cachorro.jpg", signGif: "C_Cachorro.mp4" },
  dança: { signImage: "D_Dança.jpg", signGif: "D_Dança.mp4" },
  dente: { signImage: "D_Dente.jpg", signGif: "D_Dente.mp4" },
  elefante: { signImage: "E_Elefante.jpg", signGif: "E_Elefante.mp4" },
  escola: { signImage: "E_Escola.jpg", signGif: "E_Escola.mp4" },
  faca: { signImage: "F_Faca.jpg", signGif: "F_Faca.mp4" },
  gato: { signImage: "G_Gato.jpg", signGif: "G_Gato.mp4" },
  hora: { signImage: "H_Hora.jpg", signGif: "H_Hora.mp4" },
  igreja: { signImage: "I_Igreja.jpg", signGif: "I_Igreja.mp4" },
  janela: { signImage: "J_Janela.jpg", signGif: "J_Janela.mp4" },
  lápis: { signImage: "L_Lápis.jpg", signGif: "L_Lápis.mp4" },
  mecânico: { signImage: "M_Mecânico.jpg", signGif: "M_Mecânico.mp4" },
  nariz: { signImage: "N_Nariz.jpg", signGif: "N_Nariz.mp4" },
  olho: { signImage: "O_Olho.jpg", signGif: "O_Olho.mp4" },
  pão: { signImage: "P_Pão.jpg", signGif: "P_Pão.mp4" },
  queijo: { signImage: "Q_Queijo.jpg", signGif: "Q_Queijo.mp4" },
  rato: { signImage: "R_Rato.jpg", signGif: "R_Rato.mp4" },
  sapo: { signImage: "S_Sapo.jpg", signGif: "S_Sapo.mp4" },
  tatuagem: { signImage: "T_Tatuagem.jpg", signGif: "T_Tatuagem.mp4" },
  universidade: { signImage: "U_Universidade.jpg", signGif: "U_Universidade.mp4" },
  vapor: { signImage: "V_Vapor.jpg", signGif: "V_Vapor.mp4" },
  xícara: { signImage: "X_Xícara.jpg", signGif: "X_Xícara.mp4" },
  zoológico: { signImage: "Z_Zoológico.jpg", signGif: "Z_Zoológico.mp4" }
};

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedSigns, setTranslatedSigns] = useState([]);
  const [translation, setTranslation] = useState(null); // Sinal e GIF da palavra completa
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar o alerta

  const handleTranslate = () => {
    const sanitizedText = text.trim().toLowerCase(); // Remove espaços e normaliza o texto
    const wordData = dictionary[sanitizedText]; // Verifica se a palavra está no dicionário

    // Traduz as letras da palavra para sinais
    const signs = sanitizedText.split("").map((char) => {
      if (char.match(/[a-z]/)) {
        return {
          char,
          src: `/assets/signs/${char.toUpperCase()}.jpg`, // Caminho para as imagens das letras
        };
      }
      return null; // Ignora caracteres não alfabéticos
    });

    setTranslatedSigns(signs.filter(Boolean)); // Remove valores nulos

    if (wordData) {
      setTranslation(wordData); // Define o sinal da palavra completa
      setShowAlert(false); // Fecha o alerta, se necessário
    } else {
      setTranslation(null); // Reseta caso a palavra não exista
      setShowAlert(true); // Exibe o alerta
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleTranslate();
    }
  };

  return (
    <div className="translator-container">
      <h3>Digite uma palavra para traduzir para LIBRAS:</h3>
      <div className="translator-input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="translator-input"
          placeholder="Digite uma palavra..."
        />
        <button onClick={handleTranslate} className="translator-button">
          Traduzir
        </button>
      </div>

      {/* Exibição dos sinais das letras */}
      <div className="translator-letters">
        {translatedSigns.map((sign, index) => (
          <div key={index} className="translator-sign">
            <img src={sign.src} alt={`Letra ${sign.char}`} />
            <p>{sign.char.toUpperCase()}</p>
          </div>
        ))}
      </div>

      {/* Exibição do sinal e GIF da palavra completa */}
      {translation && (
        <div className="translator-result">
          <div className="translator-sign-word">
            <img
              src={`/assets/signs/${translation.signImage}`}
              alt="Imagem do sinal completo"
              className="translator-sign-image"
            />
          </div>
          <div className="translator-gif-word">
            <video
              key={translation.signGif} // Força a re-renderização
              autoPlay
              loop
              muted
              className="translator-sign-gif"
            >
              <source
                src={`/assets/gifs/${translation.signGif}`}
                type="video/mp4"
              />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}

      {/* Modal de Alerta */}
      {showAlert && (
        <div className="alert-modal">
          <div className="alert-modal-content">
            <h4>Palavra não encontrada</h4>
            <p>
              Essa palavra ainda não está no nosso dicionário. Porém, deixamos aqui os sinais
              referentes a cada letra dessa palavra. <br />
              Fique à vontade para tentar outras palavras!
            </p>
            <button onClick={() => setShowAlert(false)} className="alert-close-btn">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Translator;
