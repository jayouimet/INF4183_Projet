import styles from '../styles/Home.module.css'
import BannerTitle from '../components/banner/banner_title'
import Footer from '../components/footer/footer'


export default function Contacts() {
    return (
        <div className={styles.container}>
            <BannerTitle>Some text</BannerTitle>
            Contacts
            <Footer currentPage={2} />
        </div>
    )
}
