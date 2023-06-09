import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { ProSidebarProvider } from 'react-pro-sidebar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ProSidebarProvider>
        <App />
    </ProSidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
