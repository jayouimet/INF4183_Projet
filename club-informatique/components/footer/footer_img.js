import Image  from 'next/image';
import img from "../../assets/uqo_logo_w.png";

export default function FooterImg({children, ...props}) {
    return (
        <Image 
            src={img}
            fill={true}
            style={{objectFit: "contain"}}
        />
    );
}