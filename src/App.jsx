import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const result = await axios.get("http://task-backend-live-fd9c602f448f.herokuapp.com/api/tasks");
      setTasks(result.data);
    } catch (e) {
      console.error("Error fetching tasks:", e.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
