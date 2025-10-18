import React from 'react';
import { Link } from 'react-router-dom';

function Header({ user, onLogout }) {
  return (
    <header style={{ backgroundColor: '#007bff', color: '#fff', padding: '1rem' }}>
      <h1>AlmaUniversity</h1>
      <nav>
        <Link to="/" style={{ color: '#fff', margin: '0 10px' }}>Главная</Link>
        <Link to="/schedule" style={{ color: '#fff', margin: '0 10px' }}>Расписание</Link>
        <Link to="/assignments" style={{ color: '#fff', margin: '0 10px' }}>Задания</Link>
        <Link to="/grades" style={{ color: '#fff', margin: '0 10px' }}>Оценки</Link>
        <Link to="/attendance" style={{ color: '#fff', margin: '0 10px' }}>Прогулы</Link>
        {user && (
          <button onClick={onLogout} style={{ marginLeft: 20, background: 'transparent', color: '#fff', border: '1px solid #fff', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}>Выйти</button>
        )}
      </nav>
    </header>
  );
}

export default Header;