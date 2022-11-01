import styles from './contactSection.module.scss';
import { SOCIAL_LINKS } from '../../const';

const { gitHub, linkedIn } = SOCIAL_LINKS;

export const ContactSection = () => {
    return (
        <div className={styles['container']}>
            <div>
                <span className={styles['header']}>Phone</span> 408-513-7511
            </div>
            <div>
                <span className={styles['header']}>Email</span>
                nguyenkhdang@gmail.com
            </div>
            <div>
                <span className={styles['header']}>Repository</span>
                <a
                    className={styles['link']}
                    href={gitHub}
                    target="_blank"
                    rel="noreferrer"
                >
                    github.com/nguyenkdang
                </a>
            </div>
            <div>
                <span className={styles['header']}>Linkedin</span>
                <a
                    className={styles['link']}
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                >
                    linkedin.com/in/nguyenkdang
                </a>
            </div>
        </div>
    );
};
