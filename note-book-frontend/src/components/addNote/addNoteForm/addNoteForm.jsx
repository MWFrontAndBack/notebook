import { useState } from "react";
import "./addform.css";
const NoteForm = () => {
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

    fetch("http://localhost:8080/notes/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Note Category:
        <select
          name="noteCategory"
          value={formData.noteCategory}
          onChange={handleChange}
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
