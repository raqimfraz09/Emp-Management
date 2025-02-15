import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EmployeeManagementApp from './Components/EmployeeManagementApp';
import EmpDetails from './Components/EmpDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Redirect "/" to "/employee" */}
          <Route path="/" element={<Navigate to="/employee" />} />
          
          {/* Wrap Components in JSX */}
          <Route path="/employee" element={<EmployeeManagementApp />} />
          <Route path="/employee/:id" element={<EmpDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
