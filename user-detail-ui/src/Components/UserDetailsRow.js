/* eslint-disable react/prop-types */
import React from 'react';
import UserDetailsCard from './UserdetailsCard';
import PropTypes from 'prop-types';
import { Row, CardWrapper } from './RowStyle';


const  UserDetailsRow=(props)=> {
  console.log(props, 'PROPS')
  const {users} = props
 
  

  return (
    <Row>
      {users.map((user) => (
        <CardWrapper key={user.name}>
          <UserDetailsCard user={user} />
        </CardWrapper>
      ))}
    </Row>
  )
};

  UserDetailsRow.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
  
export default UserDetailsRow;
