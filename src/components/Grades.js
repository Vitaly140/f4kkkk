import React from 'react';

function Grades() {
  const grades = [
    { subject: 'Математика', grade: 'A' },
    { subject: 'История', grade: 'B+' },
    { subject: 'Физика', grade: 'A-' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Ваши оценки</h2>
      <ul>
        {grades.map((item, index) => (
          <li key={index}>
            {item.subject}: <strong>{item.grade}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grades;