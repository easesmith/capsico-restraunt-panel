import { lazy, Suspense, useEffect } from 'react';
import './App.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import MainMenu from './Restaurant/components/orderMenu/MainMenu';
import ProtectedRoute from './protected-route/ProtectedRoute';
import { useSelector } from 'react-redux';
import BackdropLoader from './components/BackdropLoader';
import useAuth from './protected-route/UserAuth';
import useGetApiReq from './hooks/useGetApiReq';
import usePostApiReq from './hooks/usePostApiReq';
import { readCookie } from './utils/readCookie';

const NotFound = lazy(() => import('./pages/NotFound'));
const Register = lazy(() => import('./Restaurant/pages/Register'));
const ABC = lazy(() => import('./Restaurant/pages/ABC'))
const RegisterAndLogin = lazy(() => import('./Restaurant/pages/RegisterAndLogin'));
const Reporting = lazy(() => import('./Restaurant/pages/reporting/Reporting'));
const Order = lazy(() => import('./Restaurant/pages/Order'))
const OrderHistory = lazy(() => import('./Restaurant/pages/OrderHistory'))
const OrderMenu = lazy(() => import('./Restaurant/pages/orderMenu/OrderMenu'))
const Payout = lazy(() => import('./Restaurant/pages/payout/Payout'))
const Offers = lazy(() => import('./Restaurant/pages/Offers'))
const OutletInfo = lazy(() => import('./Restaurant/pages/OutletInfo'))
const CustomerComplaints = lazy(() => import('./Restaurant/pages/CustomerComplaints'))
const Reviews = lazy(() => import('./Restaurant/pages/Reviews'))
const Items = lazy(() => import('./Restaurant/pages/Items'))
const GSTDeclaration = lazy(() => import('./Restaurant/pages/GSTDeclaration'))
const Charges = lazy(() => import('./Restaurant/pages/Charges'))
const HelpCenter = lazy(() => import('./Restaurant/pages/HelpCenter'))
const OnlineOrdering = lazy(() => import('./Restaurant/pages/online-ordering/OnlineOrdering'))

function App() {
  const { isLoading } = useSelector((state) => state.loading);
  const isAuthenticated = useAuth()

  const { res, fetchData } = useGetApiReq();
  const { res: logoutRes, fetchData: fetchLogoutData, } = usePostApiReq();

  const getStatus = () => {
    fetchData("/restaurant/status");
  }
  const refreshToken = () => {
    fetchData("/restaurant/refresh-token");
  }

  const token = readCookie("userInfo");
  console.log("token", token);

  useEffect(() => {
    getStatus();
    // logout()
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      localStorage.setItem("restaurant-status", res?.data?.isAuthenticated);
      console.log("status response", res?.data?.isAuthenticated);
      !res?.data?.isAuthenticated && refreshToken();
    }
  }, [res])

  useEffect(() => {
    if (logoutRes?.status === 200 || logoutRes?.status === 201) {
      localStorage.setItem("restaurant-status", false);
    }
  }, [logoutRes])

  // res?.data?.isAuthenticated
  return (
    <>
      {isLoading && <BackdropLoader />}
      <Router>
        <Suspense fallback={<div className='w-full h-screen bg-white text-black flex justify-center items-center text-xl font-semibold'>Loading...</div>}>
          <Routes>
            <Route path='/' element={<RegisterAndLogin />} />
            <Route path='/restaurant/register' element={<Register />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/restaurant/online-ordering' element={<OnlineOrdering />} />
              <Route path='/restaurant/reporting/*' element={<Reporting />} />
              <Route path='/restaurant/offers' element={<Offers />} />
              <Route path='/restaurant/outlet-info' element={<OutletInfo />} />
              {/* <Route path='/restaurant/reporting' element={<Reporting />} /> */}
              <Route path='/abc' element={<ABC />} />
              <Route path='/restaurant/orders' element={<Order />} />
              <Route path='/restaurant/order-history' element={<OrderHistory />} />
              <Route path='/restaurant/order-menu' element={<MainMenu />} />
              <Route path='/restaurant/order-menu/edit' element={<OrderMenu />} />
              <Route path='/restaurant/items' element={<Items />} />
              <Route path='/restaurant/gst-declaration' element={<GSTDeclaration />} />
              <Route path='/restaurant/charges' element={<Charges />} />
              <Route path='/restaurant/*' element={<Payout />} />
              <Route path='/restaurant/customer-complaint' element={<CustomerComplaints />} />
              <Route path='/restaurant/reviews' element={<Reviews />} />
              <Route path='/restaurant/help-center' element={<HelpCenter />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>

      <Toaster />
    </>
  )
}

export default App
