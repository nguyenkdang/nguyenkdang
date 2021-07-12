import './Navbar.css'

const Navbar = () => {
    return (
        <ul id='navBar'>
            <li class="navItem"><a class="navLink" href="contact"> contact</a></li>
            <li class="navItem"><a class="navLink" href="projects"> projects</a></li>
            <li class="navItem"><a class="navLink" href="resume"> resume </a></li>
            <li class="navItem"><a class="navLink" href="/"> home</a></li>
        </ul>
    )
}

export default Navbar