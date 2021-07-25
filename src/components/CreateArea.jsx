import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        // destructuring events
        const { name, value } = e.target;

        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(e) {
        // "onAdd" function as props name
        if (newNote.title !== "" && newNote.content !== "") {
            props.onAdd(newNote);
        }

        setNewNote({
            title: "",
            content: ""
        });

        e.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? 
                    <input 
                        onChange={handleChange} 
                        name="title" 
                        value={newNote.title} 
                        placeholder="Title" 
                    /> : null
                }
                
                <textarea 
                    onClick={expand}
                    onChange={handleChange} 
                    name="content" value={newNote.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? "3" : "1"}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
