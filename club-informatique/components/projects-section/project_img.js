import { Grid } from "@mui/material";
import Image from "next/image";

export default function ProjectImage({src, alt, ...props}) {
    return (
        <Image 
            style={{
                objectFit: "cover", 
                width: '100%',
                height: '100%'

            }}
            fill={true}
            alt={alt}
            src={src}
            {...props}
        />
    );
}