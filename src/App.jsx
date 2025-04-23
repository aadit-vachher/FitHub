


import React, { useState } from 'react';
import Login from './components/Login';
import Main from './components/Main';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? <Main /> : <Login onLogin={handleLogin} />}
    </>
  );
};

export default App;
