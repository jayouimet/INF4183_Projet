import { Grid } from "@mui/material";

export default function HomeSection({children, reversed, ...props}) {
    return (
        <Grid
            container
            direction={reversed ? "row-reverse" : "row"}
            justifyContent={"space-between"}
            alignItems="center"
            columnGap="32px"

            {...props}>
            {children}
        </Grid>
    );
}