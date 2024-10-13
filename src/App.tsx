import { lazy, Suspense } from 'react';
import './App.css';
import { Box, useMantineTheme } from '@mantine/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { ROUTES, USER_TYPE } from './utility/constant';
import AuthRoutes from './components/auth-routes/AuthRoutes';
import RequireRole from './components/require-role/RequireRole';

/* The code you provided is using lazy loading in a React application. Lazy loading is a technique used
to improve performance by splitting the code into smaller chunks and loading them only when they are
needed. */

const Loading = lazy(() => import('./components/loading/Loading'));
const GuestDashboard = lazy(() =>
  import('./pages/guest-dashboard/GuestDashboard')
);
const Login = lazy(() => import('./pages/login/Login'));
const UserProfile = lazy(() => import('./pages/user-profile/UserProfile'));
const SuperAdminDashboard = lazy(() =>
  import('./pages/super_admin_dashboard/SuperAdminDashboard')
);
const AdminDashboard = lazy(() =>
  import('./pages/admin-dashboard/AdminDashboard')
);
const App: React.FC = (): JSX.Element => {
  const theme = useMantineTheme();
  return (
    <Box className="App" bg={theme.white[0]}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/** Public Routes */}

            <Route
              path="*"
              element={<Navigate to={ROUTES.DASHBOARD} replace />}
            />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.DASHBOARD} element={<GuestDashboard />} />

            {/** Protected Routes */}

            <Route element={<AuthRoutes />}>
              <Route path={ROUTES.USER_PROFILE} element={<UserProfile />} />
              {/* <Route
                element={
                  <CommonNavBar
                    userType={USER_TYPE.CUSTOMER}
                    navbarLinkData={customerNavbarLinkData}
                    navBarHeader={<Logo />}
                    navBarFooter={<UserProfile route={ROUTES.CUSTOMERP_ROFILE} />}
                  />
                }> */}
              {/* </Route> */}
              {/* Admin Routes */}
              <Route
                path={ROUTES.ADMIN_DASHBOARD}
                element={<AdminDashboard />}
              />
              <Route
                element={
                  <RequireRole
                    allowedRoles={[USER_TYPE.SUPER_ADMIN]}
                    userRole={USER_TYPE.SUPER_ADMIN}
                  />
                }
              >
                <Route
                  path={ROUTES.SUPER_ADMIN_DASHBOARD}
                  element={<SuperAdminDashboard />}
                />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </Box>
  );
};

export default App;
