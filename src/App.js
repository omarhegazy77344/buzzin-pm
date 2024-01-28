import React from 'react';
import Header from './components/Header';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import Dashboard from './pages/Dashboard/Dashboard';
import Passes from './pages/Passes/Passes';
import Create from './pages/Create/Create';
import Pending from './pages/Pending/Pending';
import Logs from './pages/Logs/Logs';
import Settings from './pages/Settings/Settings';
import MyLayout from './layouts/MyLayout';

function App() {
  return (  
    <Admin appBar={Header} layout={MyLayout} dataProvider={restProvider('http://localhost:300')}>
      <Resource name="Dashboard" list={Dashboard} />
      <Resource name="Passes" list={Passes} />
      <Resource name="Create" list={Create} />
      <Resource name="Pending" list={Pending} />
      <Resource name="Logs" list={Logs} />
      <Resource name="Settings" list={Settings} />
    </Admin>
  );
}

export default App;
