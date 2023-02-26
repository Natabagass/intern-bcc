import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom'
import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';
const Home = lazy(() => import('./pages/auth/dashboard/Homepage'))
const Login = lazy(() => import('./pages/users/Login'))
const Signup = lazy(() => import('./pages/users/Signup'))

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