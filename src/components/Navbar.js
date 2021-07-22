import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul id='navBar'>
            <li class="navItem"><Link class="navLink" to="contact"> contact</Link></li>
            <li class="navItem"><Link class="navLink" to="projects"> projects</Link></li>
            <li class="navItem"><Link class="navLink" to="resume"> resume </Link></li>
            <li class="navItem"><Link class="navLink" to="/"> home</Link></li>
        </ul>
    )
}

export default Navbar