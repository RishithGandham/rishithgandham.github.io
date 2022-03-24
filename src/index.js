
// react
import React from 'react';
import ReactDOM from 'react-dom';

//css
import './index.css';

//components
import App from './App';
import Skills from './pages/skills/skills.page';
import Projects from './pages/projects/projects.page';
import About from './pages/about/about.page';

//routing
import { Route, Routes, HashRouter } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <App class="app" />
        <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/skills" element={<Skills/>} />
        </Routes>
    </HashRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


