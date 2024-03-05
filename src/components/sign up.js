import React from 'react';

const SignUp = () => {
    
  const handleSignUp = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
  }

    // Save user data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Redirect to sign-in component
    window.location.href = '/signin';
  };

  return (
    <div className='home-signUP'>
      <div className='sign-up'>
        <h2>Sign Up</h2>
        <div className='signUP-inputs'>
          <input type='text' id='username' placeholder='Enter Your Username' />
          <input type='email' id='email' placeholder='Enter Your Email' />
          <input type='password' id='password' placeholder='Enter Your Password' />
          <button className='submit' onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
