import styles from "./project_title.module.css";

export default function ProjectTitle({children, ...props}) {
    return (
        <div className={styles.title} {...props}>{children}</div>
    );
}