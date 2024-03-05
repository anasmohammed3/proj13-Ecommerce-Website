import React from 'react';

const Login = () => {
  const handleSignIn = () => {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');


    if (!usernameInput || !passwordInput) {
        alert('Please fill in all fields');
      }
    else if(usernameInput === storedUsername && passwordInput === storedPassword) {
      // Redirect to home page
      window.location = '/';
    }
     else {
      // Show alert for incorrect username or password
      alert('Incorrect username or password');
    }
  };

  return (
    <div className='home-signUP'>
      <div className='sign-up'>
        <h2>Sign In</h2>
        <div className='signUP-inputs'>
          <input type='text' id='username' placeholder='Enter Your Username' />
          <input type='password' id='password' placeholder='Enter Your Password' />
          <button className='submit' onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
