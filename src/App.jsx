import { lazy, Suspense, useEffect } from "react";
import "./App.css";

import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BackdropLoader from "./components/BackdropLoader";
import { Toaster } from "./components/ui/sonner";
import useGetApiReq from "./hooks/useGetApiReq";
import usePostApiReq from "./hooks/usePostApiReq";
import PaymentPage from "./pages/PaymentPage";
import ProtectedRoute from "./protected-route/ProtectedRoute";
import AddMenu from "./Restaurant/components/menu/AddMenu";
import MenuPage from "./Restaurant/components/menu/Menu";
import UpdateMenu from "./Restaurant/components/menu/UpdateMenu";
import MainMenu from "./Restaurant/components/orderMenu/MainMenu";
import Metrics from "./Restaurant/metrics/Metrics";
import EarningDetails from "./Restaurant/pages/payout-section/EarningDetails";
import PayoutSection from "./Restaurant/pages/payout-section/PayoutSection";
import RestaurantEarningHistory from "./Restaurant/pages/payout-section/RestaurantEarningHistory";
import { readCookie } from "./utils/readCookie";

const CreateOffer = lazy(() => import("./Restaurant/pages/offers/CreateOffer"));
const UpdateOffer = lazy(() => import("./Restaurant/pages/offers/UpdateOffer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./Restaurant/pages/Register"));
const ABC = lazy(() => import("./Restaurant/pages/ABC"));
const RegisterAndLogin = lazy(() =>
  import("./Restaurant/pages/RegisterAndLogin")
);
const Reporting = lazy(() => import("./Restaurant/pages/reporting/Reporting"));
const Order = lazy(() => import("./Restaurant/pages/Order"));
const OrderHistory = lazy(() => import("./Restaurant/pages/OrderHistory"));
const OrderMenu = lazy(() => import("./Restaurant/pages/orderMenu/OrderMenu"));
const Payout = lazy(() => import("./Restaurant/pages/payout/Payout"));
const Offers = lazy(() => import("./Restaurant/pages/offers/Offers"));
const OutletInfo = lazy(() => import("./Restaurant/pages/OutletInfo"));
const CustomerComplaints = lazy(() =>
  import("./Restaurant/pages/complaint/CustomerComplaints")
);
const Reviews = lazy(() => import("./Restaurant/pages/Reviews"));
const Items = lazy(() => import("./Restaurant/pages/Items"));
const GSTDeclaration = lazy(() => import("./Restaurant/pages/GSTDeclaration"));
const Charges = lazy(() => import("./Restaurant/pages/Charges"));
const HelpCenter = lazy(() => import("./Restaurant/pages/HelpCenter"));
const OnlineOrdering = lazy(() =>
  import("./Restaurant/pages/online-ordering/OnlineOrdering")
);

function App() {
  const { isLoading } = useSelector((state) => state.loading);

  // toast.success("hello this is success toast");
  const { res, fetchData } = useGetApiReq();
  const { res: refreshRes, fetchData: fetchRefreshData } = usePostApiReq();
  const { res: logoutRes, fetchData: fetchLogoutData } = usePostApiReq();

  const getStatus = () => {
    fetchData("/restaurant/status");
  };

  const token = readCookie("userInfo");

  const refreshToken = () => {
    fetchRefreshData("/restaurant/refresh-token");
  };

  const logout = () => {
    fetchLogoutData("/restaurant/logout-all", {
      phone: token?.phone,
      role: "restaurant",
    });
  };

  useEffect(() => {
    getStatus();
  }, []);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
       Cookies.set("restaurant-status", `${res?.data?.isAuthenticated}`);
      console.log("status response", res);
      res?.data?.shouldLoggOut && logout();
      !res?.data?.isAuthenticated && refreshToken();
    }
  }, [res]);

  useEffect(() => {
    if (refreshRes?.status === 200 || refreshRes?.status === 201) {
      // console.log("refreshRes", refreshRes);
      Cookies.set("restaurant-status", true);
      window.location.reload();
    }
  }, [refreshRes]);

  useEffect(() => {
    if (logoutRes?.status === 200 || logoutRes?.status === 201) {
      Cookies.set("restaurant-status", "false");
      Cookies.remove("userInfo");
      // window.location.reload();
    }
  }, [logoutRes]);

  // on:
  // order_status_updated - 2 on
  // order - ready - response; - 3 on
  // new_order_received; 1
  // get - orders;

  // emit: update_order_status - confirmed; 2
  // update_order_status - rejected; 2
  // update_order_status - not - confirmed; 2
  // mark - order - ready; 3

  // update_restaurant_status;

  // res?.data?.isAuthenticated
  return (
    <>
      {isLoading && <BackdropLoader />}
      <Router>
        <Suspense
          fallback={
            <div className="w-full h-screen bg-white text-black flex justify-center items-center text-xl font-semibold">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<RegisterAndLogin />} />
            <Route path="/restaurant/register" element={<Register />} />
            <Route
              path="/restaurant/online-ordering"
              element={<OnlineOrdering />}
            />

            <Route path="/restaurant/outlet-info" element={<OutletInfo />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/restaurant/reporting/*" element={<Reporting />} />
              <Route path="/restaurant/offers" element={<Offers />} />
              {/* <Route path='/restaurant/reporting' element={<Reporting />} /> */}
              <Route path="/abc" element={<ABC />} />
              <Route path="/restaurant/orders" element={<Order />} />
              <Route
                path="/restaurant/order-history"
                element={<OrderHistory />}
              />
              <Route path="/restaurant/order-menu" element={<MainMenu />} />
              <Route
                path="/restaurant/order-menu/edit"
                element={<MenuPage />}
              />
              <Route
                path="/restaurant/:restaurantId/addmenu"
                element={<AddMenu />}
              />
              <Route
                path="/restaurant/:restaurantId/updateMenu"
                element={<UpdateMenu />}
              />
              {/* <Route
                path="/restaurant/order-menu/edit"
                element={<OrderMenu />}
              /> */}
              <Route path="/restaurant/items" element={<Items />} />
              <Route
                path="/restaurant/gst-declaration"
                element={<GSTDeclaration />}
              />
              <Route path="/restaurant/charges" element={<Charges />} />
              {/* <Route path="/restaurant/*" element={<Payout />} /> */}
              <Route
                path="/restaurant/customer-complaint"
                element={<CustomerComplaints />}
              />
              <Route path="/restaurant/reviews" element={<Reviews />} />
              <Route path="/restaurant/help-center" element={<HelpCenter />} />
              <Route
                path="/restaurant/offers/create"
                element={<CreateOffer />}
              />
              <Route
                path="/restaurant/offers/:id/update"
                element={<UpdateOffer />}
              />
              <Route path="/restaurant/payout" element={<PayoutSection />} />
              <Route
                path="/restaurant/payout/:payoutId"
                element={<EarningDetails />}
              />
              <Route
                path="/restaurant/payout/earnings-history"
                element={<RestaurantEarningHistory />}
              />
              <Route
                path="/restaurant/metrics"
                element={<Metrics />}
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>

      <Toaster />
    </>
  );
}

export default App;
