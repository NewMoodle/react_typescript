import {CollectionIcon, HomeIcon, UsersIcon} from '@heroicons/react/outline'
import {ADMIN_PAGE_DASHBOARD_ROUTE, ADMIN_PAGE_GROUPS_ROUTE, ADMIN_PAGE_STUDENTS_ROUTE} from "./consts";

export const adminSidebarLinks = [
    {
        title: "Dashboard",
        link: ADMIN_PAGE_DASHBOARD_ROUTE,
        icon: HomeIcon
    },
    {
        title: "Students",
        link: ADMIN_PAGE_STUDENTS_ROUTE,
        icon: UsersIcon
    },
    {
        title: "Groups",
        link: ADMIN_PAGE_GROUPS_ROUTE,
        icon: CollectionIcon
    },
]