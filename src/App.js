import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Tables';
import Filter from './components/Filter';
import {
  getUsers,
  searchEmployeeByName,
  sortBySelection,
  filterBySelection
} from './employees';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  

  

  const handleInputChange = name => {
    setFilteredUsers(searchEmployeeByName(users, name));
  };

 
// Handler for when user uses the for sort function fo name and department and sets the order
  const handleSortSelect = sortType => {
    switch (sortType) {
      case 'Alphabetical':
        setFilteredUsers(sortBySelection(filteredUsers, 'name'));
        break;
      case 'Department':
        setFilteredUsers(sortBySelection(filteredUsers, 'department'));
        break;
      default:
        setFilteredUsers(users);
        break;
    }
  };

  const handleFilterSelect = (filterLabel, filterType) => {
    if (filterType === 'Please Select') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(filterBySelection(users, filterLabel, filterType));
    }
  };

///Layout of the search bar and filter area
  return (
    <div className='App'>
      <div className='container mt-5'>
        <Header />
        
        <Filter
          handleInputChange={handleInputChange}
          handleSortSelect={handleSortSelect}
          handleFilterSelect={handleFilterSelect}
        />
        <Table users={filteredUsers} />
      </div>
    </div>
  );
}

export default App;
