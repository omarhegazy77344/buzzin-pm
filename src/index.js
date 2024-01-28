import * as React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Passes from './pages/Passes/Passes';
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
import Logs from './pages/Logs/Logs';
import Settings from './pages/Settings/Settings';
import Pending from './pages/Pending/Pending';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Passes" element={<Passes />} />
      <Route path="Create" element={<Create />} />
      <Route path="Pending" element={<Pending />} />
      <Route path="Logs" element={<Logs />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="post" element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>,
);


