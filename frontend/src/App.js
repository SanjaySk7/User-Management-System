import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ViewUsers from './pages/ViewUsers';
import AddUsers from './pages/AddUsers';

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <button
          className="navbar-button"
          onClick={() => navigate('/')}
        >
          View Users
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('/add')}
        >
          Add Users
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ViewUsers />} />
          <Route path="/add" element={<AddUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
