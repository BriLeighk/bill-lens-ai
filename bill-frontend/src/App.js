import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillForm from './components/BillForm';
import BillDashboard from './components/BillDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route to the main page */}
                    <Route path="/" element={<BillForm />} />
                    {/* Route to the dashboard on submission of form */}
                    <Route path="/dashboard" element={<BillDashboard />} />
                </Routes>
                <footer className="App-footer">
                    <div className="footer-content">
                        <div className="google-form-container">
                            
                        </div>
                        <p className="trademark">@ Bri Kirchgessner | Ayen Monasha | Tridhatri Vallamkondu</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;