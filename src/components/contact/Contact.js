import './Contact.scss'
import Socials from './Socials'

const Contact = () => {
    return (
        <div className="contact">
            <div className="social-box">
                <Socials/>
            </div>
            <form className="contact_form" method="post" action="https://formsubmit.co/nguyenkhdang@gmail.com">
             <div className="contact_box">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://www.nguyenkdang.com/contact"/>
                <div className="name_field">
                    <h2 className="inp_label">name </h2>
                    <input type="text" className="Name" name="Name" required/>
                </div>
                <div className="email_field">
                    <h2 className="inp_label">email </h2>
                    <input type="email" className="Email" name="Email" required/>
                </div>
                
                <div className="message_field">
                    <h2 className="inp_label">message</h2>
                    <textarea className="Message" name="Message" rows="6" maxLength="3000" required></textarea>
                </div>
                
                <button type="submit" className="submit_button">Send</button>
            </div>
            </form>
        </div>
    )
}

export default Contact
