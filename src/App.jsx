import { lazy, Suspense } from 'react';
import './App.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const NotFound = lazy(() => import('./pages/NotFound'));
const Register = lazy(() => import('./Restaurant/pages/Register'));
const ABC = lazy(()=> import('./Restaurant/pages/ABC'))
const RegisterAndLogin = lazy(() => import('./Restaurant/pages/RegisterAndLogin'));
const Reporting = lazy(() => import('./Restaurant/pages/reporting/Reporting'));

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<RegisterAndLogin />} />
            <Route path='/restaurant/register' element={<Register />} />
            <Route path='/restaurant/reporting/*' element={<Reporting />} />
            <Route path='/restaurant/reporting' element={<Reporting />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/abc' element={<ABC />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
