import React, {FC, useContext} from 'react';
import {Link} from "react-router-dom"
import {ADMIN_PAGE_ROUTE, HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Header: FC = () => {
    const {authStore, userStore} = useContext(Context)

    return (
        <header className="h-16 bg-indigo-600 flex items-center">
            <div className="w-full px-32 flex items-center justify-between">
                <Link to={HOME_PAGE_ROUTE} className="text-2xl font-semibold text-white">NewMoodle</Link>
                <div className="flex space-x-4">
                    {authStore.authenticated && userStore.admin &&
                    <Link to={ADMIN_PAGE_ROUTE}
                          className="px-4 py-2 bg-indigo-600 hover:bg-white text-base text-white hover:text-indigo-600
                                border border-white font-medium rounded-md duration-200">
                        Administration
                    </Link>
                    }

                    {authStore.authenticated ?
                        <button onClick={() => authStore.logout().then(() => userStore.logout())}
                                className="px-4 py-2 bg-indigo-600 hover:bg-white text-base text-white hover:text-indigo-600
                            border border-white font-medium rounded-md duration-200">
                            Log out
                        </button>
                        :
                        <Link to={LOGIN_PAGE_ROUTE}
                              className="px-4 py-2 bg-indigo-600 hover:bg-white text-base text-white hover:text-indigo-600
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