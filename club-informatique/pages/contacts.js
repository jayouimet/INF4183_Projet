import styles from '../styles/Home.module.css'
import BannerTitle from '../components/banner/banner_title'
import Footer from '../components/footer/footer'


export default function Contacts() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <BannerTitle>Some text</BannerTitle>
                Contacts
            </div>
            <Footer currentPage={3} />
        </div>
    )
}
