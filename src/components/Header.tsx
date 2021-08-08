import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom"
import {HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AccountDropdown from "./AccountDropdown";

const Header: FC = () => {
    const {authStore} = useContext(Context)

    return (
        <header className="h-16 bg-white flex items-center shadow">
            <div className="w-full px-8 flex items-center justify-between">
                <Link to={HOME_PAGE_ROUTE} className="text-2xl font-bold text-gray-700">NewMoodle</Link>
                <div className="flex items-center space-x-4">
                    {authStore.authenticated ?
                        <AccountDropdown/>
                        :
                        <Link to={LOGIN_PAGE_ROUTE}
                              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-base text-white
                            border border-white font-medium rounded-md duration-200">
                            Log in
                        </Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default observer(Header);