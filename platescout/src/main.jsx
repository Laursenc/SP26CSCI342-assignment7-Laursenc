import App from './components/App/App.jsx';
import './index.css';

//needed to add in the strictmode and createRoot and Browser Router
//instructions had these blank
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
            <Toaster position="top-right"/>
        </BrowserRouter>
    </StrictMode>
);


