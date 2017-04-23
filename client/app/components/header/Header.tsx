import "./Header.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

export class Header extends React.Component<void, void>{
    public render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="logo">
                        <h1><Link to="/">Elective class chooser</Link></h1>
                    </div>
                    <div className="menu">
                        <Link to="/info/regler">Regler</Link>
                        <Link to="/info/koncept">Koncept</Link>
                        <Link to="/info/juridisk">Juridisk</Link>
                    </div>
                </div>
            </div>
        );
    }
}