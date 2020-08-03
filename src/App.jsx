import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoutes";

import { LoginAdmin, AdminPages, ServicePages } from "./pages";
import { TableUser } from "./components";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginAdmin />
                    </Route>

                    <PrivateRoute exact path="/admin/admin-pages">
                        <AdminPages table={<TableUser />} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/admin/service-pages">
                        <ServicePages table={<TableUser />} />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
