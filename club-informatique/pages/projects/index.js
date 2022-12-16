import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Navbar from '../../components/navbar/navbar';
import ProjectSection from "../../components/projects-section/project_section";
import Project from "../../components/projects-section/project";
import ProjectImage from "../../components/projects-section/project_img";
import img from "../../assets/placeholder.gif";
import ProjectContent from "../../components/projects-section/project_content";


export default function Projects() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Projets" />
                <ProjectSection>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Projet 1"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </Project>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Projet 2"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </Project>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Projet 3"} xs={7} xl={7}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </Project>
                </ProjectSection>
            </div>
            <Footer currentPage={2} />
        </div>
    );
}
