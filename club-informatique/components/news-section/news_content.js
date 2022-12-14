import { Grid } from "@mui/material";
import NewsTitle from "./news_title";

export default function NewsContent({title, children, ...props}) {
    return (
        <Grid
            container item
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems="flex-start"
            xs="auto"
            xl="auto"
            {...props}>
            <NewsTitle>{title}</NewsTitle>
            {children}
        </Grid>
    );
}