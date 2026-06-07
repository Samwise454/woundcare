// App.jsx
    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Nav from './component/Nav';
    import Home from './Home';
    import Footer from './component/Footer';

    function App() {
      return (
        <Routes>
          <Route path="/nav" element={<Nav />} />
          <Route path="/" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      );
    }

    export default App;
