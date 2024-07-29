import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/Search">
                <button>Search</button>
            </Link>
            <Link to="/Contact">
                <button>Contact</button>
            </Link>
            <Link to="/Login">
                <button>Login</button>
            </Link>
            <Link to="/Testing">
                <button>Testing</button>
            </Link>
        </>
    );
}

export default Navbar