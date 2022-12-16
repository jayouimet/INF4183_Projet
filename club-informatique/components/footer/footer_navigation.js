import FooterLink from "./footer_link";
import { Grid } from '@mui/material'

export default function FooterNavigation({currentPage, ...props}) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="left"
            rowGap="16px"
            {...props}>
            <div>Navigation:</div>
            <Grid
                container
                direction="column"
                rowGap={"4px"}
                justifyContent="left">
                <FooterLink current={currentPage == 0} href="/">{currentPage == 0 ? '▸' : ''}Accueil</FooterLink>
                <FooterLink current={currentPage == 1} href="/news">{currentPage == 1 ? '▸' : ''}Nouveautés</FooterLink>
                <FooterLink current={currentPage == 2} href="/projects">{currentPage == 2 ? '▸' : ''}Projets</FooterLink>
                <FooterLink current={currentPage == 3} href="/contacts">{currentPage == 3 ? '▸' : ''}Contacts</FooterLink>
            </Grid>
        </Grid>
    );
}