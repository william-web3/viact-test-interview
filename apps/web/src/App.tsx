import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AppRouter from './AppRouter';

function App() {
  return (
    <div>
      <ToastContainer toastStyle={{ fontSize: '12px' }} />
      <AppRouter />
    </div>
  );
}

export default App;
