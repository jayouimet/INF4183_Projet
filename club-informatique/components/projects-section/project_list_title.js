import styles from "./project_list_title.module.css";

export default function ProjectListTitle({children, ...props}) {
    return (
        <h2 className={styles.title} {...props}>{children}</h2>
    );
}