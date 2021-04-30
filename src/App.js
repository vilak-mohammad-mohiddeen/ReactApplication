import React from 'react';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import myNotes from './components/shared';
function App() {
  return (
    <div>
      <Header />

      {myNotes.map((note) => {
        return (
          <Note key={note.id} title={note.title} des={note.description} />
        );
      })}


      <Footer />
    </div>


  );
}

export default App;
