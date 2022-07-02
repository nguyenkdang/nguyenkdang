import styles from './paint.module.scss';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

export const Paint = () => {
  return (
    <div className={styles['paint']}>
      <div className={classNameBuilder('left-paint', 'paint-drip')}> </div>
      <div className={classNameBuilder('middle-paint', 'paint-drip')}> </div>
      <div className={classNameBuilder('right-paint', 'paint-drip')}> </div>
      <div className={styles['top-left-drip']}> </div>
      <div className={styles['top-right-drip']}> </div>
      <div className={styles['paint-drop']}> </div>
    </div>
  );
};
