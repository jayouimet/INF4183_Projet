import styles from "./home_section_title.module.css";

export default function HomeSectionTitle({children, ...props}) {
    return (
        <h2 className={styles.title} {...props}>{children}</h2>
    );
}