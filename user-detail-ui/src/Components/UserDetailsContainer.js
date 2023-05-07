import React, { useState, useEffect } from 'react';

import UserDetailsRow from './UserDetailsRow';

const UserDetailsContainer = () => {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>try someTime Later Loading...</div>;
  } else {
    return (
      <div>
        {console.log(usersData, "useDATA")}
        <UserDetailsRow users={usersData} />
      </div>
    );
  }
};


export default UserDetailsContainer;
