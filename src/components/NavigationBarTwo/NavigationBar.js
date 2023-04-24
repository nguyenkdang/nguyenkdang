import styles from './navigationBar.module.scss';
import { NavigationItem } from './NavigationItem';
import { useScrollData } from '../../hooks/useScrollData';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

export const NavigationBar = () => {
  const { scrollDirection } = useScrollData();
  const isScrollingUp = scrollDirection > 0;

  return (
    <div className={classNameBuilder('container', { show: isScrollingUp })}>
      <NavigationItem label="home" to="" hideOnSelect={true} />
      <NavigationItem label="resume" to="resume" />
      <NavigationItem label="projects" to="projects" />
      <NavigationItem label="contact" to="contact" />
    </div>
  );
};
