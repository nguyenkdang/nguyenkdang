import "./Socials.scss"


import Logo_linkedin from "../../svg/Logo_linkedin"
import Logo_behance from "../../svg/Logo_behance"
import Logo_instagram from "../../svg/Logo_instagram"
import Logo_github from "../../svg/Logo_github"
import Logo_email from "../../svg/Logo_email"


const size = "2.2vw"

const Socials = () => {
    return (
        <div className="socials">
            <div id="social_box">
                <div id="ln_logo" className="logo">
                    <a href="https://www.linkedin.com/in/nguyenkdang/" target="_blank">
                        <Logo_linkedin width={size} height={size}/>
                    </a>
                </div>
                <div id="git_logo" className="logo">
                    <a href="https://github.com/nguyenkdang" target="_blank">
                        <Logo_github width={size} height={size}/>
                    </a>
                </div>
                <div id="be_logo" className="logo">
                    <a href="https://www.behance.net/nguyenkdang" target="_blank">
                        <Logo_behance width={size} height={size}/>
                    </a>
                </div>
                <div id="in_logo" className="logo">
                    <a href="https://www.instagram.com/nguwaynedang/" target="_blank">
                        <Logo_instagram width={size} height={size}/>
                    </a>
                </div>
            </div>
            <div id="email_box" className="unext">
                    <h2 id="my_email">nguyenkhdang@gmail.com </h2>
                    <span id="em_logo"><Logo_email width={size} height={size}/></span>
            </div>
        </div>
    )
}

export default Socials
