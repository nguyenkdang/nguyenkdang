import React, { useState } from 'react';
import styles from './projectsSection.module.scss';
import { PROJECTS_DATA } from './const';
import { ProjectsNavigator } from './ProjectsNavigator';
import { Tag } from './Tag';

export const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(2);
    const { name, description, tags, image } = PROJECTS_DATA.find(
        ({ id }) => id === selectedProject
    );

    return (
        <div className={styles['container']}>
            <div className={styles['visual-section']}>
                <img src={image} alt={'project'} className={styles['image']} />
                <ProjectsNavigator
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />
            </div>
            <div className={styles['info-section']}>
                <div className={styles['details']}>
                    <div className={styles['title']}> {name} </div>
                    <div className={styles['description']}> {description} </div>
                </div>
                <div className={styles['useful']}>
                    <div className={styles['tags-section']}>
                        {tags.map((tag, index) => {
                            return <Tag label={tag} key={index} />;
                        })}
                    </div>
                    <div className={styles['link']}>link</div>
                </div>
            </div>
        </div>
    );
};
