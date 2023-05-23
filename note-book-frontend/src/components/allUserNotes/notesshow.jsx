import { Link, useNavigate } from "react-router-dom";
import "./notestyle.css";
import { useState } from "react";

const NotesSchow = (props) => {
  const username = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  console.log(username);
  console.log(password);
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  const { id, title, content, noteCategory } = props.val;
  const note = { id, title, noteCategory, content };
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/public/user-page/delete-note/${id}`, {
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    })
      .then((response) => {
        if (response.ok) {
          props.onNoteDelete(id);
        } else {
          console.log("Failed to delete note");
        }
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };
  if (isDeleted) {
    return null;
  }
  return (
    <div>
      <div className="note-content">
        <h2 className="note-title">{title}</h2>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <hr className="note-line"></hr>
        <h2 className="note-category">Type: {noteCategory}</h2>
        <div className="link-container">
          <Link
            className="note-link"
            to={`/user-page/note-details/${id}`}
            state={{ data: note }}
          >
            Details
          </Link>
          <span className="link-spacing"></span>
          <button className="note-link" onClick={handleDelete}>
            Delte
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotesSchow;
