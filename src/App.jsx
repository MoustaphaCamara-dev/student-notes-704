import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<h2>Accueil</h2>} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/login" element={<h2>Connexion</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
