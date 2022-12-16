import styles from "./project_title.module.css";

export default function ProjectTitle({children, ...props}) {
    return (
        <h3 className={styles.title} {...props}>{children}</h3>
    );
}