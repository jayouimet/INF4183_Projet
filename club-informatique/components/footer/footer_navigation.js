import FooterLink from "./footer_link";

export default function FooterNavigation() {
    return (
        <div>
            <div>Navigation:</div>
            <div>
                <FooterLink>Accueil</FooterLink>
                <FooterLink>Nouveautés</FooterLink>
                <FooterLink>Contacts</FooterLink>
                <FooterLink>Projets</FooterLink>
            </div>
        </div>
    );
}