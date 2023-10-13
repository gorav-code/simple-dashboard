import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //check existing login from browser local storage
  useEffect(() => {
    const hasUserAlreadyLoggedIn = localStorage.getItem('isLoggedIn');
    if(hasUserAlreadyLoggedIn === '1'){
      setIsLoggedIn(true);
    }
  }, []);  

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anywaysA

    //maintain state using browser local storage
    localStorage.setItem('isLoggedIn', '1'); 
    
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn'); 

    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
