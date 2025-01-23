import React, { useState } from "react";
import Header from "./components/Header";
import Translator from "./components/Translator";
import Footer from "./components/Footer";
import Alphabet from "./components/Alphabet";
import SignDictionary from "./components/signDictionary";

const App = () => {
  const [activeTab, setActiveTab] = useState("translator");

  return (
    <div>
      <Header />
      <nav className="app-nav">
        <button
          onClick={() => setActiveTab("translator")}
          className={`nav-button ${activeTab === "translator" ? "active-tab" : ""}`}
        >
          Tradutor
        </button>
        <button
          onClick={() => setActiveTab("alphabet")}
          className={`nav-button ${activeTab === "alphabet" ? "active-tab" : ""}`}
        >
          Aprenda o Alfabeto
        </button>
        <button
          onClick={() => setActiveTab("signDictionary")}
          className={`nav-button ${activeTab === "signDictionary" ? "active-tab" : ""}`}
        >
          Dicionário de Sinais
        </button>
      </nav>
      <main>
        {activeTab === "translator" && <Translator />}
        {activeTab === "alphabet" && <Alphabet />}
        {activeTab === "signDictionary" && <SignDictionary />} {/* Exibição do dicionário */}
      </main>
      <Footer />
    </div>
  );
};

export default App;

