import React, {FC} from 'react';
import {Link} from "react-router-dom"
import {HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE} from "../utils/consts";

const Header: FC = () => {
    return (
        <header className="h-16 bg-indigo-600 flex items-center">
            <div className="w-full px-32 flex items-center justify-between">
                <Link to={HOME_PAGE_ROUTE} className="text-2xl font-semibold text-white">NewMoodle</Link>
                <Link to={LOGIN_PAGE_ROUTE}
                      className="px-4 py-2 bg-indigo-600 hover:bg-white text-base text-white hover:text-indigo-600
                      border border-white font-medium rounded-md duration-200">
                    Log in
                </Link>
            </div>
        </header>
    );
};

export default Header;