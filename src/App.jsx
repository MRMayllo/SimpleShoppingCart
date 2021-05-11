import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { routes } from './components/Routes.js'

import NavBar from './components/GeneralNavbar/NavBar';
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';
import DataContext from './components/DataContext/DataContextProvider'


const App = () => {
    /*getting all routes to render them all*/
    const routeComponents =
        routes.map(({ path, component, id, name }) =>
            <Route
                exact
                path={name === 'SingleProductPage' ? "/product/:id" : path}
                component={component}
                key={id}
            />);

    return (
        <DataContext>
            <Router>
                <NavBar />
                <Switch>
                    {routeComponents}
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </DataContext>
    )
}

export default App
