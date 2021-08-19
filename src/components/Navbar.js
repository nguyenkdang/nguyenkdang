import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Navbar = ({curPage}) => {
    console.log(curPage)
    return (
        <div className='navBar' >
            <span className="navItem"><Link className={curPage['/'] ? "navLink iv" : "navLink"}  to="/"> home</Link></span>
            <span className="navItem"><Link className={curPage['/resume'] ? "navLink hl" : "navLink"} to="resume"> resume </Link></span>
            <span className="navItem"><Link className={curPage['/projects'] ? "navLink hl" : "navLink"} to="projects"> projects</Link></span>
            <span className="navItem"><Link className={curPage['/contact'] ? "navLink hl" : "navLink"} to="contact"> contact</Link></span>
        </div>
    )
}

export default Navbar