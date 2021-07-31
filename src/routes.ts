import {ADMIN_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE} from "./utils/consts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

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
        Component: Admin
    }
]