import { Grid } from "@mui/material";
import ProjectTitle from "./project_title";

export default function ProjectContent({title, children, ...props}) {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems="flex-start"
            rowGap="16px"
            xs="auto"
            xl="auto"
            {...props}>
            <ProjectTitle>{title}</ProjectTitle>
            {children}
        </Grid>
    );
}