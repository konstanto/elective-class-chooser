import "./SelectCourse.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import * as _ from "lodash";

import { Study, Course, courses, studies, semesterType } from "../../pages/wizard/Data";
import { CourseDescription } from "../courseDescription/CourseDescription";

interface SelectCourseProps {
    selectedCourses: string[];
    onCourseSelect(courseId: string): void;
}

interface SelectCourseState {
    selectedSemesterType?: semesterType;
    selectedCourse?: null | Course;
}

export class SelectCourse extends React.Component<SelectCourseProps, SelectCourseState>{
    constructor(props: SelectCourseProps) {
        super(props);
        this.state = {
            selectedSemesterType: semesterType.fall,
            selectedCourse: null
        }
    }

    private selectCourse(course: Course) {
        this.setState({ selectedCourse: course });
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

            if (course.id === "0a" || course.id === "0b") {
                return;
            }

            if (course.semesterType.indexOf(this.state.selectedSemesterType) == -1) {
                return;
            }

            availableCourses.push(course);
        });

        // Don't show courses if the semestertype is filled up
        const selectedWinterSemesterCourses = _.filter(selectedCourses, (selectedCourse) => { return selectedCourse.semesterType.indexOf(semesterType.spring) > -1 });
        const selectedSummerSemesterCourses = _.filter(selectedCourses, (selectedCourse) => { return selectedCourse.semesterType.indexOf(semesterType.fall) > -1 });

        let totalEctsInSpringSemester = 0;
        _.map(selectedWinterSemesterCourses, (springSemesterCourse) => {
            totalEctsInSpringSemester += springSemesterCourse.ects;
        });

        let totalEctsInFallSemester = 0;
        _.map(selectedSummerSemesterCourses, (fallSemesterCourse) => {
            totalEctsInFallSemester += fallSemesterCourse.ects;
        })

        // Remove if exceeds the maximum ects (90)
        _.remove(availableCourses, (course) => {
            return course.semesterType.indexOf(semesterType.fall) > -1 && course.ects + totalEctsInFallSemester > 90;
        });

        _.remove(availableCourses, (course) => {
            return course.semesterType.indexOf(semesterType.spring) > -1 && course.ects + totalEctsInSpringSemester > 90;
        });

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

    private deselectCourse() {
        this.setState({ selectedCourse: null });
    }

    private confirmCourseSelection() {
        this.deselectCourse();
        this.props.onCourseSelect(this.state.selectedCourse.id);
    }

    private getGroupedCourses(courses: Course[]) {
        const sortedStudies = _.sortBy(courses, (course) => { return course.name });
        const groupedCourses = _.groupBy(sortedStudies, (course) => { return course.belongingStudy });
        return groupedCourses;
    }

    private getStudyNameFromId(studyId:string){
        return _.find(studies, (study) => {return study.id === studyId}).name;
    }

    public render() {
        const isSummerSelected = this.state.selectedSemesterType === semesterType.fall ? "selected" : null;
        const isWinterSelected = this.state.selectedSemesterType === semesterType.spring ? "selected" : null;

        const courses = this.getAvailableCourses();
        const groupedCourses = this.getGroupedCourses(courses);

        return (
            <div className="select-course">
                <h2 className="headline">Vælg valgfag</h2>
                <div className="semester-type-selector">
                    <div className={"tab " + isSummerSelected} onClick={() => { this.setState({ selectedSemesterType: semesterType.fall }) } }>
                        <p>5. semester</p>
                    </div>
                    <div className={"tab " + isWinterSelected} onClick={() => { this.setState({ selectedSemesterType: semesterType.spring }) } }>
                        <p>6. semester </p>
                    </div>
                </div>
                <div className="courses">
                    {courses.length > 0 ? _.map(groupedCourses, (courses) => {
                        return (
                            <div key={courses[0].belongingStudy} className="course-group">
                                <p>{this.getStudyNameFromId(courses[0].belongingStudy)}</p>{
                                    _.map(courses, (course) => {
                                        return (
                                            <div className="course" key={course.id} onClick={() => { this.selectCourse(course) } }>
                                                <p className="ects">{course.ects}</p>
                                                <p className="name">{course.name}</p>
                                            </div>
                                        )
                                    })}</div>)
                    })
                        : (
                            <div className="no-more-courses-message"><p>Du har allerede valgt nok fag <br />– eller –<br />Der er ikke flere fag, der matcher de gældende krav.</p></div>
                        )}
                </div>

                {this.state.selectedCourse === null ? null : <CourseDescription courseName={this.state.selectedCourse.name} courseDescriptionLink={this.state.selectedCourse.courseInfo} courseId={this.state.selectedCourse.id} onSelectCourse={() => { this.confirmCourseSelection() } } onClose={() => { this.deselectCourse() } } />}
            </div>
        );
    }
}