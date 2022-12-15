import Link from "next/link";

export default function NavLink({title, href}) {
    return (
        <Link key={href} href={href}>{title}</Link>
    );
}