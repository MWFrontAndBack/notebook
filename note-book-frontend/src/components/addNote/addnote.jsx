import { Link } from "react-router-dom";
// import "./addnote.css";
const AddNote = () => {
  return (
    <div className="add-note-container">
      <Link
        to="/add-note"
        className="add-note-button"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        Add Note
      </Link>
    </div>
  );
};

export default AddNote;
