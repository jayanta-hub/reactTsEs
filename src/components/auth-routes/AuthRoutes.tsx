import { Navigate, Outlet } from "react-router-dom";
import UseIsAuth from "../../utility/hooks/UseIsAuth";
const AuthRoutes=()=> {
  const isAuth = UseIsAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoutes;
