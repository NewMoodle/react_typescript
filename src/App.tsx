import React, {FC, useContext, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const App: FC = () => {
    const {authStore, userStore} = useContext(Context)

    // useEffect(() => {
    //     if (localStorage.getItem("access_token")) {
    //         authStore.checkAuth().then(() => userStore.loadUser())
    //     }
    // }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default observer(App);
