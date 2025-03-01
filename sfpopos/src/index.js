import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import POPOSList from './components/POPOSList/POPOSList';
import About from './components/About/About';
import POPOSDetails from './components/POPOSDetails/POPOSDetails'; 
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<POPOSList />} /> 
        <Route path="about" element={<About />} />
        <Route path="details/:id" element={<POPOSDetails />} /> 
      </Route>
    </Routes>
  </Router>
);

reportWebVitals();
