import { Switch, Route, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./notesdet.css";
const NoteDetail = (props) => {
  console.log(props, " props");

  const location = useLocation();
  const data = location.state?.data;

  console.log(data);

  return (
    <div>
      <div className="note-container">
        <div className="note">
          <h2>Details</h2>

          <h2>Note Details</h2>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p> {data.content}</p>
          <p>Category: {data.noteCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
