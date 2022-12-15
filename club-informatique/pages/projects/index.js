import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/footer";


export default function Projects() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                Projects
            </div>
            <Footer currentPage={2} />
        </div>
    );
}
