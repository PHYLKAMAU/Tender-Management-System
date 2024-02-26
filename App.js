import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VLogin from './components/vlogin';
import Admin from './components/admin';
import AdminLogin from './components/adminLogin';

function App() {
  const login = () => {
    // Handle login logic
    console.log("Logging in...");
  };

  const signup = () => {
    // Handle sign-up logic
    console.log("Signing up...");
  };

  return (
    <div>
      <Router>
        <div id="home">
          <Link to="/">
            <span className="material-symbols-outlined"> home </span>
          </Link>
        </div>

        <div id="main-container">
          <div id="title"><h1>Tender Management System</h1></div>

          <div id="list">
            <Link to="/vendor-login">Vendor Login</Link>
            <Link to="/admin-login">Admin Login</Link>
          </div>
        </div>

        <header>
          <div id="nav-bar">
            <div className="nav-bottom">
              <div>
                <div className="nav-left">
                  <Link id="logoMain" to="/">
                    <img src="/assets/Resources/logo.png" alt="tms logo" />
                  </Link>
                  <h2>TENDER MANAGEMENT SYSTEM</h2>
                </div>
                <div className="nav-right">
                  <button id="login" onClick={login}>Log in</button>
                  <button id="start" className="start" onClick={signup}>Start for free</button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path='/vendor-login' element={<VLogin />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin' element={<Admin />} /> {/* Route for Admin component */}
        </Routes>

        <main>
          <div className="firstSection">
            <div>
              <div>
                <h1>
                  View Link Tender, <br />
                  Place Link Bid, <br />
                  Work on Project!
                </h1>
                <p>
                  Welcome to our Tender Management System! Our System offers Link
                  centralized location for all your tender information, making it
                  easy to review and compare bids.
                </p>
                <div className="align">
                  <button id="linkEmail" className="start" onClick={signup}>Get Started</button>
                </div>
              </div>

              <div className="none">
                <img src="/assets/Resources/tms.png" alt="" />
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div id="footer">
            <div>
              Thank you for visiting our website!
              <hr />
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;