import { useState, useEffect } from "react";
import "./addform.css";
import { useNavigate } from "react-router-dom";

const NoteForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    noteCategory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      content: formData.content,
      noteCategory: formData.noteCategory,
    };
    const username = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    fetch("http://localhost:8080/api/public/user-page/add-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: "Basic " + btoa(`${username}:${password}`),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("/user-page");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setFormData({
      title: "",
      content: "",
      noteCategory: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Note Category:
        <select
          name="noteCategory"
          value={formData.noteCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          <option value="SPORT">SPORT</option>
          <option value="HOBBY">HOBBY</option>
          <option value="FAMILY">FAMILY</option>
          <option value="MOVIES">MOVIES</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NoteForm;
