import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
    const token = Cookies.get('token');
    const location = useLocation();

    if (!token) {
        // Redirect to login page but save the attempted url
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
