
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardComponent from './component/DashboardComponent';
import LoginComponent from './component/Login';
import RegisterComponent from './component/RegisterComponent';
import VerifiedComponent from './component/VerifiedComponent';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path='/dashboard' element={<DashboardComponent/>}/>
        <Route path='/verify/:id' element={<VerifiedComponent/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
