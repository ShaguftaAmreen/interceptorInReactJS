// src/App.js
import React from 'react';
import FetchData from './FetchData';
import Fetchwithpost from './Fetchwithpost';

const App = () => {
  return (
    <div>
      <h1>Axios Interceptors in React</h1>
      <FetchData /> 
      <Fetchwithpost />
       </div>
  );
};

export default App;
