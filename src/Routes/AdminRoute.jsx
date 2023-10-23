import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../components/hooks/useAdmin';
import useAuth from '../components/hooks/UseAuth';

const AdminRoute = ({children}) => {
    const { loading} = useAuth()
    const [isAdmin , isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-full"></progress>
    }
    if(isAdmin){
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace />;
  
};

export default AdminRoute;