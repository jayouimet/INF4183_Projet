import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer'
import Banner from "../components/banner/banner";
import Navbar from '../components/navbar/navbar';
import ContactSection from "../components/contacts-section/contact_section";


export default function Contacts() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Contacts" />
                <ContactSection />
            </div>
            <Footer currentPage={3} />
        </div>
    );
}
