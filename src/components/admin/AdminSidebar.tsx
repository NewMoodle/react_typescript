import React, {FC} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {adminSidebarLinks} from "../../utils/adminSidebarLinks";

const AdminSidebar: FC = () => {
    let {url} = useRouteMatch();

    return (
        <div className="h-admin-sidebar-full bg-white">
            <ul>
                {adminSidebarLinks.map(({title, link, icon}, index) =>
                    <li className="h-12 flex" key={index}>
                        <div className={`w-1 h-full ${url === link && "bg-purple-600"} rounded-r-md`}/>
                        <Link
                            to={link}
                            className={`w-full flex items-center px-6 py-2 text-gray-500 font-medium hover:text-gray-800 duration-150 
                            ${url === link && "text-gray-800"}`}>
                            {React.createElement(icon, {className: "w-5 mr-3"})}
                            {title}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AdminSidebar;