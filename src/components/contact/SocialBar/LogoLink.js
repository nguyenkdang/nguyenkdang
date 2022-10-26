import styles from './logoLink.module.scss';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

export const LogoLink = ({ logo, href, containerClassName }) => {
    return (
        <div className={classNameBuilder('container', containerClassName)}>
            <a href={href} target="_blank" rel="noreferrer">
                {logo}
            </a>
        </div>
    );
};
