import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./helpers/PrivateRoutes";

import {
    LoginAdmin,
    AdminPages,
    ServicePages,
    TransactionPages,
    DataAdmin,
} from "./pages";

import {
    TableUser,
    TableService,
    TableTransaction,
    TableAdmin,
    ModalAdd,
} from "./components";

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
                        <ServicePages table={<TableService />} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/admin/service-transaction">
                        <TransactionPages table={<TableTransaction />} />
                    </PrivateRoute>
                    <PrivateRoute exact path="/admin/admin-dataadmin">
                        <DataAdmin
                            table={<TableAdmin />}
                            addButton={<ModalAdd />}
                        />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
