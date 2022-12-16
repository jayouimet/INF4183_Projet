import styles from "./project_list_title.module.css";

export default function ProjectListTitle({children, ...props}) {
    return (
        <div className={styles.title} {...props}>{children}</div>
    );
}