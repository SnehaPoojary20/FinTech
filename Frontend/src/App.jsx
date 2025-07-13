import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Expense from './Components/Expense/Expense';
import Chatbot from './Components/Chatbot/Chatbot';
import Footer from './Components/Footer/Footer';

function App() {
  return (

      <div className="page-container">
        <Navbar />
        <Home />
        <Expense/>
        <Chatbot />
        <Footer />
      </div>
  
  );
}

export default App;

