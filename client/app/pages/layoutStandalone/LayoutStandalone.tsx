import "./../../shared/sharedLayout.less";
import "./LayoutStandalone.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Footer} from "../../components/footer/Footer";
import {Header} from "../../components/header/Header";

export class LayoutStandalone extends React.Component<void, void>{
    public render() {
        return (
            <div className="layout">
                <div className="background-image"></div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>);
    }
}