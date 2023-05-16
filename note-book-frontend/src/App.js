import NoteForm from './components/addNote/addNoteForm/addNoteForm';
import AddNote from './components/addNote/addnote';
import AllNotes from './components/allUserNotes/allNotes';
// import NoteFooter from './components/footer/nodeeditfooter';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path='/' element={<><AllNotes /><AddNote /></>} />
      <Route path="/add-note" element={<NoteForm />} />


    </Routes>

  )
}

export default App;
