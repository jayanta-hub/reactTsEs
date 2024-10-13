import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface RequireRoleProps {
  allowedRoles: string[];
  userRole: string;
}
const RequireRole: React.FC<RequireRoleProps> = ({
  allowedRoles,
  userRole
}): JSX.Element => {
  return allowedRoles.includes(userRole) ? <Outlet /> : <Navigate to="/" />;
};

export default RequireRole;
