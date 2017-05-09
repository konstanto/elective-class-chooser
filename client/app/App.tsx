import { Promise } from "es6-promise";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as History from "history";
import {Layout} from "./pages/layout/Layout";
import {LayoutStandalone} from "./pages/layoutStandalone/LayoutStandalone";
import {Wizard} from "./pages/wizard/Wizard";
import {Rules} from "./pages/rules/Rules";
import {Legal} from "./pages/legal/Legal";
import {Concept} from "./pages/concept/Concept";

export const browserHistory = ReactRouter.useRouterHistory(History.createHistory)({ basename: "/f2017e/a/8/" });
//export const browserHistory = ReactRouter.useRouterHistory(History.createHistory)({ basename: "/" });

let routes = (
    <ReactRouter.Router history={browserHistory}>
        <ReactRouter.Route path="/" component={Layout}>
            <ReactRouter.IndexRoute component={Wizard} />
        </ReactRouter.Route>
        <ReactRouter.Route path="/info/" component={LayoutStandalone}>
            <ReactRouter.IndexRoute component={Rules} />
            <ReactRouter.Route path="regler" component={Rules} />
            <ReactRouter.Route path="koncept" component={Concept} />
            <ReactRouter.Route path="juridisk" component={Legal} />
        </ReactRouter.Route>
    </ReactRouter.Router>
);

const element = document.getElementById("app");
ReactDOM.render(routes, element);