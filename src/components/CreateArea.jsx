import React, {useState} from "react";

function CreateArea(props) {

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        // destructuring events
        const {name, value} = e.target;

        setNewNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e){
        // "onAdd" function as props name
        if(newNote.title !== "" && newNote.content !== ""){
            props.onAdd(newNote);
        }

        setNewNote({
            title: "",
            content: ""
        });

        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={newNote.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={newNote.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
