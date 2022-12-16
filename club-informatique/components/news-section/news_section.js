import { Grid } from "@mui/material";
import NewsList from "./news_list";
import styles from './news_section.module.css';

export default function NewsSection({children, ...props}) {
    return (
        <Grid 
            container 
            rowGap={"32px"} 
            direction={"column"} 
            className={styles.container} 
            {...props}>
            <NewsList>{children}</NewsList>
        </Grid>
    );
}