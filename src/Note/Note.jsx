import React, {Component} from 'react';
import './Note.css';



class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id){
        console.log(id); 
        alert('remove:', id)
    }
    render(){
       return(
        <div cassName="Note">
        <span
        onClick={() => this.handleRemove(this.noteId)  }
        >&times;</span>
        <p> {this.noteContent}</p>
       </div>

       )
    }
    
}

export default Note;