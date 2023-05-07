import React, { useState, useEffect } from 'react';

import UserDetailsRow from './UserDetailsRow';

const UserDetailsContainer = () => {

  const [usersData, setUsersData] = useState([{}]);
 
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        console.log(data, "Data"); 
        setUsersData(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {console.log(usersData,'useDATA')}
      <UserDetailsRow users={usersData} />
    </div>
  );
};

export default UserDetailsContainer;
