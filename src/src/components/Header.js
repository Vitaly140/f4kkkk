import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#007bff', color: '#fff', padding: '1rem' }}>
      <h1>AlmaUniversity</h1>
      <nav>
        <Link to="/" style={{ color: '#fff', margin: '0 10px' }}>Главная</Link>
        <Link to="/grades" style={{ color: '#fff', margin: '0 10px' }}>Оценки</Link>
        <Link to="/attendance" style={{ color: '#fff', margin: '0 10px' }}>Прогулы</Link>
      </nav>
    </header>
  );
}

export default Header;