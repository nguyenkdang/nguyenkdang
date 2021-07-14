import "./Socials.css"
import logo_behance from '../../svg/logo_behance.svg'
import logo_github from '../../svg/logo_github.svg'
import logo_instagram from '../../svg/logo_instagram.svg'
import logo_linkedin from '../../svg/logo_linkedin.svg'

const Socials = () => {
    return (
        <div id="contact_box2">
            <div id="ln_logo" class="logo">
                <a href="https://www.linkedin.com/in/nguyenkdang/" target="_blank">
                    <img src={logo_linkedin} alt="linkedIn logo"/>
                </a>
            </div>
            <div id="git_logo" class="logo">
                <a href="https://github.com/nguyenkdang" target="_blank">
                    <img src={logo_github} alt="Github logo"/>
                </a>
            </div>
            <div id="be_logo" class="logo">
                <a href="https://www.behance.net/nguyenkdang" target="_blank">
                    <img src={logo_behance} alt="Behance logo"/>
                </a>
            </div>
            <div id="in_logo" class="logo">
                <a href="https://www.instagram.com/nguwaynedang/" target="_blank">
                    <img src={logo_instagram} alt="Instagram logo"/>
                </a>
            </div>
        </div>
    )
}

export default Socials
