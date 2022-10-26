import styles from './socialBar.module.scss';
import LogoLinkedIn from '../../../svg/Logo_linkedin';
import LogoBehance from '../../../svg/Logo_behance';
import LogoInstagram from '../../../svg/Logo_instagram';
import LogoGithub from '../../../svg/Logo_github';
import LogoEmail from '../../../svg/Logo_email';
import { LogoLink } from './LogoLink';
import { useState } from 'react';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

const size = '2.2vw';

export const SocialBar = () => {
    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <div className={styles['container']}>
            <div className={styles['social-box']}>
                <LogoLink
                    logo={<LogoLinkedIn width={size} height={size} />}
                    href="https://www.linkedin.com/in/nguyenkdang/"
                    containerClassName={styles['ln-logo']}
                />
                <LogoLink
                    logo={<LogoGithub width={size} height={size} />}
                    href="https://github.com/nguyenkdang"
                    containerClassName={styles['git-logo']}
                />
                <LogoLink
                    logo={<LogoBehance width={size} height={size} />}
                    href="https://www.behance.net/nguyenkdang"
                    containerClassName={styles['be-logo']}
                />
                <LogoLink
                    logo={<LogoInstagram width={size} height={size} />}
                    href="https://www.instagram.com/nguwaynedang/"
                    containerClassName={styles['in-log']}
                />
            </div>
            <div
                className={classNameBuilder('email-box', {
                    unext: isActive,
                    ext: !isActive,
                })}
            >
                <h2 className={styles['my-email']}>nguyenkhdang@gmail.com </h2>
                <span className={styles['em-logo']} onClick={handleToggle}>
                    <LogoEmail width={size} height={size} />
                </span>
            </div>
        </div>
    );
};
