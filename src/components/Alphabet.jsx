import React from "react";
import "../styles/Alphabet.css"; // Importe o arquivo CSS

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Alphabet = () => {
  return (
    <div>
      <h2 className="texto">Aprenda o Alfabeto em Libras</h2>
      <div className="alphabet-grid">
        {letters.map((letter) => (
          <div key={letter} className="letter-card">
            <h3>{letter}</h3>
            <img
              src={`/assets/signs/${letter}.jpg`}
              alt={`Letra ${letter} em Libras`}
              className="letter-img"
            />
            <video
              src={`/assets/gifs/${letter}.mp4`}
              autoPlay
              loop
              muted
              className="letter-video"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabet;

