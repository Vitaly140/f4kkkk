import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Grades from './components/Grades';
import Attendance from './components/Attendance';
import Login from './components/Login';
import Assignments from './components/Assignments';
import Main from './components/Main';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  return (
    <div>
      {user && <Header user={user} onLogout={handleLogout} />}
      {user ? (
        <Routes>
          <Route path="/" element={<Main user={user} />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Login onLogin={(email) => setUser(email)} />
      )}
    </div>
  );
}

export default App;