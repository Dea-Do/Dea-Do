import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Update the fetch path to the correct endpoint
    fetch("http://localhost:5000/api/tasks") // This is the correct API path
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="App">
      <h1>Dea-Do</h1>
      <Calendar tasks={tasks} />
    </div>
  );
};

export default App;
