import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import './index.css'

const basename = import.meta.env.MODE === 'development'
    ? '/theatre_experiment/'
    : ''

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={basename}>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </BrowserRouter>
    </StrictMode>
)