import React, { useState } from "react";
import "../styles/SignDictionary.css";

const dictionary = {
  // Dados mantidos como no exemplo anterior
  A: [
    { word: "Amigo", signImage: "A_Amigo.jpg", signGif: "A_Amigo.mp4" },
    { word: "Amor", signImage: "A_Amor.jpg", signGif: "A_Amor.mp4" },
    { word: "Arroz", signImage: "A_Arroz.jpg", signGif: "A_Arroz.mp4" },
  ],
  B: [
    { word: "Bola", signImage: "B_Bola.jpg", signGif: "B_Bola.mp4" },
    { word: "Bicho", signImage: "B_Bicho.jpg", signGif: "B_Bicho.mp4" },
  ],
  C: [
    { word: "Casa", signImage: "C_Casa.jpg", signGif: "C_Casa.mp4" },
    {word: "Cachorro", signImage: "C_Cachorro.jpg", signGif: "C_Cachorro.mp4"}
  ],
  D: [
    { word: "Dança", signImage: "D_Dança.jpg", signGif: "D_Dança.mp4" },
    { word: "Dente", signImage: "D_Dente.jpg", signGif: "D_Dente.mp4" }
  ],
  E: [
    { word: "Elefante", signImage: "E_Elefante.jpg", signGif: "E_Elefante.mp4"},
    { word: "Escola", signImage: "E_Escola.jpg", signGif: "E_Escola.mp4" }
  ],
  F: [{ word: "Faca", signImage: "F_Faca.jpg", signGif: "F_Faca.mp4" }],
  G: [{ word: "Gato", signImage: "G_Gato.jpg", signGif: "G_Gato.mp4" }],
  H: [{ word: "Hora", signImage: "H_Hora.jpg", signGif: "H_Hora.mp4" }],
  I: [{ word: "Igreja", signImage: "I_Igreja.jpg", signGif: "I_Igreja.mp4" }],
  J: [{ word: "Janela", signImage: "J_Janela.jpg", signGif: "J_Janela.mp4" }],
  K: [],
  L: [{ word: "Lápis", signImage: "L_Lápis.jpg", signGif: "L_Lápis.mp4" }],
  M: [{word: "Mecânico", signImage: "M_Mecânico.jpg", signGif: "M_Mecânico.mp4"}],
  N: [{ word: "Nariz", signImage: "N_Nariz.jpg", signGif: "N_Nariz.mp4" }],
  O: [{ word: "Olho", signImage: "O_Olho.jpg", signGif: "O_Olho.mp4" }],
  P: [{ word: "Pão", signImage: "P_Pão.jpg", signGif: "P_Pão.mp4" }],
  Q: [{ word: "Queijo", signImage: "Q_Queijo.jpg", signGif: "Q_Queijo.mp4" }],
  R: [{ word: "Rato", signImage: "R_Rato.jpg", signGif: "R_Rato.mp4" }],
  S: [{ word: "Sapo", signImage: "S_Sapo.jpg", signGif: "S_Sapo.mp4" }],
  T: [ {word: "Tatuagem",signImage: "T_Tatuagem.jpg",signGif: "T_Tatuagem.mp4"}],
  U: [{word: "Universidade",signImage: "U_Universidade.jpg",signGif: "U_Universidade.mp4"}],
  V: [{ word: "Vapor", signImage: "V_Vapor.jpg", signGif: "V_Vapor.mp4" }],
  W: [],
  X: [{ word: "Xícara", signImage: "X_Xícara.jpg", signGif: "X_Xícara.mp4" }],
  Y: [],
  Z: [{ word: "Zoológico", signImage: "Z_Zoológico.jpg", signGif: "Z_Zoológico.mp4" }]
};

const SignDictionary = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSelectedWord(null); // Resetar a palavra selecionada ao mudar a letra
  };

  const handleWordClick = (item) => {
    setSelectedWord(item);
  };

  return (
    <div className="sign-dictionary">
      <div className="info-text">
        <p>Clique em uma letra para ter acesso às palavras que iniciam com ela.</p>
      </div>

      <div className="letter-grid">
        {Object.keys(dictionary).map((letter, index) => (
          <button
            key={index}
            className="letter-button"
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      {selectedLetter && (
        <div className="word-list">
          <h2>Palavras com a letra "{selectedLetter}"</h2>
          <ul>
            {dictionary[selectedLetter].map((item, idx) => (
              <li key={idx} onClick={() => handleWordClick(item)}>
                {item.word}
              </li>
            ))}
          </ul>
        </div>
      )}

{selectedWord && (
  <div className="sign-details">
    <h3>Detalhes da palavra: {selectedWord.word}</h3>
    <div className="sign-media">
      {/* Exibe a imagem do sinal */}
      {selectedWord.signImage && (
        <img
          src={`/assets/signs/${selectedWord.signImage}`}
          alt={`Sinal para ${selectedWord.word}`}
          className="sign-image"
        />
      )}
      {/* Exibe o vídeo do sinal (GIF) */}
      {selectedWord.signGif && (
        <video
          key={selectedWord.signGif}
          autoPlay
          loop
          muted
          className="sign-gif"
        >
          <source
            src={`/assets/gifs/${selectedWord.signGif}`}
            type="video/mp4"
          />
          Seu navegador não suporta vídeos.
        </video>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default SignDictionary;
