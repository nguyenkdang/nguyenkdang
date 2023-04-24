import React from 'react';
import styles from './experienceSection.module.scss';
import { Line } from '../Line';
import { Experience } from './Experience';
import { EXPERIENCE } from '../../const';

export const ExperienceSection = (parentStyles) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Experience</div>
      <Line />
      {EXPERIENCE.map(
        ({ from, to, position, organization, location, descriptions }) => {
          return (
            <Experience
              from={from}
              to={to}
              position={position}
              organization={organization}
              location={location}
              descriptions={descriptions}
            />
          );
        }
      )}
    </div>
  );
};
