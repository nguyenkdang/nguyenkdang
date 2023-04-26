import React, { useState } from 'react';
import styles from './projectNode.module.scss';
import classNames from 'classnames/bind';

const classNameBuilder = classNames.bind(styles);

export const ProjectNode = ({
    selectedProject,
    setSelectedProject,
    image,
    id,
}) => {
    const [isPressedDown, setIsPressedDown] = useState(false);
    const isCurrentlySelected = id === selectedProject;

    const handleClick = () => {
        setSelectedProject(id);
        setIsPressedDown(false);
    };

    const handleMouseDown = () => {
        setIsPressedDown(true);
    };

    return (
        <div
            className={classNameBuilder('container', {
                pressed: isPressedDown,
                selected: isCurrentlySelected,
            })}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseLeave={() => {
                setIsPressedDown(false);
            }}
        >
            <div className={styles['label']}> </div>
            <img src={image} alt={'project'} className={styles['image']} />
        </div>
    );
};
