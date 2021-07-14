import './Footer.css'
import logo from '../logo.svg'

const Footer = () => {
    return (
        <div className="foot">
            <div id="foot_logo">
                <img src={logo}></img>
            </div>
            <div id="foot-links">
                <a class="foot-link" href="/"> home</a>
                <a class="foot-link" href="resume"> resume</a>
                <a class="foot-link" href="projects"> projects</a>
                <a class="foot-link" href="contact"> contact</a>
                <a class="foot-link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank"> linkedIn</a>
                <a class="foot-link" href="https://github.com/nguyenkdang" target="_blank"> github</a>
                <a class="foot-link" href="https://www.behance.net/nguyenkdang" target="_blank"> behance</a>
                <a class="foot-link" href="https://www.instagram.com/nguwaynedang/" target="_blank"> instagram</a>
            </div>
            <div id="foot-copyright">
                <h2 id="copyright"> © Nguyen K. Dang 2021</h2>
            </div>
        </div>
    )
}

export default Footer
