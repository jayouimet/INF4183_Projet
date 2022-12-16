import FooterLink from "./footer_link";
import { Grid } from '@mui/material'
import FooterNavigation from "./footer_navigation";
import styles from './footer.module.css'
import FooterImg from "./footer_img";

export default function Footer({currentPage, ...props}) {
    return (
        <div className={styles.footer} {...props}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnGap="32px">
                <Grid xm={2} xs={2} item
                    container
                    direction="column"
                    justifyContent="left"
                    alignItems="left">
                    <div className={styles.logoContainer}>
                        <FooterImg/>
                    </div>
                    <div>
                        <p>Francis Painchaud</p>
                        <p>Jérémie Ouimet</p>
                    </div>
                    <p>Date de mise à jour : 16 Décembre 2022</p>
                </Grid>
                <FooterNavigation currentPage={currentPage} xm={2} xs={2}/>
            </Grid>
        </div>
    );
}