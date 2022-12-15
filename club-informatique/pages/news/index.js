import Footer from '../../components/footer/footer'
import styles from '../../styles/Home.module.css'
import Banner from "../../components/banner/banner";
import Navbar from '../../components/navbar/navbar';

export default function News() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Nouvelles" />
            </div>
            <Footer currentPage={1} />
        </div>
    );
}
