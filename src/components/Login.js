import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Вход в AlmaUniversity</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', width: '100%' }}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;