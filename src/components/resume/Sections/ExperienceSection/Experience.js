import styles from './experience.module.scss';

export const Experience = ({
    from,
    to,
    position,
    organization,
    location,
    descriptions,
}) => {
    return (
        <div className={styles['container']}>
            <div className={styles['date']}> {`${from}-${to}`}</div>
            <div className={styles['experience']}>
                <span className={styles['title']}>
                    {`${position}, ${organization}`}
                </span>
                <span className={styles['location']}> {location}</span>{' '}
                <ul className={styles['descriptions']}>
                    {descriptions.map((description) => (
                        <li>
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
