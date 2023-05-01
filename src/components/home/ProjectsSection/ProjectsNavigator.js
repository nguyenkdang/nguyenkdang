import React, { useState, useEffect } from 'react';
import styles from './projectsNavigator.module.scss';
import { ProjectNode } from './ProjectNode';
import { PROJECTS_DATA } from './const';

export const ProjectsNavigator = ({ selectedProject, setSelectedProject }) => {
    const [projectNodes, setProjectNodes] = useState(PROJECTS_DATA);

    useEffect(() => {
        const selectedNode = projectNodes.find(
            (projectNode) => projectNode['id'] === selectedProject
        );
        const remainingNode = projectNodes.filter(
            (projectNode) => projectNode['id'] !== selectedProject
        );

        const timer = setTimeout(() => {
            setProjectNodes([...remainingNode, selectedNode]);
        }, 500);

        return () => clearTimeout(timer);
    }, [projectNodes, selectedProject]);

    return (
        <div className={styles['container']}>
            {projectNodes.map(({ image, id }) => {
                return (
                    <ProjectNode
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        key={id}
                        id={id}
                        image={image}
                    />
                );
            })}
        </div>
    );
};
