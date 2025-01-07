import React, { useState } from 'react';

const Counter = () => {
  // Initialize the count state with 0
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.container}>
      <h2>Current Count: {count}</h2>
      <button onClick={increment} style={styles.button}>Increment</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  }
};

export default Counter;
