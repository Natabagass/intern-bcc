import React from 'react';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import Login from './pages/users/Login';
import Home from './pages/auth/dashboard/Homepage';
import PrivateRoute from './routes/PrivateRoute';
import Signup from './pages/users/Signup';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path='/' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
        </Route>
        
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;