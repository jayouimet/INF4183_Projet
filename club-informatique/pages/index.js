import styles from '../styles/Home.module.css'
import Banner from "../components/banner/banner";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeSectionContainer from '../components/home-section/home_section_container';
import HomeSection from '../components/home-section/home_section';
import HomeSectionImage from '../components/home-section/home_section_image';
import img from '../assets/placeholder.gif';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Accueil" />
                <HomeSectionContainer>
                    <HomeSection>
                        <div>Test1</div>
                        <div className={styles.imgSection}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </HomeSection>
                    <HomeSection reversed={true}>
                        <div>Test1</div>
                        <div className={styles.imgSection}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </HomeSection>
                    <HomeSection>
                        <div>Test1</div>
                        <div className={styles.imgSection}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </HomeSection>
                </HomeSectionContainer>
            </div>
            <Footer currentPage={0}/>
        </div>
    );
}
