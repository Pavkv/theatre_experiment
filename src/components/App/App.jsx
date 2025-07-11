import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import {Route, Routes} from "react-router-dom";
import About from "../About/About.jsx";
import Team from "../Team/Team.jsx";
import Performances from "../Performances/Performances.jsx";

export default function App() {
    return (
        <div className="app">
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={<Main/>}
                />
                <Route
                    path="/about"
                    element={<About/>}
                />
                <Route
                    path="/team"
                    element={<Team/>}
                />
                <Route
                    path="/performances"
                    element={<Performances/>}
                />
            </Routes>
            <Footer/>
        </div>
    );
}