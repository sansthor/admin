import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoutes";

import { LoginAdmin, AdminPages, ServicePages } from "./pages";
import { TableUser, TableService } from "./components";

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
                        <ServicePages
                            table={<TableService />}
                            pageTitle="Service"
                        />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
