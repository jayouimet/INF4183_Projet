import { Grid } from "@mui/material";
import styles from "./home_section_container.module.css";

export default function HomeSectionContainer({children, ...props}) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowGap="16px"
            className={styles.container}
            {...props}>
            {children}
        </Grid>
    );
}