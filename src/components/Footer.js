import './Footer.css'
import Mylogo from '../svg/Mylogo'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="foot">
            <div id="foot_logo">
                <Mylogo width="14vw"/>
            </div>
            <div id="foot-links">
                <Link className="foot-link" to="/"> home</Link>
                <Link className="foot-link" to="resume"> resume</Link>
                <Link className="foot-link" to="projects"> projects</Link>
                <Link className="foot-link" to="contact"> contact</Link>
                <a className="foot-link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank"> linkedIn</a>
                <a className="foot-link" href="https://github.com/nguyenkdang" target="_blank"> github</a>
                <a className="foot-link" href="https://www.behance.net/nguyenkdang" target="_blank"> behance</a>
                <a className="foot-link" href="https://www.instagram.com/nguwaynedang/" target="_blank"> instagram</a>
            </div>
            <div id="foot-copyright">
                <h2 id="copyright"> © Nguyen K. Dang 2021</h2>
            </div>
        </div>
    )
}

export default Footer
