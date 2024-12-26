import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; // Assure-toi que `db` est correctement exporté

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  // Fonction pour récupérer les notes depuis Firestore
  const fetchNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const notesArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotes(notesArray);
  };

  // Fonction pour ajouter une note dans Firestore
  const addNote = async () => {
    if (noteText.trim()) {
      await addDoc(collection(db, "notes"), { text: noteText });
      fetchNotes(); // Rafraîchir la liste des notes
      setNoteText("");
    }
  };

  // Fonction pour supprimer une note
  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    fetchNotes(); // Rafraîchir la liste des notes
  };

  // Charger les notes au montage du composant
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Vos Notes</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Écrivez une nouvelle note..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addNote}
        >
          Ajouter une note
        </button>
      </div>
      <div className="bg-white shadow rounded p-4">
        {notes.length > 0 ? (
          <ul>
            {notes.map((note) => (
              <li
                key={note.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{note.text}</span>
                <button
                  className="text-red-500"
                  onClick={() => deleteNote(note.id)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Aucune note pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
