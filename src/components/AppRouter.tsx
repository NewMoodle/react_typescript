import React, {FC} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes} from "../routes";
import {HOME_PAGE_ROUTE} from "../utils/consts";

const AppRouter: FC = () => {
    return (
        <Switch>
            {publicRoutes.map(({path, Component}, index) =>
                <Route key={index} path={path} component={Component} exact/>
            )}
            <Redirect to={HOME_PAGE_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;