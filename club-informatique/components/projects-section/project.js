import { Grid } from "@mui/material";

export default function Project({children, ...props}) {
    return (
        <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            alignItems="flex-start"
            columnGap="32px"
            {...props}>
            {children}
        </Grid>
    );
}