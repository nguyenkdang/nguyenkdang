import React from 'react';
import { Project } from './Project';
import { PROJECTS } from '../../const';
import styles from './projectSection.module.scss';
import { Line } from '../Line';

export const ProjectSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Projects</div>
      <Line />
      {PROJECTS.map(({ year, name, tools, descriptions }) => {
        return (
          <Project
            year={year}
            name={name}
            tools={tools}
            descriptions={descriptions}
          />
        );
      })}
    </div>
  );
};
