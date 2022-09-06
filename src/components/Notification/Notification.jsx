import React from 'react';
const Notification = ({ message }) => {
  return (
    <h4
      style={{
        margin: '20px',
      }}
    >
      {message}
    </h4>
  );
};

export default Notification;
