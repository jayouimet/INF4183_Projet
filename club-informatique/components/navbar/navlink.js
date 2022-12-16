import ActiveLink from "./active_link";
import styles from "./navbar.module.css";

export default function NavLink({ title, href }) {
    return (
        <ActiveLink className={styles.link} activeClassName={styles.activeLink} key={href} href={href}>
            {title}
        </ActiveLink>
    );
}