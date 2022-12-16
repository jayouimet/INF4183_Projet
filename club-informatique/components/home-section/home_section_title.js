import styles from "./home_section_title.module.css";

export default function HomeSectionTitle({children, ...props}) {
    return (
        <div className={styles.title} {...props}>{children}</div>
    );
}