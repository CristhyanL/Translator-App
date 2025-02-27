import React, { useState } from "react";
import "../styles/SignDictionary.css";

const dictionary = {
  // Dados mantidos como no exemplo anterior
  A: [
    { word: "Abril", signImage: "A_Abril.jpg", signGif: "A_Abril.mp4" },
    { word: "Agosto", signImage: "A.jpg", signGif: "A_Agosto.mp4" },
    { word: "Amigo", signImage: "A_Amigo.jpg", signGif: "A_Amigo.mp4" },
    { word: "Amor", signImage: "C.jpg", signGif: "A_Amor.mp4" },
    { word: "Ano", signImage: "S.jpg", signGif: "A_Ano.mp4" },
    { word: "Arroz", signImage: "A_Arroz.jpg", signGif: "A_Arroz.mp4" },
  ],
  B: [
    { word: "Bola", signImage: "B_Bola.jpg", signGif: "B_Bola.mp4" },
    { word: "Bicho", signImage: "B_Bola.jpg", signGif: "B_Bicho.mp4" },
  ],
  C: [
    { word: "Casa", signImage: "C_Casa.jpg", signGif: "C_Casa.mp4" },
    { word: "Calendário", signImage: "C_Casa.jpg", signGif: "C_Calendário.mp4" },
    {word: "Cachorro", signImage: "C_Cachorro.jpg", signGif: "C_Cachorro.mp4"},
    {word: "Cálculo", signImage: "C.jpg", signGif: "C_Cálculo.mp4"},
    {word: "Calculadora", signImage: "C.jpg", signGif: "C_Cálculo.mp4"},
  ],
  D: [
    { word: "Dança", signImage: "D_Dança.jpg", signGif: "D_Dança.mp4" },
    { word: "Dente", signImage: "X.jpg", signGif: "D_Dente.mp4" },
    { word: "Dezembro", signImage: "B_Bola.jpg", signGif: "D_Dezembro.mp4" },
  ],
  E: [
    { word: "Elefante", signImage: "E_Elefante.jpg", signGif: "E_Elefante.mp4"},
    { word: "Escola", signImage: "E_Escola.jpg", signGif: "E_Escola.mp4" },
    { word: "Engenharia", signImage: "C.jpg", signGif: "E_Engenharia.mp4" },
    { word: "Engenheiro", signImage: "C.jpg", signGif: "E_Engenharia.mp4" },
    { word: "Estudar", signImage: "E_Escola.jpg", signGif: "E_Estudar.mp4" },
  ],
  F: [
    { word: "Faca", signImage: "N.jpg", signGif: "F_Faca.mp4" },
    { word: "Fevereiro", signImage: "F.jpg", signGif: "F_Fevereiro.mp4" }
  ],
  G: [{ word: "Gato", signImage: "G_Gato.jpg", signGif: "G_Gato.mp4" }],
  H: [{ word: "Hora", signImage: "L.jpg", signGif: "H_Hora.mp4" }],
  I: [{ word: "Igreja", signImage: "I_Igreja.jpg", signGif: "I_Igreja.mp4" }],
  J: [
    { word: "Janela", signImage: "J_Janela.jpg", signGif: "J_Janela.mp4" },
    { word: "Janeiro", signImage: "J.jpg", signGif: "J_Janeiro.mp4" },
    { word: "Junho", signImage: "J_Junho.jpg", signGif: "J_Junho.mp4" },
    { word: "Julho", signImage: "J_Junho.jpg", signGif: "J_Julho.mp4" },
  ],
  K: [],
  L: [{ word: "Lápis", signImage: "L_Lápis.jpg", signGif: "L_Lápis.mp4" }],
  M: [
    {word: "Mecânico", signImage: "Z.jpg", signGif: "M_Mecânico.mp4"},
    {word: "Março", signImage: "A.jpg", signGif: "M_Março.mp4"},
    {word: "Maio", signImage: "M_Maio.jpg", signGif: "M_Maio.mp4"},
    {word: "Matemática", signImage: "M.jpg", signGif: "M_Matemática.mp4"},
  ],
  N: [
    { word: "Nariz", signImage: "Z.jpg", signGif: "N_Nariz.mp4" },
    { word: "Novembro", signImage: "N.jpg", signGif: "N_Novembro.mp4" },
  ],
  O: [
    { word: "Olho", signImage: "Z.jpg", signGif: "O_Olho.mp4" },
    { word: "Outubro", signImage: "O.jpg", signGif: "O_Outubro.mp4" },

  ],
  P: [
    { word: "Pão", signImage: "P_Pão.jpg", signGif: "P_Pão.mp4" },
    { word: "Professor", signImage: "P_Professor.jpg", signGif: "P_Professor.mp4" },
  ],
  Q: [{ word: "Queijo", signImage: "L.jpg", signGif: "Q_Queijo.mp4" }],
  R: [{ word: "Rato", signImage: "L_Lápis.jpg", signGif: "R_Rato.mp4" }],
  S: [
    { word: "Sapo", signImage: "S_Sapo.jpg", signGif: "S_Sapo.mp4" },
    { word: "Setembro", signImage: "L_Lápis.jpg", signGif: "S_Setembro.mp4" },
  ],
  T: [ {word: "Tatuagem",signImage: "L_Lápis.jpg",signGif: "T_Tatuagem.mp4"}],
  U: [{word: "Universidade",signImage: "U.jpg",signGif: "U_Universidade.mp4"}],
  V: [{ word: "Vapor", signImage: "V_Vapor.jpg", signGif: "V_Vapor.mp4" }],
  W: [],
  X: [{ word: "Xícara", signImage: "X_Xícara.jpg", signGif: "X_Xícara.mp4" }],
  Y: [],
  Z: [{ word: "Zoológico", signImage: "Z.jpg", signGif: "Z_Zoológico.mp4" }]
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
