import {HomeIcon, UsersIcon} from '@heroicons/react/outline'
import {ADMIN_PAGE_DASHBOARD_ROUTE, ADMIN_PAGE_USERS_ROUTE} from "./consts";

export const adminSidebarLinks = [
    {
        title: "Dashboard",
        link: ADMIN_PAGE_DASHBOARD_ROUTE,
        icon: HomeIcon
    },
    {
        title: "Users",
        link: ADMIN_PAGE_USERS_ROUTE,
        icon: UsersIcon
    },
]