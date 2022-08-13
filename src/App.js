import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styles
import './Styles.css'
// import Components
import Navbar from './components/Navbar';
import Home from './Home';
import Forms from './components/Forms';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create"> */}
          <Forms />
          {/* </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
