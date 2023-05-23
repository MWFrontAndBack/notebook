import { useEffect, useState } from "react";
// import UserNavbar from "../allUserNotes/usernavbar";
import "./useracc.css";
import DetailsNavbar from "../notesDetails/detailsnav";
const UserAccoutn = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    console.log(username);
    console.log(password);
    if (username && password) {
      fetch("http://localhost:8080/api/public/user-page/account", {
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
          console.log(data);
        })
        .catch((error) => {
          console.error("Failed to fetch user data", error);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <DetailsNavbar />
      <div className="container">
        <div className="content">
          <div className="image-container">
            {userData ? (
              <img src={userData.photo} alt="User Photo" className="image" />
            ) : (
              <div className="placeholder-image" />
            )}
          </div>
          <div className="data-container">
            <h1 className="title">User Details</h1>
            {userData ? (
              <div>
                <p className="text">ID: {userData.id}</p>
                <p className="text">Login Name: {userData.loginName}</p>
                <p className="text">Email: {userData.email}</p>
              </div>
            ) : (
              <p className="text">No user data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccoutn;
