import React, { useState } from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Input from './components/Inputting';
import Footer from './components/Footer';
import myNotes from './components/shared';
function App() {

  const [state, updateState] = useState(myNotes);

  function addnote(note) {

    updateState(prev => {
      return [...prev, note];
    });

  }


  return (
    <div>
      <Header />
      <Input onAdd={addnote} />
      {state.map((note) => {
        return (
          <Note key={note.id} title={note.title} des={note.description} />
        );
      })}


      <Footer />
    </div>


  );
}

export default App;
