import BannerImg from "./banner_img";
import styles from "./banner.module.css";
import { Grid } from "@mui/material";
import BannerTitle from "./banner_title";

export default function Banner({title}) {
    return (
        <Grid className={styles.containerSpacing} container justifyContent="center" sx={{maxHeight: "8vw"}}>
            <div id={styles.banner}>
                <BannerImg/>
                <BannerTitle title={title}/>
            </div>
        </Grid>
    );
}