import { useState } from 'react'
import './Styles.css'
import Navbar from '../navbar/Navbar.jsx'
import { Link } from 'react-router-dom';
import Copyright from '../components/Copyright.jsx'

function Home() {
  

  return (
    <>
    <Navbar></Navbar>
    <div>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <img src="src/assets/movoIcon.png" className="logo" alt="Movo Logo" />
      </a>
    </div>

      <h1 className="titleText">Welcome to Movo</h1>

      <div className="card">
        <p>
          AI Powered Movie & TV Show Recommendation Platform to Help You Discover New Content
        </p>
      </div>

      <p className="read-the-docs">
        Follow the Icons Below to Log In or Sign Up for Free
      </p>

      <div>
        <Link to="/Login">
          <img src="src/assets/logIn.png" className="logo" alt="Log In Logo" />
        </Link>
        <Link to="/Signup">
          <img src="src/assets/signUp.png" className="logo" alt="Sign Up Logo" />
        </Link>
      </div>
      <Copyright/>
    </>
  );
}

export default Home

//const [count, setCount] = useState(0)
//<button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>