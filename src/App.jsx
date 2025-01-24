import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home"; // Importação da nova tab inicial
import Translator from "./components/Translator";
import Alphabet from "./components/Alphabet";
import SignDictionary from "./components/SignDictionary";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("home"); // Define "home" como a tab padrão

  return (
    <div>
      <Header setActiveTab={setActiveTab} />
      <main>
        {activeTab === "home" && <Home setActiveTab={setActiveTab} />}
        {activeTab === "translator" && <Translator />}
        {activeTab === "alphabet" && <Alphabet />}
        {activeTab === "signDictionary" && <SignDictionary />}
        {activeTab === "team" && <Team />}
      </main>
      <Footer />
    </div>
  );
};

export default App;

