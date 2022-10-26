import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footerLink.module.scss';
import classnames from 'classnames/bind';

const classNameBuilder = classnames.bind(styles);

export const FooterLink = ({ label, to, href, isLast }) => {
    return (
        <div className={classNameBuilder('container', { last: isLast })}>
            {href ? (
                <a
                    className={styles['foot-link']}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {label}
                </a>
            ) : (
                <Link className={styles['foot-link']} to={to}>
                    {label}
                </Link>
            )}
            <div className={styles['underline']}></div>
        </div>
    );
};
