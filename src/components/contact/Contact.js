import styles from './contact.module.scss';
import { SocialBar } from './SocialBar/SocialBar';

const Contact = () => {
    return (
        <div className={styles['contact']}>
            <div className={styles['social-box']}>
                <SocialBar />
            </div>
            <form
                className={styles['contact_form']}
                method="post"
                action="https://formsubmit.co/nguyenkhdang@gmail.com"
            >
                <div className={styles['contact_box']}>
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                        type="hidden"
                        name="_next"
                        value="https://www.nguyenkdang.com/contact"
                    />
                    <div className={styles['name_field']}>
                        <h2 className={styles['inp_label']}>name </h2>
                        <input
                            type="text"
                            className={styles['Name']}
                            name="Name"
                            required
                        />
                    </div>
                    <div className={styles['email_field']}>
                        <h2 className={styles['inp_label']}>email </h2>
                        <input
                            type="email"
                            className={styles['Email']}
                            name="Email"
                            required
                        />
                    </div>

                    <div className={styles['message_field']}>
                        <h2 className={styles['inp_label']}>message</h2>
                        <textarea
                            className={styles['Message']}
                            name="Message"
                            rows="6"
                            maxLength="3000"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={styles['submit_button']}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
