import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ auth }) => {
    console.log("Auth status:", auth); // Log the auth status
    return auth === true ? <Outlet /> : <Navigate to="/" replace />;
};
export default ProtectedRoutes;