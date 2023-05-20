import { useState, useEffect } from "react";
import UserNavbar from "./usernavbar";
import Navbar from "../mainpage/navbar/mainnavbar";
import NotesSchow from "./notesshow";
import "./allnotes.css";
const AllNotes = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    console.log(username);
    console.log(password);

    // Fetch user data using stored credentials
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
  }, []);
  console.log(userData);
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
                <NotesSchow val={item} />
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
