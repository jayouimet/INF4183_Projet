import styles from "./news_title.module.css";

export default function NewsTitle({children, ...props}) {
    return (
        <div className={styles.title} {...props}>{children}</div>
    );
}