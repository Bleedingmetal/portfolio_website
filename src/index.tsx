import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* 2. Wrap App and add the basename for your subfolder */}
        <BrowserRouter basename="/portfolio_website">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();