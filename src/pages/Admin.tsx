import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import Header from "../components/Header";
import AdminSidebar from "../components/admin/AdminSidebar";
import {BrowserRouter} from "react-router-dom";
import AdminRouter from "../components/admin/AdminRouter";

const Admin: FC = () => {
    return (
        <div className="h-screen bg-gray-100">
            <Header/>
            <div className="w-full flex">
                <div className="w-1/6">
                    <AdminSidebar/>
                </div>
                <div className="w-5/6">
                    <BrowserRouter>
                        <AdminRouter/>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
};

export default observer(Admin);