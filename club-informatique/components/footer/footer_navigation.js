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
                <FooterLink>{currentPage == 0 ? '▸' : ''}Accueil</FooterLink>
                <FooterLink>{currentPage == 1 ? '▸' : ''}Nouveautés</FooterLink>
                <FooterLink>{currentPage == 2 ? '▸' : ''}Contacts</FooterLink>
                <FooterLink>{currentPage == 3 ? '▸' : ''}Projets</FooterLink>
            </Grid>
        </Grid>
    );
}