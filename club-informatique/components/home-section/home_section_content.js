import { Grid } from "@mui/material";
import HomeSectionTitle from "./home_section_title";

export default function HomeSectionContent({title, children, ...props}) {
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
            <HomeSectionTitle>{title}</HomeSectionTitle>
            {children}
        </Grid>
    );
}