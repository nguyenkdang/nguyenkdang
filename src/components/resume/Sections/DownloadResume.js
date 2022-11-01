import React from 'react';
import styles from './downloadResume.module.scss';
import DlButton from '../DlButton';
import rPDF from '../resume.pdf';

export const DownloadResume = () => {
    return (
        <div className={styles['container']}>
            <a href={rPDF} download="Nguyen Dang - Resume.pdf">
                <DlButton size="3.5vw" />
            </a>
        </div>
    );
};
