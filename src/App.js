import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
//como guardar notas 
constructor(){
  //heredamos todas las propiedades que nos da la clase de Component
  super();

//se va encargar de almacenar los datos de nuestra aplicacion
  this.state= {
    notes: [
      {noteId: 1, noteContent: 'note 1'},
      {noteId: 2, noteContent: 'note 2'}
    ] 
  };
}
  
        render() {
          return (
            <div className="notesContainer">
                      <div className="notesHeader">
                            <h1> React y Firebase App</h1>
                      </div>
                            <div className="notesBody">
                                 <ul>
                                 {
                                    this.state.notes.map( note => {
                                      return(
                                          <li key={note.noteId}>{note.noteContent}</li>  
                                      )
                                    })
                                  }
                                 </ul>
                            </div>
                    <div className="notesFooter">

                    </div>
            </div>
          );
        }
      }

export default App;
