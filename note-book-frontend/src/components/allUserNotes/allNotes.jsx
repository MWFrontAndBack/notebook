import { useState } from "react";
import { useEffect } from "react";
import NotesSchow from "./notesshow";
import "./notestyle.css";
import { Link } from "react-router-dom";

const AllNotes = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/notes/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <div className="note" key={item.id}>
          <NotesSchow val={item} />
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
