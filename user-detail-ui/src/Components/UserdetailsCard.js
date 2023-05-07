import React from 'react';
import PropTypes from 'prop-types';

const UserDetailsCard = ({ user }) => {
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Place: {user.place}</p>
    </div>
  );
};

UserDetailsCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    place: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserDetailsCard;