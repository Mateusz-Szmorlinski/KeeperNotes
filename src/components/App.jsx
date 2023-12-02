import React, { useState } from "react";
import Note from "./Note";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form";



function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    function editNote(id) {
        
    }

    return (
        <div>
            <Header />
            <Form onAdd={addNote}/>
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                        onEdit={editNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
};

export default App;