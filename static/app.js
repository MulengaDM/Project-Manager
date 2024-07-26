import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setTasks(res.data.tasks);
  };

  const createTask = async () => {
    await axios.post('http://localhost:5000/tasks', {
      title,
      description,
      due_date: dueDate
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Management</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="date" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button onClick={createTask}>Create Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.description} - {task.due_date}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
