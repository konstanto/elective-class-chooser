import "./ProgressIndicator.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface ProgressIndicatorProps {
    goToChooseStudy(): void;
    goToChooseYear(): void;
}

export class ProgressIndicator extends React.Component<ProgressIndicatorProps, void>{
    public render() {
        return (
            <div className="progress-indicator">
                <div className="step" onClick={()=>{this.props.goToChooseStudy()}}>
                    <p>Vælg studie</p>
                </div>
                <div className="step" onClick={()=>{this.props.goToChooseYear()}}>
                    <p>Vælg årgang</p> 
                </div>
                <div className="step">
                    <p>Vælg fag</p>
                </div>
            </div>
        );
    }
}