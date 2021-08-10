import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navBar'>
            <span className="navItem"><Link className="navLink" to="/"> home</Link></span>
            <span className="navItem"><Link className="navLink" to="resume"> resume </Link></span>
            <span className="navItem"><Link className="navLink" to="projects"> projects</Link></span>
            <span className="navItem"><Link className="navLink" to="contact"> contact</Link></span>
        </div>
    )
}

export default Navbar