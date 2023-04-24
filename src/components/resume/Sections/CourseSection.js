import styles from './courseSection.module.scss';
import { COURSES } from '../const';
import { Line } from './Line';

export const CourseSection = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>Relevant Courses</div>
      <Line />
      <div className={styles['courses']}>
        {COURSES.map((courseRow) => (
          <div>
            {courseRow.map((course) => (
              <span className={styles['course']}> {course} </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
