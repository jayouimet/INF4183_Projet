import styles from "./banner_title.module.css";
import { Grid } from "@mui/material";

export default function BannerTitle({title}) {
    return (
        <Grid
        container
        justify="flex-end"
        alignItems="center"
        id={styles.title_box}
    >
        <h1>{title}</h1>
    </Grid>
    );
}
  