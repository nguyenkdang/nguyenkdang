import './Footer.scss'
import Mylogo from '../svg/Mylogo'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="foot">

            <div className="foot_logo">
                <Mylogo width="14vw"/>
                <div className="n_back"></div>
                <div className="d_back"></div>
            </div>

            <div className="foot-links">
                <div className="link-container">
                    <Link className="foot-link" to="/">home</Link>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <Link className="foot-link" to="resume">resume</Link>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <Link className="foot-link" to="projects">projects</Link>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <Link className="foot-link" to="contact">contact</Link>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <a className="foot-link" href="https://www.linkedin.com/in/nguyenkdang/" target="_blank" rel="noreferrer">linkedIn</a>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <a className="foot-link" href="https://github.com/nguyenkdang" target="_blank" rel="noreferrer">github</a>
                    <div className="underline"></div>
                </div>
                <div className="link-container">
                    <a className="foot-link" href="https://www.behance.net/nguyenkdang" target="_blank" rel="noreferrer">behance</a>
                    <div className="underline"></div>
                </div>

                <div className="link-container last">
                    <a className="foot-link" href="https://www.instagram.com/nguwaynedang/" target="_blank" rel="noreferrer">instagram</a>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="foot-copyright">
                <h2 className="copyright"> © Nguyen K. Dang 2021</h2>
            </div>
        </div>
    )
}

export default Footer
