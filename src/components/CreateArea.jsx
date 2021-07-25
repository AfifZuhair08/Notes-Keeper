import React, {useState} from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        // destructuring events
        const {name, value} = e.target;

        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e){
        // "onAdd" function as props name
        props.onAdd(note);
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />
                <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
