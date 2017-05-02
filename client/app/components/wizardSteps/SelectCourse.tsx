import "./selectCourse.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import * as _ from "lodash";

import { Study, Course, courses, semesterType } from "../../pages/wizard/Data";

interface SelectCourseProps {
    selectedCourses: string[];
    onCourseSelect(courseId: string): void;
}

interface SelectCourseState {
    selectedSemesterType: semesterType;
}

export class SelectCourse extends React.Component<SelectCourseProps, SelectCourseState>{
    constructor() {
        super();
        this.state = {
            selectedSemesterType: semesterType.summer
        }
    }

    private selectCourse(course: Course) {
        this.props.onCourseSelect(course.id);
    }

    private getSelectedCoursesAsObjects() {
        const selectedCourseObjects: Course[] = [];

        _.map(this.props.selectedCourses, (selectedCourse) => {
            selectedCourseObjects.push(_.find(courses, (course) => { return course.id === selectedCourse }));
        });
        return selectedCourseObjects;
    }

    private getAvailableCourses() {
        const availableCourses: Course[] = [];
        const selectedCourses = this.getSelectedCoursesAsObjects();

        // Exclude already selected courses
        _.map(courses, (course) => {
            if (_.includes(selectedCourses, course)) {
                return;
            }

            if(course.semesterType.indexOf(this.state.selectedSemesterType) == -1){
                return;
            }

            availableCourses.push(course);
        });

        // Don't show courses if the semestertype is filled up
        const selectedWinterSemesterCourses = _.filter(selectedCourses, (selectedCourse) => { return selectedCourse.semesterType.indexOf(semesterType.winter) > -1 });
        const selectedSummerSemesterCourses = _.filter(selectedCourses, (selectedCourse) => { return selectedCourse.semesterType.indexOf(semesterType.summer) > -1 });

        let totalEctsInWinterSemester = 0;
        _.map(selectedWinterSemesterCourses, (winterSemesterCourse) => {
            totalEctsInWinterSemester += winterSemesterCourse.ects;
        });

        let totalEctsInSummerSemester = 0;
        _.map(selectedSummerSemesterCourses, (summerSemesterCourse) => {
            totalEctsInSummerSemester += summerSemesterCourse.ects;
        })

        if (totalEctsInWinterSemester >= 90) {
            _.remove(availableCourses, (course) => {
                return course.semesterType.indexOf(semesterType.winter) > -1;
            })
        }

        if (totalEctsInSummerSemester >= 90) {
            _.remove(availableCourses, (course) => {
                return course.semesterType.indexOf(semesterType.summer) > -1;
            })
        }

        // Exclude courses that doesn't fullfill the requirement of 1/3 external censoring
        let currentEctsWithoutExternalCensor = 0;
        const maxEctsWithoutExternalCensor = 180 * 2 / 3;

        _.map(_.filter(selectedCourses, (course) => { return course.externalCensor === false }), (course) => {
            currentEctsWithoutExternalCensor += course.ects;
        });

        _.map(_.filter(availableCourses, (course) => { return course.externalCensor === false }), (availableCourse) => {
            if (availableCourse.ects + currentEctsWithoutExternalCensor > maxEctsWithoutExternalCensor) {
                _.remove(availableCourses, (existingAvailableCourse) => {
                    return existingAvailableCourse.id === availableCourse.id;
                });
            }
        });

        // Exclude courses that doesn't fullfill the requirement of 2/3 graded exams
        let currentEctsWithoutGradedExams = 0;
        const maxEctsWithoutGradedExams = 180 * 1 / 3;

        _.map(_.filter(selectedCourses, (course) => { return course.graded === false }), (course) => {
            currentEctsWithoutGradedExams += course.ects;
        });

        _.map(_.filter(availableCourses, (course) => { return course.graded === false }), (availableCourse) => {
            if (availableCourse.ects + currentEctsWithoutGradedExams > maxEctsWithoutGradedExams) {
                _.remove(availableCourses, (existingAvailableCourse) => {
                    return existingAvailableCourse.id === availableCourse.id;
                });
            }
        });

        return availableCourses;
    }

    public render() {
        const isSummerSelected = this.state.selectedSemesterType === semesterType.summer ? "selected" : null;
        const isWinterSelected = this.state.selectedSemesterType === semesterType.winter ? "selected" : null;
        
        return (
            <div className="select-course">
                <div className="semester-type-selector">
                    <div className={"tab " + isWinterSelected} onClick={()=>{this.setState({selectedSemesterType: semesterType.winter})}}>
                        <p>Forårssemester</p>
                    </div>
                    <div className={"tab " + isSummerSelected} onClick={()=>{this.setState({selectedSemesterType: semesterType.summer})}}>
                        <p>Efterårssemester</p>
                    </div>
                </div>
                <div className="courses">
                    {_.map(this.getAvailableCourses(), (course) => { return (<div className="course" key={course.id} onClick={() => { this.selectCourse(course) } }><p>{course.name}</p></div>) })}
                </div>
            </div>
        );
    }
}