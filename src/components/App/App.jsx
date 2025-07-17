import {useEffect, useState} from "react";
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import {Route, Routes} from "react-router-dom";
import About from "../About/About.jsx";
import Team from "../Team/Team.jsx";
import Performances from "../Performances/Performances.jsx";
import Media from "../Media/Media.jsx";

export default function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 879);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setMobileMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

    return (
        <div className="app">
            <Header isMobile={isMobile} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>
            <div className={`app__content ${isMobileMenuOpen ? 'blurred' : ''}`}
                 onClick={isMobileMenuOpen ? toggleMobileMenu : null}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About isMobile={isMobile}/>}/>
                    <Route path="/team" element={<Team isMobile={isMobile}/>}/>
                    <Route path="/performances" element={<Performances isMobile={isMobile}/>}/>
                    <Route path="/media" element={<Media isMobile={isMobile}/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}