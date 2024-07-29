import { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Copyright from '../components/Copyright.jsx'
import './Styles.css'; // Ensure you have a CSS file for styling

function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    // Handle form submission logic here
    // For example, you might want to send the data to a server or an API
    // Once done, update the status and reset the button text
    setTimeout(() => {
      setStatus({ success: true, message: 'Message sent successfully!' });
      setButtonText('Send');
      setFormDetails(formInitialDetails);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="auth-form-container">
        <h2 className="form-header">Contact</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input className="form-input" placeholder="Enter First Name" type="name" id="firstName" name="firstName" value={formDetails.firstName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="lastName">Last Name</label>
            <input className="form-input" placeholder="Enter Last Name" type="name" id="lastName" name="lastName" value={formDetails.lastName} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email*</label>
            <input className="form-input" required placeholder="Enter Email" type="email" id="email" name="email" value={formDetails.email}onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone</label>
            <input className="form-input" placeholder="Enter Phone Number" type="tel" id="phone" name="phone" value={formDetails.phone} onChange={handleInputChange}/>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message*</label>
            <textarea className="form-input" required placeholder="Enter Message" id="message" name="message" value={formDetails.message}onChange={handleInputChange}>  
            </textarea>
          </div>
          <button type="submit" className="contact-button">
            {buttonText}
          </button>
        </form>
        {status.message && (
          <p className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </p>
        )}
      </div>
      <Copyright/>
    </>
  );
}

export default Contact;
