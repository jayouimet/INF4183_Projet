import Image from 'next/image';
import img from "../../public/assets/banner_img.png";

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