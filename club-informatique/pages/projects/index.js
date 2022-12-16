import styles from "../../styles/Home.module.css";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Navbar from '../../components/navbar/navbar';
import ProjectSection from "../../components/projects-section/project_section";
import Project from "../../components/projects-section/project";
import ProjectImage from "../../components/projects-section/project_img";
import img from "../../public/assets/placeholder.gif";
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
                            <p>Une maquette d&apos;un site web pour le club d&apos;informatique, aussi développé dans le cadre du cours d&apos;interface personne machine - INF4183. Le projet et en début de développement et le back-end n&apos;est pas encore complètement fonctionnel en date du 16 décembre 2022.</p>
                            <p>Auteur(s): Jérémie Ouimet et Francis Painchaud<br />
                                Source: <a className={styles.outsideLink} href="https://github.com/jayouimet/INF4183_Projet">https://github.com/jayouimet/INF4183_Projet</a></p>
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"} />
                        </div>
                    </Project>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Framework PHP - INF4533_Blog"} xs={7} xl={7}>
                            <p>INF4533_Blog est un site internet fait dans le cadre du cours d&apos;introduction au technologies web. Il fut réalisé sur un framework PHP fait maison qui permet un routing sécuritaire, l&apos;utilisation des technologies MVC, des pages découpables, un connecteur base de données MySQL personnalisé et plusieurs autres fonctionnalités.</p>
                            <p>Auteur(s): Jérémie Ouimet et Francis Painchaud<br />
                                Source: <a className={styles.outsideLink} href="https://github.com/jayouimet/INF4533_Blog">https://github.com/jayouimet/INF4533_Blog</a></p>
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"} />
                        </div>
                    </Project>
                    <Project>
                        <ProjectContent className={`${styles.contentSection} ${styles.text}`} title={"Map pour optimiser l&apos;environnement - Prog II"} xs={7} xl={7}>
                            <p>Map_II est un projet de fin de session pour le cours de Programmation II à l&apos;UQO. Son but est de déterminer le chemin le plus cours pour se rendre à destination et de calculer le niveau environnemental de chaque option.</p>
                            <p>Auteur(s): Jérémie Ouimet, Francis Painchaud, William Goulet et André Pinel<br />
                                Source: <a className={styles.outsideLink} href="https://github.com/jayouimet/Map_II">https://github.com/jayouimet/Map_II</a></p>
                        </ProjectContent>
                        <div className={styles.imgSection} xs={"auto"} xl={"auto"}>
                            <ProjectImage src={img} alt={"PlaceHolderImg"} />
                        </div>
                    </Project>
                </ProjectSection>
            </div>
            <Footer currentPage={2} />
        </div>
    );
}
