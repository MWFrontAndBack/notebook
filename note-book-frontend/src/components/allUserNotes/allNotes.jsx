import { useState, useEffect } from "react";
import UserNavbar from "./usernavbar";
import NotesSchow from "./notesshow";
import "./allnotes.css";

const AllNotes = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (username && password) {
      fetch("http://localhost:8080/api/public/user-page", {
        headers: {
          Authorization: "Basic " + btoa(`${username}:${password}`),
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((data) => {
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
          setLoading(false);
        });
    }
  }, []);
  const handleNoteDeletion = (id) => {
    setUserData((prevUserData) =>
      prevUserData.filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <UserNavbar />
      <div className="all-notes-container">
        {loading ? (
          <p>Loading...</p>
        ) : userData ? (
          <div className="notes-grid">
            {userData.map((item) => (
              <div key={item.id} className="note-card">
                <NotesSchow val={item} onNoteDelete={handleNoteDeletion} />
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default AllNotes;
