import './Contact.scss'
import Socials from './Socials'

const Contact = () => {
    return (
        <div className="contact">
            <Socials/>
            <form className="contact_form" method="post" action="https://formsubmit.co/nguyenkhdang@gmail.com">
             <div id="contact_box">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://www.nguyenkdang.com/contact"/>
                <div id="name_field">
                    <h2 className="inp_label">name </h2>
                    <input type="text" id="Name" name="Name" required/>
                </div>
                <div id="email_field">
                    <h2 className="inp_label">email </h2>
                    <input type="email" id="Email" name="Email" required/>
                </div>
                
                <div id="message_field">
                    <h2 className="inp_label">message</h2>
                    <textarea id="Message" name="Message" rows="6" maxLength="3000" required></textarea>
                </div>
                
                <button type="submit" className="submit_button">Send</button>
            </div>
            </form>
        </div>
    )
}

export default Contact
