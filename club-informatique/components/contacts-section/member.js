import { Grid } from '@mui/material';
import styles from "./member.module.css";

export default function Member({ memberInfo }) {
    return (
        <>
            <h2>{memberInfo.fullname}</h2>
            <Grid container direction="row">
                <Grid item xs={2}></Grid>
                <Grid xs={2} item>
                    <Grid container direction="column">
                        <Grid item>Courriel : </Grid>
                        <Grid item>Téléphone : </Grid>
                    </Grid>
                </Grid>
                <Grid xs={4} item>
                    <Grid container direction="column">
                        <Grid item>{memberInfo.email}1</Grid>
                        <Grid item>{memberInfo.phone}2</Grid>
                    </Grid>
                </Grid>
                <Grid xs={4}></Grid>
            </Grid>
        </>
    );
}