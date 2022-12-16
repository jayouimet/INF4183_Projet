import styles from "./news_title.module.css";

export default function NewsTitle({children, ...props}) {
    return (
        <h3 className={styles.title} {...props}>{children}</h3>
    );
}