import { lazy, Suspense } from 'react';
import './App.css'

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import MainMenu from './Restaurant/components/orderMenu/MainMenu';
import ProtectedRoute from './protected-route/ProtectedRoute';

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

  return (
    <>
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
