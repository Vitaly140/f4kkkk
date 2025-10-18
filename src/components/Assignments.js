import React, { useState } from 'react';

function Assignments() {
  const [assignments, setAssignments] = useState([
    { title: 'Эссе по истории', deadline: '2024-06-10', done: false },
    { title: 'Домашнее задание по математике', deadline: '2024-06-12', done: true },
    { title: 'Лабораторная по физике', deadline: '2024-06-15', done: false },
  ]);

  const toggleDone = (index) => {
    setAssignments(assignments =>
      assignments.map((a, i) => i === index ? { ...a, done: !a.done } : a)
    );
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Задания</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {assignments.map((a, i) => (
          <li key={i} style={{ marginBottom: '1rem', background: '#f9f9f9', padding: '1rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>{a.title}</div>
              <div>Дедлайн: {a.deadline}</div>
              <div>Статус: <span style={{ color: a.done ? 'green' : 'red' }}>{a.done ? 'Выполнено' : 'Не выполнено'}</span></div>
            </div>
            <button onClick={() => toggleDone(i)} style={{ backgroundColor: a.done ? '#6c757d' : '#007bff', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
              {a.done ? 'Отметить как не выполнено' : 'Отметить как выполнено'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments; 