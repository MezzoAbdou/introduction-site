import logo from './logo.svg';
import './App.css';
import './pages/Piano';
import { Outlet, Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Piano from './pages/Piano';
import Home from './pages/Home';


function App() {
  return (
    <div >
    <Router>
      <Routes>
    
      
        
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/piano" element={<Piano />} />
            
      </Routes>
    </Router>
    </div>
  );
}

export default App;
