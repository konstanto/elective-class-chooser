import "./Footer.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

export class Footer extends React.Component<void, void>{
    public render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <p>Footer test</p>
                </div>
            </div>
        );
    }
}