import styles from "./banner_title.module.css";

export default function BannerTitle(props) {
    return <p className={styles.banner_title}>{props.children}</p>;
}
  