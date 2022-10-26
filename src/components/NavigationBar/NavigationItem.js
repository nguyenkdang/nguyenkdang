import React from 'react';
import styles from './navigationItem.module.scss';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

const classNameBuilder = classnames.bind(styles);

export const NavigationItem = ({
    label,
    to,
    highlightOnSelect = true,
    hideOnSelect = false,
}) => {
    const location = useLocation();
    const { pathname } = location;

    const isCurrentPath = pathname === '/' + to;
    const isHidden = hideOnSelect && isCurrentPath;
    const isHighlighted = highlightOnSelect && isCurrentPath;

    return (
        <span className={styles['container']}>
            {isHidden ? undefined : (
                <Link
                    className={classNameBuilder('nav-link', {
                        highlighted: isHighlighted,
                    })}
                    to={to}
                >
                    {label}
                </Link>
            )}
        </span>
    );
};
