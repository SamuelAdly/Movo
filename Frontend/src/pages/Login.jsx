import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import './Styles.css';
import Copyright from '../components/Copyright.jsx'

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Handle login logic here
  };

  return (
    <>
      <Navbar />
      <div className="auth-form-container">
        <h2 className="form-header">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="email">Email</label>
          <input required className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email" id="email" name="email"/>
          <label className="form-label" htmlFor="password">Password</label>
          <input required className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" id="password" name="password"/>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="read-the-docs">
          Dont Have an Account? <button onClick={() => navigate('/Signup')}>Sign Up Here</button>
        </p>
      </div>
      <Copyright/>
    </>
  );
}

export default Login;
