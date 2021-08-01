import {
    ADMIN_PAGE_DASHBOARD_ROUTE,
    ADMIN_PAGE_ROUTE,
    ADMIN_PAGE_USERS_ROUTE,
    HOME_PAGE_ROUTE,
    LOGIN_PAGE_ROUTE
} from "./utils/consts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Users from "./components/admin/Users";
import Dashboard from "./components/admin/Dashboard";

export const publicRoutes = [
    {
        path: HOME_PAGE_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_PAGE_ROUTE,
        Component: Login
    }
]

export const adminRoutes = [
    {
        path: ADMIN_PAGE_ROUTE,
        Component: Admin,
    },
    {
        path: ADMIN_PAGE_USERS_ROUTE,
        Component: Admin,
        SubComponent: Users
    },
    {
        path: ADMIN_PAGE_DASHBOARD_ROUTE,
        Component: Admin,
        SubComponent: Dashboard
    },
]