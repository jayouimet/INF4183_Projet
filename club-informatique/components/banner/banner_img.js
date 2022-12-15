import Image from 'next/image';
import img from "../../assets/banner_img.png";
import styles from "./banner.module.css";

export default function BannerImg() {
    return (
        <Image 
            src={img}
            alt="Banner Image"
            style={{
                objectFit: "cover",
                position: "absolute",
                maxHeight: "25vh"
            }}
        />
    );
}