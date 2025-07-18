import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './components/App/App.jsx';
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/theatre_experiment/">
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </BrowserRouter>
    </StrictMode>
)
