import './Contact.scss'
import Socials from './Socials'

const Contact = () => {
    return (
        <div className="contact">
            <Socials className="LA"/>
            <form id="fcf-form-id" className="fcf-form-class" method="post" action="https://formsubmit.co/nguyenkhdang@gmail.com">
             <div id="contact_box">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://www.nguyenkdang.com/contact"/>
                <div id="name_field">
                    <h2 className="inp_label">name </h2>
                    <input type="text" id="Name" name="Name" className="fcf-form-control" required/>
                </div>
                <div id="email_field">
                    <h2 className="inp_label">email </h2>
                    <input type="email" id="Email" name="Email" className="fcf-form-control" required/>
                </div>
                
                <div id="message_field">
                    <h2 className="inp_label">message</h2>
                    <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
                </div>
                
                <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
            </div>
            </form>
        </div>
    )
}

export default Contact
