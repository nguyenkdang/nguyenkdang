import React from 'react';
import styles from './tag.module.scss';

export const Tag = ({ label }) => {
    return <div className={styles['container']}> {label}</div>;
};
