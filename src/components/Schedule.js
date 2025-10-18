import React from 'react';

function Schedule() {
  const schedule = [
    { day: 'Понедельник', subject: 'Математика', time: '09:00' },
    { day: 'Вторник', subject: 'История', time: '10:00' },
    { day: 'Среда', subject: 'Физика', time: '11:00' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Расписание занятий</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', background: '#fff' }}>
        <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
          <tr>
            <th>День</th>
            <th>Предмет</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.subject}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Schedule;
