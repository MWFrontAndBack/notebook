import { Link } from "react-router-dom";
import "./notestyle.css";

const NotesSchow = (props) => {
  const { id, title, noteCategory } = props.val;
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
        <Link>Details</Link>
      </div>
    </div>
  );
};
export default NotesSchow;
