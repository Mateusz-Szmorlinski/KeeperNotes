import React, { useState } from "react";



function Form(props) {
    const [note, setNote] = useState([]);

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    type="text"
                    placeholder="Title"
                />
                <br />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    cols="25"
                    rows="6"
                    placeholder="Write your note here"
                ></textarea>
                <br />
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    );
}

export default Form;