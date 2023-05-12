import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import UserDetailsRow from './UserDetailsRow';

const UserDetailsContainer = () => {
  console.log("HERE in test")

  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("HERE in USEEFFECT")
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => {
        console.log(data, "RESPONSE DATA"); 
        setUsersData(data);
      })
      .catch(error => setError(error));
      return () => {
        console.log("UserDetailsContainer component is unmounting");
      };
  }, []);

  if (error) {
    return <div>Try again later. Loading...</div>; // Display error message
  } else {
    return (
      <ErrorBoundary>
        <div>
          {console.log(usersData, "useDATA")}
          <UserDetailsRow users={usersData} />
        </div>
      </ErrorBoundary>
    );
  }
};
export default UserDetailsContainer;
