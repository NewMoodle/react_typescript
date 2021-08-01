import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import {adminRoutes} from "../../routes";

const AdminRouter: FC = () => {
    return (
        <Switch>
            {adminRoutes.slice(1).map(({path, SubComponent}, index) =>
                <Route key={index} path={path} component={SubComponent} exact/>
            )}
        </Switch>
    );
};

export default AdminRouter;