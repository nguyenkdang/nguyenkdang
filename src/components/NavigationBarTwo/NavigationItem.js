import React from 'react';
import styles from './navigationItem.module.scss';
import { Link } from 'react-router-dom';
import { LIGHT_CONTRASTED } from './const';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames/bind';

const classNameBuilder = classnames.bind(styles);

export const NavigationItem = ({
  label,
  to,
  highlightOnSelect = true,
  hideOnSelect = false,
}) => {
  const { pathname } = useLocation();
  const isLightContrasted = LIGHT_CONTRASTED[pathname];

  const isCurrentPath = pathname === '/' + to;
  const isHidden = hideOnSelect && isCurrentPath;
  const isHighlighted = highlightOnSelect && isCurrentPath;

  if (isHidden) {
    return null;
  }

  return (
    <div className={styles['container']}>
      <div
        className={classNameBuilder('line', {
          highlighted: isHighlighted,
          'light-contrasted': isLightContrasted,
        })}
      />
      <Link
        className={classNameBuilder('nav-link', {
          'light-contrasted': isLightContrasted,
        })}
        to={to}
      >
        {label}
      </Link>
    </div>
  );
};
