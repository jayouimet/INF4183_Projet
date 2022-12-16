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
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Maquette Site Web - Club informatique"} xs={7} xl={7}>
                            <p>Une maquette d'un site web pour le club d'informatique, aussi développé dans le cadre du cours d'interface personne machine - INF4183. Le projet et en début de développement et le back-end n'est pas encore complètement fonctionnel en date du 16 décembre 2022.<br/>
                            <p>Auteur(s): Jérémie Ouimet et Francis Painchaud</p>
                            Source: <a className={styles.outsideLink} href="https://github.com/jayouimet/INF4183_Projet">https://github.com/jayouimet/INF4183_Projet</a></p> 
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"}/>
                        </div>
                    </Project>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Framework PHP - INF4533_Blog"} xs={7} xl={7}>
                            <p>INF4533_Blog est un site internet fait dans le cadre du cours d'introduction au technologies web. Il fut réalisé sur un framework PHP fait maison qui permet un routing sécuritaire, l'utilisation des technologies MVC, des pages découpables, un connecteur base de données MySQL personnalisé et plusieurs autres fonctionnalités.</p>
                            <p>Auteur(s): Jérémie Ouimet et Francis Painchaud<br/>
                            Source: <a className={styles.outsideLink} href="https://github.com/jayouimet/INF4533_Blog">https://github.com/jayouimet/INF4533_Blog</a></p>
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
