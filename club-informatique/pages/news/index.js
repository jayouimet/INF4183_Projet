import Footer from '../../components/footer/footer'
import styles from '../../styles/Home.module.css'

export default function News() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                News
            </div>
            <Footer currentPage={1} />
        </div>
    );
}
