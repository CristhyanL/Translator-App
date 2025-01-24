import React, { useState } from "react";
import "C:/Users/crist/OneDrive/Área de Trabalho/translator-app/public/styles/Translator.css";

// Dicionário de palavras e sinais
const dictionary = {
  abril: {signImage: "A_Abril.jpg", signGif: "A_Abril.mp4"},
  agosto: {signImage: "A.jpg", signGif: "A_Agosto.mp4"},
  amor: { signImage: "C.jpg", signGif: "A_Amor.mp4" },
  ano: { signImage: "S.jpg", signGif: "A_Ano.mp4" },
  amigo: { signImage: "A_Amigo.jpg", signGif: "A_Amigo.mp4" },
  arroz: { signImage: "A_Arroz.jpg", signGif: "A_Arroz.mp4" },
  bola: { signImage: "B_Bola.jpg", signGif: "B_Bola.mp4" },
  bicho: { signImage: "B_Bola.jpg", signGif: "B_Bicho.mp4" },
  casa: { signImage: "C_Casa.jpg", signGif: "C_Casa.mp4" },
  cachorro: { signImage: "C_Cachorro.jpg", signGif: "C_Cachorro.mp4" },
  calendário: { signImage: "C_Casa.jpg", signGif: "C_Calendário.mp4" },
  cálculo: { signImage: "C.jpg", signGif: "C_Cálculo.mp4" },
  calculadora: { signImage: "C.jpg", signGif: "C_Cálculo.mp4" },
  dança: { signImage: "D_Dança.jpg", signGif: "D_Dança.mp4" },
  dente: { signImage: "X.jpg", signGif: "D_Dente.mp4" },
  dezembro: { signImage: "B_Bola.jpg", signGif: "D_Dezembro.mp4" },
  elefante: { signImage: "E_Elefante.jpg", signGif: "E_Elefante.mp4" },
  escola: { signImage: "E_Escola.jpg", signGif: "E_Escola.mp4" },
  estudar: { signImage: "E_Escola.jpg", signGif: "E_Estudar.mp4" },
  engenharia: { signImage: "C.jpg", signGif: "E_Engenharia.mp4" },
  engenheiro: { signImage: "C.jpg", signGif: "E_Engenharia.mp4" },
  faca: { signImage: "N.jpg", signGif: "F_Faca.mp4" },
  fevereiro: { signImage: "F.jpg", signGif: "F_Fevereiro.mp4" },
  gato: { signImage: "G_Gato.jpg", signGif: "G_Gato.mp4" },
  hora: { signImage: "L.jpg", signGif: "H_Hora.mp4" },
  igreja: { signImage: "I_Igreja.jpg", signGif: "I_Igreja.mp4" },
  janela: { signImage: "J_Janela.jpg", signGif: "J_Janela.mp4" },
  janeiro: { signImage: "J.jpg", signGif: "J_Janeiro.mp4" },
  junho: { signImage: "J_Junho.jpg", signGif: "J_Junho.mp4" },
  julho: { signImage: "J_Junho.jpg", signGif: "J_Julho.mp4" },
  lápis: { signImage: "L_Lápis.jpg", signGif: "L_Lápis.mp4" },
  mecânico: { signImage: "Z.jpg", signGif: "M_Mecânico.mp4" },
  março: { signImage: "A.jpg", signGif: "M_Março.mp4" },
  maio: { signImage: "M_Maio.jpg", signGif: "M_Maio.mp4" },
  matemática: { signImage: "M.jpg", signGif: "M_Matemática.mp4" },
  nariz: { signImage: "Z.jpg", signGif: "N_Nariz.mp4" },
  novembro: { signImage: "N.jpg", signGif: "N_Novembro.mp4" },
  olho: { signImage: "Z.jpg", signGif: "O_Olho.mp4" },
  outubro: { signImage: "O.jpg", signGif: "O_Outubro.mp4" },
  pão: { signImage: "P_Pão.jpg", signGif: "P_Pão.mp4" },
  professor: { signImage: "P_Professor.jpg", signGif: "P_Professor.mp4" },
  queijo: { signImage: "L.jpg", signGif: "Q_Queijo.mp4" },
  rato: { signImage: "L_Lápis.jpg", signGif: "R_Rato.mp4" },
  sapo: { signImage: "S_Sapo.jpg", signGif: "S_Sapo.mp4" },
  setembro: { signImage: "L_Lápis.jpg", signGif: "S_Setembro.mp4" },
  tatuagem: { signImage: "L_Lápis.jpg", signGif: "T_Tatuagem.mp4" },
  universidade: { signImage: "U.jpg", signGif: "U_Universidade.mp4" },
  vapor: { signImage: "V_Vapor.jpg", signGif: "V_Vapor.mp4" },
  xícara: { signImage: "X_Xícara.jpg", signGif: "X_Xícara.mp4" },
  zoológico: { signImage: "Z.jpg", signGif: "Z_Zoológico.mp4" }
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
