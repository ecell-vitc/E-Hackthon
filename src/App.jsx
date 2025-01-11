import React from 'react';
import SponsorSection from './components/SponsorSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <SponsorSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;