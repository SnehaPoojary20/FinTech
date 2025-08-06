import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './Components/Navbar/Auth.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      {/* <Auth />
      <Navbar/> */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
