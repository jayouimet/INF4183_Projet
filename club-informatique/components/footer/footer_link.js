import Link from 'next/link';
import styles from './footer_link.module.css';

export default function FooterLink({current, children, ...props}) {
    let classesText = styles.footerLink + (current ? " " + styles.footerLinkCurrent : "");

    return (
        <>
            {
                current ? 
                <span className={classesText} {...props}>
                    {children}
                </span> : 
                <Link className={classesText} {...props}>
                    {children}
                </Link>
            }
        </>
    );
}