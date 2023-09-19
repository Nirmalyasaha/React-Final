import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoutes = () => {


    const Authtoken = window.sessionStorage.getItem('token');

    return Authtoken ? <Outlet /> : <Navigate to="/error" />

}

export default ProtectedRoutes;