import { useState, useEffect } from "react";
import "./admin.css";
import AdminNavbar from "./adminNavbar";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [error, setError] = useState(null); // New state variable for error message

  useEffect(() => {
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (username && password) {
      fetch("http://localhost:8080/api/public/admin-page", {
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
          console.log(data);
          setUserData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
          setLoading(false);
        });
    }
  }, []);
  const handleDelete = (iduser) => {
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    fetch(`http://localhost:8080/api/public/admin-page/delete-user/${iduser}`, {
      headers: {
        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("User Deleted");
          setUserData((prevUserData) =>
            prevUserData.filter((user) => user.id !== iduser)
          );
        } else {
          setError("cant delete users");
          console.log("Failed to delete User");
        }
      })
      .catch((error) => {
        console.error("Error deleting User:", error);
      });
  };
  return (
    <div>
      <AdminNavbar />

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : userData ? (
          <div className="user-container">
            {userData.map((item) => (
              <div key={item.id} className="user-card">
                <p>Email: {item.email}</p>
                <p>ID: {item.id}</p>
                <p>Login Name: {item.loginName}</p>
                <button onClick={() => handleDelete(item.id)}>
                  Delete user
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="error-message">{error}</div>
    </div>
  );
};

export default AdminPage;
