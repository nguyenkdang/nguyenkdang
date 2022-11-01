import { SKILLS } from '../const';
import { Line } from './Line';
import styles from './skillSection.module.scss';

export const SkillSection = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['header']}>Relevant Skills</div>
            <Line />
            <div className={styles['skills']}>
                {SKILLS.map((skillRow) => (
                    <div>
                        {skillRow.map((skill) => (
                            <span className={styles['skill']}> {skill} </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
