import React, { useState } from 'react';
import styles from './hiddenLink.module.scss';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

export const HiddenLink = ({ linkText, url, showClassName }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            className={classNameBuilder(
                'hidden-link',
                isHovered ? showClassName : 'hidden'
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {linkText}
        </a>
    );
};
