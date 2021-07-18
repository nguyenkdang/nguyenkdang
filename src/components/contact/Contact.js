import './Contact.css'
import Socials from './Socials'

const Contact = () => {
    return (
        <div className="contact">
            <Socials className="LA"/>
            <form id="fcf-form-id" class="fcf-form-class" method="post" action="contact-form-process.php">
             <div id="contact_box">
                <div id="name_field">
                    <h2 class="inp_label">name </h2>
                    <label for="Name" class="fcf-label">Your name</label>
                    <input type="text" id="Name" name="Name" class="fcf-form-control" required/>
                </div>
                <div id="email_field">
                    <h2 class="inp_label">email </h2>
                    <label for="Email" class="fcf-label">Your email address</label>
                    <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
                </div>
                
                <div id="message_field">
                    <label for="Message" class="fcf-label">Your message</label>
                    <h2 class="inp_label">message</h2>
                    <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                </div>
                
                <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
            </div>
            </form>
        </div>
    )
}

export default Contact
