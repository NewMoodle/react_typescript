import React, {FC, useContext} from 'react';
import {Menu} from '@headlessui/react'
import {CogIcon, LoginIcon} from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import {observer} from "mobx-react-lite";
import avatarPlaceholder from "../assets/images/avatar-placeholder.jpg"
import {Context} from "../index";
import {ADMIN_PAGE_ROUTE} from "../utils/consts";

const AccountDropdown: FC = () => {
    const {authStore, userStore} = useContext(Context)

    return (
        <Menu as="div" className="relative">
            <Menu.Button>
                <img className="w-8 h-8 rounded-full" src={avatarPlaceholder} alt="Avatar image"/>
            </Menu.Button>
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                        divide-y divide-gray-100 focus:outline-none">
                {authStore.authenticated && userStore.admin &&
                <Menu.Item>
                    {({active}) => (
                        <Link
                            to={ADMIN_PAGE_ROUTE}
                            className={`w-full flex items-center px-4 py-2 rounded-md font-medium 
                            ${active ? "bg-purple-600 text-white" : "text-gray-700"}`}>
                            <CogIcon className={`mr-3 w-5 h-5 ${active ? "text-white" : "text-gray-400"}`}
                                     aria-hidden={true}/>
                            Administration
                        </Link>
                    )}
                </Menu.Item>
                }
                <Menu.Item>
                    {({active}) => (
                        <button
                            onClick={() => authStore.logout().then(() => userStore.logout())}
                            className={`w-full flex items-center px-4 py-2 rounded-md font-medium 
                            ${active ? "bg-purple-600 text-white" : "text-gray-700"}`}>
                            <LoginIcon className={`mr-3 w-5 h-5 ${active ? "text-white" : "text-gray-400"}`}
                                       aria-hidden={true}/>
                            Log out
                        </button>
                    )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default observer(AccountDropdown);