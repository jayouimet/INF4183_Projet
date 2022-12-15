import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Navbar from '../../components/navbar/navbar';


export default function Projects() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Projets" />
            </div>
            <Footer currentPage={2} />
        </div>
    );
}
