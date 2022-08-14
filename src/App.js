import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import styles
import './Styles.css'
// import Components
import Navbar from './components/Navbar';
import Home from './Home';
import Forms from './components/Forms';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/forms" exact element={<Forms />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div >

    </BrowserRouter>
  );
}

export default App;
