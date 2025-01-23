import React from "react";

// Alfabeto em Libras
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Alphabet = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Aprenda o Alfabeto em Libras</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 itens por linha
          gap: "30px", // Espaçamento entre itens
          justifyItems: "center",
        }}
      >
        {letters.map((letter) => (
          <div
            key={letter}
            style={{
              textAlign: "center",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "150px",
            }}
          >
            <h3>{letter}</h3>
            {/* Imagem da letra */}
            <img
              src={`/assets/signs/${letter}.jpg`}
              alt={`Letra ${letter} em Libras`}
              style={{ width: "100px", height: "100px", marginBottom: "10px" }}
            />
            {/* Vídeo do gesto */}
            <video
              src={`/assets/gifs/${letter}.mp4`}
              autoPlay
              loop
              muted
              style={{ width: "120px", height: "120px", borderRadius: "5px" }}
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
