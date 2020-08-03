import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";
import PrivateRoute from "./helpers/PrivateRoutes";

import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import PagesAdmin from "./pages/AdminPages/AdminPages";
import TableAdmin from "./components/TableUser/TableUser";

function App() {
    const tableUser = <TableAdmin />;

    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginAdmin />
                    </Route>

                    <PrivateRoute exact path="/adminpages">
                        <PagesAdmin table={tableUser} />
                    </PrivateRoute>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
