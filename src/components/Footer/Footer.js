import styles from './footer.module.scss';
import Mylogo from '../../svg/Mylogo';
import { FooterLink } from './FooterLink';

const Footer = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['foot-logo']}>
                <Mylogo width="14vw" />
                <div className={styles['n-back']}></div>
                <div className={styles['d-back']}></div>
            </div>

            <div className={styles['foot-links']}>
                <FooterLink label="home" to="/" />
                <FooterLink label="resume" to="resume" />
                <FooterLink label="projects" to="projects" />
                <FooterLink label="contact" to="contact" />
                <FooterLink
                    label="linkedIn"
                    href="https://www.linkedin.com/in/nguyenkdang/"
                />
                <FooterLink
                    label="github"
                    href="https://github.com/nguyenkdang"
                />
                <FooterLink
                    label="behance"
                    href="https://www.behance.net/nguyenkdang"
                />
                <FooterLink
                    label="instagram"
                    href="https://www.instagram.com/nguwaynedang/"
                    isLast={true}
                />
            </div>
            <div className={styles['foot-copyright']}>
                <h2 className={styles['copyright']}> © Nguyen K. Dang 2021</h2>
            </div>
        </div>
    );
};

export default Footer;
