import styles from '../styles/Home.module.css'
import Banner from "../components/banner/banner";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HomeSectionContainer from '../components/home-section/home_section_container';
import HomeSection from '../components/home-section/home_section';
import HomeSectionImage from '../components/home-section/home_section_image';
import img from '../assets/placeholder.gif';
import HomeSectionContent from '../components/home-section/home_section_content';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar isMainPage />
                <Banner title="Accueil" />
                <HomeSectionContainer>
                    <HomeSection>
                        <HomeSectionContent className={`${styles.contentSection} ${styles.text}`} title={"À PROPOS"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </HomeSectionContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </HomeSection>
                    <HomeSection>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                        <HomeSectionContent className={`${styles.contentSection} ${styles.text}`} title={"BUT"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </HomeSectionContent>
                    </HomeSection>
                    <HomeSection>
                        <HomeSectionContent className={`${styles.contentSection} ${styles.text}`} title={"AUTRE"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </HomeSectionContent>
                        <div className={styles.imgSection} xs={4} xl={4}>
                            <HomeSectionImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </HomeSection>
                </HomeSectionContainer>
            </div>
            <Footer currentPage={0}/>
        </div>
    );
}
