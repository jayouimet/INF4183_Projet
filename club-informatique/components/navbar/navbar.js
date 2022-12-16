import NavLink from "./navlink";
import styles from "./navbar.module.css";
import { Grid, Item } from "@mui/material";
import NavIcon from "./navicon";

export default function Navbar() {
    const links = [
        { "href": "/", "title": "Accueil" },
        { "href": "/news", "title": "Nouvelles" },
        { "href": "/projects", "title": "Projets" },
        { "href": "/contacts", "title": "Contacts" }
    ];

    const linksList = links.map(function (obj) {
        return (
            <Grid container justifyContent="flex-end" item xs={12 / links.length}>
                <NavLink href={obj.href} title={obj.title} />
            </Grid>
        );
    });

    return (
        <Grid container id={styles.navbar}>
            <Grid container className={styles.navbarContent}>
                <Grid container xs={7} alignItems="center" justifyContent="space-around">
                    <Grid item xs={12}>
                        <NavIcon />
                    </Grid>
                </Grid>
                <Grid container xs={5} justifyContent="flex-end" alignItems="center">
                    {linksList}
                </Grid>
            </Grid>
        </Grid>
    );
}
