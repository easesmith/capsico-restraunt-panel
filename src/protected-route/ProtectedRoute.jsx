import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isAuthenticated = localStorage.getItem("restaurant-status") === "true";
    console.log("isAuthenticated", isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
