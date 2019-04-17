import React, {component}from 'react';
import './Node.css';
import Note from './Note/Note'

class Note extends component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteContent;
    }
    render(){
       return(
        <div cassName="Note">
        <li>{this.noteId}-{this.noteContent}</li>
       </div>

       )
    }
    
}

export default Note;