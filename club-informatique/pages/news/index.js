import Footer from '../../components/footer/footer'
import styles from '../../styles/Home.module.css'
import Banner from "../../components/banner/banner";
import Navbar from '../../components/navbar/navbar';
import NewsSection from '../../components/news-section/news_section';
import NewsPost from '../../components/news-section/news_post';
import NewsContent from '../../components/news-section/news_content';

export default function News() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                <Navbar />
                <Banner title="Nouvelles" />
                <NewsSection>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 1"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 2"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 3"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 4"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 5"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                    <NewsPost>
                        <NewsContent className={styles.contentSection} title={"Titre 6"} xs={12} xl={12}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat lacus justo, et volutpat urna ultrices dictum. Quisque euismod facilisis nunc, nec posuere erat interdum at. Duis sit amet tellus ornare, posuere lorem sit amet, tristique libero. Ut eu venenatis metus, nec accumsan urna. Vestibulum non pharetra nibh, in placerat nisl. Vivamus viverra massa eu ipsum congue, sit amet suscipit nisi feugiat. Maecenas eget mi scelerisque, volutpat orci quis, ornare augue. Sed convallis imperdiet nulla, ut ullamcorper lacus molestie vel. Duis nisl nulla, posuere at lacus et, pretium finibus enim. Vestibulum a vehicula tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in euismod elit.
                        </NewsContent>
                    </NewsPost>
                </NewsSection>
            </div>
            <Footer currentPage={1} />
        </div>
    );
}
