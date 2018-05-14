import React, {component}from 'react';
import './Node.css';
import Note from './Note/Note'

class Note extends component{
    constructor(){

        super();
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