import React from 'react';

function Main({ user }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Добро пожаловать{user ? `, ${user}` : ''}!</h2>
      <p>Это университетский портал AlmaUniversity для студентов.</p>
      <p>Вы можете просматривать расписание, задания, оценки и посещаемость через меню сверху.</p>
      <p>Желаем успехов в учебе!</p>
    </div>
  );
}

export default Main; 