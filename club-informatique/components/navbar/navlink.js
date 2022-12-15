import Link from "next/link";

export default function NavLink({title, href}) {
    return (
        <Link href={href}>{title}</Link>
    );
}