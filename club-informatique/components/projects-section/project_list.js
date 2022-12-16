import { Grid } from "@mui/material";

export default function ProjectList({children, ...props}) {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent={"space-between"}
            alignItems="flex-start"
            rowGap="32px"
            {...props}>
            {children}
        </Grid>
    );
}