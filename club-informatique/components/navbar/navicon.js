import Image from "next/image";
import img from "../../assets/uqo_logo_w.png";

export default function NavIcon() {
    return (
        <Image
            src={img}
            alt={"UQO Logo"}
            style={{
                width: "15%",
                height: "20%",
            }}
        />
    );
}