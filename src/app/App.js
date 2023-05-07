import React from 'react';
import './App.css';

import HowItWorks from '../howitworks/HowItWorks';
import ContactUs from '../contactus/ContactUs';
import Home from '../home/Home';
import NavigationMenu from '../component/navigationMenu/NavigationMenu';
import Visualizer from '../visualizer/sortingvisualizer/Visualizer';

function App() {
  return (
    <div className="app">
      <NavigationMenu />
      <div className="app-container">
        <Home />
        <HowItWorks />
        <Visualizer />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
