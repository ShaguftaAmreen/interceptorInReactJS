// src/FetchData.js
import React, { useState, useEffect } from 'react';
import instance from './axios'; 

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    instance
      .get('/users')  
      .then((response) => {
        setData(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Fetched Users</h3>
      <ul>
        {data.map((user) => (
          <li style={{listStyleType:"none"}} key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
