import React, {FC, useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {adminRoutes, publicRoutes} from "../routes";
import {HOME_PAGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AppRouter: FC = () => {
    const {authStore, userStore} = useContext(Context)

    return (
        <Switch>
            {publicRoutes.map(({path, Component}, index) =>
                <Route key={index} path={path} component={Component} exact/>
            )}
            {authStore.authenticated && userStore.admin && adminRoutes.map(({path, Component}, index) =>
                <Route key={index} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_PAGE_ROUTE}/>
        </Switch>
    );
};

export default observer(AppRouter);