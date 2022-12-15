import Image from 'next/image';
import img from "../../assets/banner_img.png";
import styles from "./banner.module.css";

export default function BannerImg() {
    return (
        <Image 
            src={img}
            alt="Banner Image"
            fill="true"
            id={styles.banner_img}
        />
    );
}