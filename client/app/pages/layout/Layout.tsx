import "./Layout.less";
import * as React from "react";
import * as ReactDOM from "react-dom";

export class Layout extends React.Component<void, void>{
    public render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>);
    }
}