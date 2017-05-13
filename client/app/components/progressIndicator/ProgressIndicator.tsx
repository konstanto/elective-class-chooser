import "./ProgressIndicator.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface ProgressIndicatorProps {
    goToChooseStudy(): void;
    goToChooseYear(): void;
    stepIndex: number;
}

export class ProgressIndicator extends React.Component<ProgressIndicatorProps, void>{
    private getIfCompleted(stepNumber: number) {
        return stepNumber < this.props.stepIndex;
    }
    
    public render() {
        return (
            <div className="progress-indicator">
                <div className={this.getIfCompleted(1) === true ? "step completed" :  "step"} onClick={()=>{this.props.goToChooseStudy()}}>
                    <div className="line"></div>
                    <p className="step-number">1</p>
                    
                    <p className="step-description">Vælg studie</p>
                </div>
                <div className={this.getIfCompleted(2) === true ? "step completed" :  "step"} onClick={()=>{this.props.goToChooseYear()}}>
                    <div className="line"></div>
                    <p className="step-number">2</p>
                    
                    <p className="step-description">Vælg årgang</p> 
                </div>
                <div className={this.getIfCompleted(3) === true ? "step completed" :  "step"}>
                    <div className="line"></div>
                    <p className="step-number">3</p>
                    <p className="step-description">Vælg fag</p>
                </div>
            </div>
        );
    }
}