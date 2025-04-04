import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  
import App from './App.jsx';
import AppContextProvider from './context/AppContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> 
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </HashRouter>
  </StrictMode>
);
