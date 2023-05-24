import { useLocation, useNavigate, usee } from "react-router-dom";
import "./notesdet.css";

import DetailsNavbar from "./detailsnav";
import { useEffect } from "react";

const NoteDetail = (props) => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state?.data;

  console.log(data);

  return (
    <div>
      <DetailsNavbar />
      <div className="note-container">
        <div className="note">
          <h2>Details</h2>

          <h2>Note Details</h2>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p className="note-len"> {data.content}</p>
          <p>Category: {data.noteCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
