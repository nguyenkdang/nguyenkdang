import React from 'react';
import styles from './headerSection.module.scss';
import { DownloadResume } from './DownloadResume';

export const HeaderSection = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <div className={styles['name']}>Nguyen K. Dang</div>
                <div className={styles['school']}>
                    University of California Irvine Graduate
                </div>
            </div>
            <DownloadResume />
        </div>
    );
};
