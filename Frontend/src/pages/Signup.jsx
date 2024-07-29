import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.jsx';
import './Styles.css';
import Copyright from '../components/Copyright.jsx'

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Handle signup logic here
  };

  return (
    <>
      <Navbar/>
      <div className="auth-form-container">
        <h2 className="form-header">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="name">Name</label>
          <input required className="form-input" value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter Desired Name" id="name" name="name"/>
          <label className="form-label" htmlFor="email">Email</label>
          <input required className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Desired Email" id="email" name="email"/>
          <label className="form-label" htmlFor="password">Password</label>
          <input required className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" id="password" name="password"/>
          <button type="submit" className="signup-button">Signup</button>
        </form>
        <p className="read-the-docs">
          Already Have an Account? <button onClick={() => navigate('/Login')}>Login Here</button>
        </p>
      </div>
      <Copyright/>
    </>
  );
}

export default Signup;
