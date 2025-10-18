import React, { useState } from 'react';

function Attendance() {
  const totalAllowed = 5;
  const currentMissed = 3;
  const remaining = totalAllowed - currentMissed;
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Прогулы</h2>
      <button
        onClick={() => setVisible(!visible)}
        style={{
          marginBottom: '1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
        }}
      >
        {visible ? 'Скрыть информацию' : 'Показать информацию'}
      </button>

      {visible && (
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', borderRadius: '4px' }}>
          <p>Вы пропустили <strong>{currentMissed}</strong> занятия.</p>
          <p>Вы можете пропустить ещё <strong>{remaining}</strong> занятия без ритейка.</p>
          <p>Допустимые прогулы: <strong>{totalAllowed}</strong></p>
        </div>
      )}
    </div>
  );
}

export default Attendance;
