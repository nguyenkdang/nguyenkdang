import styles from './navigationBar.module.scss';
import { NavigationItem } from './NavigationItem';

export const NavigationBar = () => {
  return (
    <div className={styles['container']}>
      <NavigationItem label="home" to="" hideOnSelect={true} />
      <NavigationItem label="resume" to="resume" />
      <NavigationItem label="projects" to="projects" />
      <NavigationItem label="contact" to="contact" />
    </div>
  );
};
