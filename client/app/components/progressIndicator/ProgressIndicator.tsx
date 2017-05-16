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

    private getIfCurrentStep(stepNumber: number) {
        return stepNumber === this.props.stepIndex;
    }
    
    private getClassName(stepNumber: number){
        let className = "step";
        
        if(this.getIfCompleted(stepNumber) === true){
            className += " completed";
        } else if(this.getIfCurrentStep(stepNumber) === true){
            className += " current";
        }
        return className;
    }

    public render() {
        return (
            <div className="progress-indicator">
                <div className={this.getClassName(1)} onClick={()=>{this.props.goToChooseStudy()}}>
                    <div className="line"></div>
                    <p className="step-number">1</p>
                    
                    <p className="step-description">Vælg studie</p>
                </div>
                <div className={this.getClassName(2)} onClick={()=>{this.props.goToChooseYear()}}>
                    <div className="line"></div>
                    <p className="step-number">2</p>
                    
                    <p className="step-description">Vælg årgang</p> 
                </div>
                <div className={this.getClassName(3)}>
                    <div className="line"></div>
                    <p className="step-number">3</p>
                    <p className="step-description">Vælg fag</p>
                </div>
            </div>
        );
    }
}