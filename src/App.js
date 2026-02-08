import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import Home from './pages/Home';
import Approach from './pages/Approach';
import Values from './pages/Values';
import Process from './pages/Process';
import Centers from './pages/Centers';
import Contact from './pages/Contact';
import Universities from './pages/Universities'; // ADD THIS LINE
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/values" element={<Values />} />
          <Route path="/process" element={<Process />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/universities" element={<Universities />} /> {/* ADD THIS LINE */}
        </Routes>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  );
}

export default App;