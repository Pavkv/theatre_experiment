import Navigation from "../Navigation/Navigation.jsx";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";

export default function Header() {
    return (
        <header className="header">
            <p className="header__logo">Theater Experiment</p>
            <nav className="header__navigation">
                <Navigation />
            </nav>
            <SocialLinks />
        </header>
    );
}