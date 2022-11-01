import styles from './resume.module.scss';
import { HeaderSection } from './Sections/HeaderSection';
import { ContactSection } from './Sections/ContactSection';
import { EducationSection } from './Sections/EducationSection';
import { ProjectSection } from './Sections/ProjectSection/ProjectSection';
import { SkillSection } from './Sections/SkillSection';
import { CourseSection } from './Sections/CourseSection';
import { ExperienceSection } from './Sections/ExperienceSection/ExperienceSection';

export const Resume = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['resume']}>
                <HeaderSection />
                <ContactSection />
                <ExperienceSection />
                <ProjectSection />
                <SkillSection />
                <EducationSection />
                <CourseSection />
            </div>
        </div>
    );
};
