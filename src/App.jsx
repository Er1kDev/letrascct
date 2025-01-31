import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";
import { AlabanzasList } from "./components/AlabanzasList";
import { AlabanzasDetalle } from "./components/AlabanzasDetalle";
import alabanzas from "./data/alabanzas";


function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const FilteredAlabanzas = alabanzas.filter((alabanza) => {
    const letra = Array.isArray(alabanza.letra) ? alabanza.letra.join(' ') : alabanza.letra;
    return alabanza.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letra.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Router >
      <section className="min-h-screen bg-gradient-to-t from-blue-900 to-blue-800" >
        <h1 className="text-center text-white md:pt-10 pt-8 md:pb-1 pb-8 drop-shadow-xl md:text-4xl text-4xl font-medium uppercase">Comunidad Cristiana Talca 2025</h1>
        <div className="text-white">
          <div className="container mx-auto max-w-5xl">
            <Routes>
              <Route path="/" element={
                <article>
                  <section className="flex justify-center md:py-10 drop-shadow-xl">
                    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                  </section>
                  <section className="py-10">
                    <AlabanzasList alabanzas={FilteredAlabanzas} />
                  </section>
                </article>
              } />
              <Route path="/alabanza/:id" element={<AlabanzasDetalle />} />
            </Routes>
          </div>
        </div>
      </section>
    </Router>
  )
}

export default App
