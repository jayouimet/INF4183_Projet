import { Grid } from "@mui/material";
import NewsPost from './news_post';
import NewsContent from './news_content';
import NewsImage from './news_image';
import img from '../../assets/placeholder.gif';
import styles from './news_article.module.css';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function NewsArticle({id, title, content, ...props}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = (e) => {
        setIsExpanded(isExpanded => !isExpanded);
    }

    return (
        <div className={styles.newsArticle} key={id} onClick={handleExpand}>
            <Grid 
                container
                direction={"row"}
                rowGap={"16px"}
                className={styles.container}>
                <NewsPost>
                    <NewsContent className={isExpanded ? styles.contentSectionExpanded : styles.contentSection} title={title} xs={9} xl={9}>
                        {content}
                    </NewsContent>
                    <div className={styles.newsImgSection} xs={"auto"} xl={"auto"}>
                        <NewsImage src={img} alt={"PlaceHolderImg"}/>
                    </div>
                </NewsPost>
                {
                    isExpanded ? 
                    <ExpandLessIcon className={styles.expandIcon}/> : 
                    <ExpandMoreIcon className={styles.expandIcon}/>
                }
            </Grid>
        </div>
    );
}