import "./Wizard.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";

import {ChooseStudy} from "../../components/wizardSteps/ChooseStudy";
import {ChooseYear} from "../../components/wizardSteps/ChooseYear";

interface WizardState{
    study?: string;
    semester?: string;
    startingYear?: string;
    selectedElectiveCourses?: string[];
}

export class Wizard extends React.Component<void, WizardState>{
    public constructor(){
        super();
        this.state = {
            study: "",
            semester: "",
            startingYear: "",
            selectedElectiveCourses: []
        }
    }
    
    private selectStudy(value: string){
        this.setState({study: value});
    }

    private selectStartingYear(value: string){
        this.setState({startingYear: value});
    }

    private selectSemester(value: string){
        this.setState({semester: value});
    }
    
    private getCurrentWizardStep(){
        if(this.state.study.length === 0) {
            return <ChooseStudy study={this.state.study} onChange={(value: string) => {this.selectStudy(value)}} />
        } else if(this.state.semester.length === 0 || this.state.startingYear.length === 0){
            return <ChooseYear startingYear={this.state.startingYear} semester={this.state.semester} onChangeStartingYear={(value: string) => {this.selectStartingYear(value)}} onChangeSemester={(value: string) => {this.selectSemester(value)}} />
        } else {
            //return <ChooseStudy onChange={this.selectStudy} />
        }
    }

    public render() {
        return (
            <div className="wizard">
                {this.getCurrentWizardStep()}
            </div>);
    }
}