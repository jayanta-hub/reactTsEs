import { lazy, Suspense } from "react";
import "./App.css";
import { Box, useMantineTheme } from "@mantine/core";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { ROUTES } from "./utility/constant";
import AuthRoutes from "./components/auth-routes/AuthRoutes";

/* The code you provided is using lazy loading in a React application. Lazy loading is a technique used
to improve performance by splitting the code into smaller chunks and loading them only when they are
needed. */
const Loading = lazy(() => import("./components/loading/Loading"));
const GuestDashboard = lazy(() =>
  import("./pages/guest-dashboard/GuestDashboard")
);
const App: React.FC = (): JSX.Element => {
  const theme = useMantineTheme();
  return (
    <Box className="App" bg={theme.white[0]}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/** Public Routes */}
            <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
            {/** Protected Routes */}
            <Route element={<AuthRoutes />}>
              <Route path={ROUTES.ASSESSMENT} element={<GuestDashboard />} />
              {/* <Route
                element={
                  <CommonNavBar
                    userType={USER_TYPE.CUSTOMER}
                    navbarLinkData={customerNavbarLinkData}
                    navBarHeader={<Logo />}
                    navBarFooter={<UserProfile route={ROUTES.CUSTOMERP_ROFILE} />}
                  />
                }> */}
              <Route path={ROUTES.OVERVIEW} element={<GuestDashboard />} />
            </Route>
            {/* </Route> */}
            {/* Admin Routes */}
            {/* <Route
              element={
                <CommonNavBar
                  userType={USER_TYPE.ADMIN}
                  navbarLinkData={admiNavbarLinkData}
                  navBarHeader={<Logo />}
                  navBarFooter={<UserProfile route={ROUTES.ADMIN_PROFILE} />}
                />
              }> */}

            {/* </Route> */}
          </Routes>
        </Suspense>
      </Router>
    </Box>
  );
};

export default App;
