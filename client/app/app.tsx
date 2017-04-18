import { Promise } from "es6-promise";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as History from "history";
import {Layout} from "./pages/layout/Layout";
import {Start} from "./pages/start/Start";

export const browserHistory = ReactRouter.useRouterHistory(History.createHistory)({ basename: "/" });

let routes = (
    <ReactRouter.Router history={browserHistory}>
        <ReactRouter.Route path="/" component={Layout}>
            <ReactRouter.IndexRoute component={Start} />
        </ReactRouter.Route>
    </ReactRouter.Router>
);

browserHistory.listen(function (location) {
    (window as any).ga('send', 'pageview', location.pathname);
});

const element = document.getElementById("app");
ReactDOM.render(routes, element);