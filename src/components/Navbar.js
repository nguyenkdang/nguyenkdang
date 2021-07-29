import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul id='navBar'>
            <li className="navItem"><Link className="navLink" to="contact"> contact</Link></li>
            <li className="navItem"><Link className="navLink" to="projects"> projects</Link></li>
            <li className="navItem"><Link className="navLink" to="resume"> resume </Link></li>
            <li className="navItem"><Link className="navLink" to="/"> home</Link></li>
        </ul>
    )
}

export default Navbar