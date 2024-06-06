import React, { useState } from 'react';

const UserList = () => {
  const [filter, setFilter] = useState('');
  const [users] = useState([
    { id: 1, name: 'Степан Басенков' },
    { id: 2, name: 'Никита Шандрыгин' },
    { id: 3, name: 'Евгений Федорычев' },
    { id: 4, name: 'Александра Пешеходько' },
    { id: 5, name: 'Ксения Ершова' }
  ]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilterChange = event => {
    const value = event.target.value.toLowerCase();
    setFilter(value);
    const filtered = users.filter(user => user.name.toLowerCase().includes(value));
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
