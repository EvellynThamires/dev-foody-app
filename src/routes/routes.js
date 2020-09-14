import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../pages/Login'
import Hall from '../pages/Hall'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/hall" component={Hall} />
        </Switch>
    </BrowserRouter>
)

export default Routes;