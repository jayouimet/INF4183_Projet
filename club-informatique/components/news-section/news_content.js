import { Grid } from "@mui/material";
import NewsTitle from "./news_title";

export default function NewsContent({title, children, ...props}) {
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
            <NewsTitle>{title}</NewsTitle>
            {children}
        </Grid>
    );
}