import "./Wizard.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";
import * as _ from "lodash";

import {ChooseStudy} from "../../components/wizardSteps/ChooseStudy";
import {ChooseYear} from "../../components/wizardSteps/ChooseYear";
import {CourseOverview} from "../../components/wizardSteps/CourseOverview";
import {SelectCourse} from "../../components/wizardSteps/SelectCourse";
import {Study, Course, courses, studies} from "./Data";

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
        let studyObject = _.find(studies, (study) => {return study.id === value});
        this.setState({study: value, selectedElectiveCourses: studyObject.basicCourses});
    }

    private selectStartingYear(value: string){
        this.setState({startingYear: value});
    }

    private selectSemester(value: string){
        this.setState({semester: value});
    }
    
    private selectCourse(course: string){
        const selectedCourses = this.state.selectedElectiveCourses.slice();
        selectedCourses.push(course);
        this.setState({selectedElectiveCourses: selectedCourses});
    }

    private deSelectCourse(courseId: string){
        const selectedStudy = _.find(studies, (study) => {
            return this.state.study === study.id;
        });
        
        if(selectedStudy.basicCourses.indexOf(courseId) > -1){
            return;
        }

        const selectedElectiveCourses = this.state.selectedElectiveCourses;

        _.remove(selectedElectiveCourses, (electiveCourse) => {
            return electiveCourse === courseId;
        });

        this.setState({selectedElectiveCourses: selectedElectiveCourses});
    }

    private getCurrentWizardStep(){
        if(this.state.study.length === 0) {
            return <ChooseStudy options={studies} study={this.state.study} onChange={(value: string) => {this.selectStudy(value)}} />
        } else if(this.state.semester.length === 0 || this.state.startingYear.length === 0){
            return (
                <div className="wizard-step">
                    <ChooseYear startingYear={this.state.startingYear} semester={this.state.semester} onChangeStartingYear={(value: string) => {this.selectStartingYear(value)}} onChangeSemester={(value: string) => {this.selectSemester(value)}} />
                    <CourseOverview deSelectCourse={(courseId: string) =>{this.deSelectCourse(courseId)}} semester={this.state.semester} selectedElectiveCourses={this.state.selectedElectiveCourses} />
                </div>
                )
        } else {
            return (
                <div className="wizard-step">
                    <SelectCourse onCourseSelect={(course)=> {this.selectCourse(course)}} selectedCourses={this.state.selectedElectiveCourses} />
                    <CourseOverview deSelectCourse={(courseId: string) =>{this.deSelectCourse(courseId)}} semester={this.state.semester} selectedElectiveCourses={this.state.selectedElectiveCourses} />
                </div>
                )
        }
    }

    public render() {
        return (
            <div className="wizard">
                {this.getCurrentWizardStep()}
            </div>);
    }
}