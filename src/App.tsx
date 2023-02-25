import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import './App.css';
import Login from './pages/users/Login';
import Home from './pages/auth/dashboard/Homepage';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path='/' element={<Login/>} />
        </Route>
        
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;