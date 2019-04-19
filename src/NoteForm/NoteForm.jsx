import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component{
   constructor(){
    super();
    }

addNote(){

}

    render(){
       return(
        <div className="NoteForm" >
        <input 
         placeholder="Write a note"

        type="text" >
            <button
            onClick={this.addNote}
            >
            Add Note
            </button>
        </input>
    </div>
       )
    }

}
export default NoteForm;
