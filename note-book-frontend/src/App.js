import NoteForm from './components/addNote/addNoteForm/addNoteForm';
import AddNote from './components/addNote/addnote';
import AllNotes from './components/allUserNotes/allNotes';
// import NoteFooter from './components/footer/nodeeditfooter';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import CreateAccRoute from './routes/acoountRoute/createAccouteRoute';
import IndexPage from './routes/mainRoute/indexpage';
import LoginForm from './components/loginForm/loginUser';

function App() {
  const location = useLocation();
  const userData = location.state?.userData;
  return (

    <Routes>
      .requestMatchers("/notes").permitAll()
      <Route path="/" element={<IndexPage />} />

      <Route path='/user-page' element={<AllNotes userData={userData} />} />
      <Route path="/add-note" element={<NoteForm />} />
      <Route path="/create-acc" element={<CreateAccRoute />} />
      <Route path="/login" element={<LoginForm />} />


    </Routes>

  )
}

export default App;
