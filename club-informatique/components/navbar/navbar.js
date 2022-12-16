import NavLink from "./navlink";
import styles from "./navbar.module.css";
import { Grid, Item, useTheme, IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NavIcon from "./navicon";
import { useState, useContext } from 'react';
import { ColorModeContext } from "../../pages/_app";
import Link from "next/link";

export default function Navbar({isMainPage, ...props}) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    const links = [
        { "href": "/", "title": "Accueil" },
        { "href": "/news", "title": "Nouvelles" },
        { "href": "/projects", "title": "Projets" },
        { "href": "/contacts", "title": "Contacts" }
    ];

    const linksList = links.map(function (obj) {
        return (
            <Grid item xs={12 / links.length} key={obj.title}>
                <NavLink href={obj.href} title={obj.title} />
            </Grid>
        );
    });

    return (
        <Grid container id={styles.navbar}>
            <Grid item className={styles.navbarContent}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={5}>
                        <Grid container alignItems="center" justifyContent="space-around">
                            <Grid item xs={12}>{isMainPage ? <NavIcon /> : <Link href="/"><NavIcon /></Link>}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justifyContent="flex-end" alignItems="center">
                            {linksList}
                        </Grid>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
