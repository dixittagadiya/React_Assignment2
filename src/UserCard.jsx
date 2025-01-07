import React from 'react';

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}>Age: {age}</p>
      <p style={styles.info}>Location: {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px auto',
    textAlign: 'center',
  },
  name: {
    fontSize: '24px',
    margin: '8px 0',
    color: '#333',
  },
  info: {
    fontSize: '16px',
    margin: '4px 0',
    color: '#555',
  },
};

export default UserCard;
