import NoteForm from './components/addNote/addNoteForm/addNoteForm';
import AllNotes from './components/allUserNotes/allNotes';
import { Routes, Route, useLocation } from 'react-router-dom';
import CreateAccRoute from './routes/acoountRoute/createAccouteRoute';
import IndexPage from './routes/mainRoute/indexpage';
import LoginForm from './components/loginForm/loginUser';
import UserAccoutn from './components/userAccount/userAccout';
import NoteDetail from './components/notesDetails/notesDetails';
import AdminPage from './components/adminPage/adminPage';

function App() {
  const location = useLocation();
  const userData = location.state?.userData;

  return (

    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path='/user-page' element={<AllNotes userData={userData} />} />
      <Route path="/create-acc" element={<CreateAccRoute />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/user-page/account' element={<UserAccoutn />} />
      <Route path='/user-page/add-note' element={<NoteForm />} />
      <Route path="/user-page/note-details/:id" element={<NoteDetail />} />
      <Route path="/admin-page" element={<AdminPage />} />


    </Routes>

  )
}

export default App;
