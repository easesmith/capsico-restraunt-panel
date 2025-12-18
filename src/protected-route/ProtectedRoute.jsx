import { SocketProvider } from '@/socket';
import { readCookie } from '@/utils/readCookie';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
const isAuthenticated = readCookie("restaurant-status");
    // console.log("isAuthenticated", isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <SocketProvider>
            <Outlet />
        </SocketProvider>
    )
};

export default ProtectedRoute;
