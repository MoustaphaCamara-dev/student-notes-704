import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Student Notes 704</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Accueil</a></li>
          <li><a href="/notes" className="hover:underline">Notes</a></li>
          <li><a href="/login" className="hover:underline">Connexion</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
