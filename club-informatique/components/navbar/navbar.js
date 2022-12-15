import NavLink from "./navlink";
import styles from "./navbar.module.css";
import { Grid } from "@mui/material";

export default function Navbar() {
    const links = [
        { "href": "/", "title": "Accueil" },
        { "href": "/news", "title": "Nouvelles" },
        { "href": "/projects", "title": "Projets" },
        { "href": "/contacts", "title": "Contacter-nous" }
    ];

    const linksList = links.map(function (obj) {
        return <NavLink href={obj.href} title={obj.title} />;
    });

    return (
        <Grid container id={styles.navbar}>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={8} justifyContent="right">
                {linksList}
            </Grid>
        </Grid>
    );
}
