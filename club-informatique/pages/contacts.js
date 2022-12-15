import styles from '../styles/Home.module.css'
import BannerTitle from '../components/banner/banner_title'
import Footer from '../components/footer/footer'


export default function Contacts() {
    return (
        <>
            <BannerTitle>Some text</BannerTitle>
            Contacts
            <Footer currentPage={3} />
        </>
    )
}
