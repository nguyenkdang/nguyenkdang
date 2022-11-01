import React from 'react';
import styles from './project.module.scss';

export const Project = ({ year, name, tools = [], descriptions = [] }) => {
    return (
        <div className={styles['container']}>
            <div className={styles['year']}>{year}</div>
            <div className={styles['project']}>
                <div className={styles['project-title']}>{name}</div>
                <div className={styles['project-tool']}>
                    Tool used -{' '}
                    {tools.map((tool) => (
                        <span className={styles['tool']}> {tool} </span>
                    ))}
                </div>
                <ul>
                    {descriptions.map((description) => (
                        <li>
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
