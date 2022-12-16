import { Grid } from "@mui/material";
import styles from './news_post.module.css';

export default function NewsPost({children, ...props}) {
    return (
        <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="flex-start"
            columnGap="32px"
            className={styles.container}
            {...props}>
            {children}
        </Grid>
    );
}