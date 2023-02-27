import React, { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom'
import PageLoading from './components/pageLoader/Loading';
import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';
const Home = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/dashboard/Homepage")), 1000);
  });
});
const Login = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/users/Login")), 1000);
  });
});

const Signup = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/users/Signup")), 1000);
  });
});

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route element={<SuspenseWrapper />}>
          <Route path='/' element={<Home />} />
          <Route element={<AuthRoute />}>
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
          </Route>

          <Route element={<PrivateRoute />}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <Outlet />
    </React.Suspense>
  )
}


export default App;