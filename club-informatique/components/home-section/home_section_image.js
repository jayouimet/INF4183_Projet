import { Grid } from "@mui/material";
import Image from "next/image";

export default function HomeSectionImage({src, alt, ...props}) {
    return (
        <Image 
            fill={true}
            style={{objectFit: "contain"}}
            alt={alt}
            src={src}
            {...props}
        />
    );
}