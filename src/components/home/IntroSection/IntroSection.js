import React from 'react';
import { Paint } from './Paint/Paint';
import { HiddenLink } from './HiddenLink/HiddenLink';
import styles from './introSection.module.scss';

export const IntroSection = () => {
    return (
        <div id="intro">
            <div className={styles['title-box']}>
                <h2 className={styles['my-slogan']}>
                    <HiddenLink
                        linkText="in"
                        url="https://www.linkedin.com/in/nguyenkdang/"
                        showClassName={styles['in']}
                    />
                    tuitive{' '}
                    <HiddenLink
                        linkText="be"
                        url="https://www.behance.net/nguyenkdang"
                        showClassName={styles['be']}
                    />
                    autiful di
                    <HiddenLink
                        linkText="git"
                        url="https://github.com/nguyenkdang"
                        showClassName={styles['git']}
                    />
                    al des
                    <HiddenLink
                        linkText="ig"
                        url="https://www.instagram.com/nguwaynedang/"
                        showClassName={styles['ig']}
                    />
                    n
                </h2>
                <h1 className={styles['my-name']}> Nguyen K Dang </h1>
                <h2 className={styles['my-title']}>
                    Software Developer & Visual Designer
                </h2>
            </div>
            <Paint />
        </div>
    );
};
