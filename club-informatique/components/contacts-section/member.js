import { Grid } from '@mui/material';

export default function Member({ memberInfo }) {
    return (
        <div>
            <h2>{memberInfo.fullname}</h2>
            <Grid container direction="row">
                <Grid xs={4} item>
                    <Grid container direction="column">
                        <Grid item>Courriel : </Grid>
                        <Grid item>Téléphone : </Grid>
                    </Grid>
                </Grid>
                <Grid xs={6} item>
                    <Grid container direction="column">
                        <Grid item>{memberInfo.email}</Grid>
                        <Grid item>{memberInfo.phone}</Grid>
                    </Grid>
                </Grid>
                <Grid xs={2}></Grid>
            </Grid>
        </div>
    );
}