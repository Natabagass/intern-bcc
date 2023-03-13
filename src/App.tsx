import React, { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom'
import PageLoading from './components/pageLoader/Loading';
import Pembayaran from './pages/pembayaran/Pembayaran';
import { FormProvider } from './context/FormContext';
import AuthRoute from './routes/AuthRoute';
import PrivateRoute from './routes/PrivateRoute';
import { CookiesProvider } from 'react-cookie'
import { PembayaranProvider } from './context/PembayaranContext';
import Profile from './pages/users/auth/Profile';

function App() {
  return (
    <CookiesProvider>
      <FormProvider>
        <PembayaranProvider>
          <div className='app'>
            <Routes>
              <Route element={<SuspenseWrapper />}>
                <Route path='/graha' element={<Graha />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/graha/:id' element={<Booking />} />
                <Route path='/' element={<Home />} />

                <Route element={<AuthRoute />}>
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                </Route>

                <Route element={<PrivateRoute />}>
                  <Route path='/graha/pembayaran/:id' element={<Pembayaran />} />
                  <Route path='/profile' element={<Profile/>} />
                </Route>
              </Route>
            </Routes>
          </div>
        </PembayaranProvider>
      </FormProvider>
    </CookiesProvider>
  );
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<PageLoading />}>
      <Outlet />
    </React.Suspense>
  )
}


const Home = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/dashboard/Homepage")), 1500);
  });
});

const Graha = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/graha/Graha")), 3000);
  });
});

const Booking = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/graha/feature/Booking")), 1500);
  });
});

const Faq = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/faq/Faq")), 1500);
  });
});


const Login = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/users/Login")), 1500);
  });
});

const Signup = lazy(() => {
  return new Promise<{ default: React.ComponentType<any> }>((res) => {
    setTimeout(() => res(import("./pages/users/Signup")), 1500);
  });
});


export default App;