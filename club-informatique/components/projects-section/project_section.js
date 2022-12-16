import { Grid } from "@mui/material";
import ProjectList from "./project_list";
import ProjectListTitle from "./project_list_title";
import styles from './project_section.module.css';

export default function ProjectSection({children, ...props}) {
    return (
        <Grid 
            container 
            rowGap={"32px"} 
            direction={"column"} 
            className={styles.container} 
            {...props}>
            <ProjectListTitle>Liste de projets</ProjectListTitle>
            <ProjectList>{children}</ProjectList>
        </Grid>
    );
}