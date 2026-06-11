// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './component/Nav';
    import Home from './Home';
    import Footer from './component/Footer';
    import Capture from './Capture';
    import Analyze from './Analyze';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Capture" element={<Capture />} />
          <Route path="/Analyze" element={<Analyze />} />
        </Routes>
      );
    }

    export default App;
