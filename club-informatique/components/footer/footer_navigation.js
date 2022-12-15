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
                justifyContent="left">
                <FooterLink href="/">{currentPage == 0 ? '▸' : ''}Accueil</FooterLink>
                <FooterLink href="/news">{currentPage == 1 ? '▸' : ''}Nouveautés</FooterLink>
                <FooterLink href="/projects">{currentPage == 2 ? '▸' : ''}Projets</FooterLink>
                <FooterLink href="/contacts">{currentPage == 3 ? '▸' : ''}Contacts</FooterLink>
            </Grid>
        </Grid>
    );
}