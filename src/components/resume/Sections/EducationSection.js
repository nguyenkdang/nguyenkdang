import React from 'react';
import styles from './educationSection.module.scss';
import { Line } from './Line';

export const EducationSection = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>Education</div>
            <Line />
            <div className={styles['education']}>
                <span className={styles['year']}> 2016 - 2020 </span>
                <span className={styles['college']}>
                    University of California Irvine
                </span>
                <span className={styles['major']}>
                    Information & Computer Science
                </span>
            </div>
        </div>
    );
};
