import './Contact.css'
import Socials from './Socials'

const Contact = () => {
    return (
        <div className="contact">
             <div id="contact_box">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required/> 
                <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
                <div>
                    <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                    <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
                </div>
            </div>
            <Socials/>

            <div id="contact_box3">

            </div>
        </div>
    )
}

export default Contact
