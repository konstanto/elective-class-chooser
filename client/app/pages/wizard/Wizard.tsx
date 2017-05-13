import "./Wizard.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";
import * as _ from "lodash";

import { ProgressIndicator } from "../../components/progressIndicator/ProgressIndicator";

import { ChooseStudy } from "../../components/wizardSteps/ChooseStudy";
import { ChooseYear } from "../../components/wizardSteps/ChooseYear";
import { CourseOverview } from "../../components/wizardSteps/CourseOverview";
import { SelectCourse } from "../../components/wizardSteps/SelectCourse";
import { Study, Course, courses, studies, semesterType } from "./Data";

interface WizardState {
    study?: string;
    semester?: string;
    startingYear?: string;
    selectedElectiveCourses?: string[];
}

export class Wizard extends React.Component<void, WizardState>{
    private bachelorIdSpring = "0a";
    private bachelorIdFall = "0b";

    public constructor() {
        super();
        this.state = {
            study: "",
            semester: "",
            startingYear: "",
            selectedElectiveCourses: []
        }
    }

    private selectStudy(value: string) {
        let studyObject = _.find(studies, (study) => { return study.id === value });
        this.setState({ study: value, selectedElectiveCourses: studyObject.basicCourses });
    }

    private selectStartingYear(value: string) {
        this.setState({ startingYear: value });
    }

    private selectSemester(value: string) {
        this.setState({ semester: value });
    }

    private selectCourse(course: string) {
        const selectedCourses = this.state.selectedElectiveCourses.slice();
        selectedCourses.push(course);
        this.setState({ selectedElectiveCourses: selectedCourses });
    }

    private deSelectCourse(courseId: string) {
        const selectedStudy = _.find(studies, (study) => {
            return this.state.study === study.id;
        });

        if (selectedStudy.basicCourses.indexOf(courseId) > -1) {
            return;
        }

        const selectedElectiveCourses = this.state.selectedElectiveCourses;

        _.remove(selectedElectiveCourses, (electiveCourse) => {
            return electiveCourse === courseId;
        });

        this.setState({ selectedElectiveCourses: selectedElectiveCourses });
    }

    private selectBachelorPosition(semesterTypeForBachelor: string) {
        const selectedCourses = this.state.selectedElectiveCourses;
        selectedCourses.push(semesterTypeForBachelor === "1" ? this.bachelorIdFall : this.bachelorIdSpring);
        this.setState({ selectedElectiveCourses: selectedCourses });
    }

    private getCurrentWizardStep() {
        switch (this.getStepIndex()) {
            case 1:
                return <ChooseStudy options={studies} study={this.state.study} onChange={(value: string) => { this.selectStudy(value) } } />
            case 2:
                return (
                    <div className="wizard-step">
                        <ChooseYear startingYear={this.state.startingYear} semester={this.state.semester} onChangeStartingYear={(value: string) => { this.selectStartingYear(value) } } onChangeSemester={(value: string) => { this.selectSemester(value) } } onBachelorSelect={(value: string) => { this.selectBachelorPosition(value) } } />
                        <CourseOverview shouldBeDisabled={true} deSelectCourse={(courseId: string) => { this.deSelectCourse(courseId) } } semester={this.state.semester} selectedElectiveCourses={this.state.selectedElectiveCourses} selectedStudyId={this.state.study} />
                    </div>
                )
            case 3:
                return (
                    <div className="wizard-step">
                        <SelectCourse selectedSemester={this.state.semester} onCourseSelect={(course) => { this.selectCourse(course) } } selectedCourses={this.state.selectedElectiveCourses} />
                        <CourseOverview shouldBeDisabled={false} deSelectCourse={(courseId: string) => { this.deSelectCourse(courseId) } } semester={this.state.semester} selectedElectiveCourses={this.state.selectedElectiveCourses} selectedStudyId={this.state.study} />
                    </div>
                )
        }
    }

    private startOver() {
        this.setState({
            study: "",
            semester: "",
            startingYear: "",
            selectedElectiveCourses: []
        });
    }

    private goToChooseYear() {
        this.setState({
            semester: "",
            startingYear: ""
        });

        const selectedCourses = this.state.selectedElectiveCourses;

        if (selectedCourses.indexOf(this.bachelorIdFall) > -1) {
            _.remove(selectedCourses, (course) => { return course === this.bachelorIdFall });
        }

        if (selectedCourses.indexOf(this.bachelorIdSpring) > -1) {
            _.remove(selectedCourses, (course) => { return course === this.bachelorIdSpring });
        }

        this.setState({ selectedElectiveCourses: selectedCourses });
    }

    private getStepIndex() {
        if (this.state.study.length === 0) {
            return 1;
        } else if (this.state.semester.length === 0 || this.state.startingYear.length === 0 || (this.state.selectedElectiveCourses.indexOf(this.bachelorIdFall) === -1 && this.state.selectedElectiveCourses.indexOf(this.bachelorIdSpring) === -1)) {
            return 2;
        } else {
            return 3;
        }
    }

    public render() {
        return (
            <div className="wizard">
                {this.state.study.length === 0 ? null : <ProgressIndicator stepIndex={this.getStepIndex()} goToChooseStudy={() => { this.startOver() } } goToChooseYear={() => { this.goToChooseYear() } } />}
                <div className="body">
                    {this.getCurrentWizardStep()}
                </div>
            </div>);
    }
}