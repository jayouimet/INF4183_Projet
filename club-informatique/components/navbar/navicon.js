import Image from "next/image";

export default function NavIcon() {
    return (
        <Image
            src={"/assets/uqo_logo_w.png"}
            alt={"UQO Logo"}
            width={1000}
            height={1000}
            style={{
                width: "15%",
                height: "20%",
            }}
        />
    );
}