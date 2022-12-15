import { Grid } from "@mui/material";

export default function HomeSectionContainer({children, ...props}) {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowGap="16px"
            {...props}>
            {children}
        </Grid>
    );
}