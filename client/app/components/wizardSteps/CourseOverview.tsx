import "./CourseOverview.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import * as _ from "lodash";

import { Study, Course, semesterType, courses, studies } from "../../pages/wizard/Data";

interface CourseOverviewProps {
    selectedElectiveCourses: string[];
    deSelectCourse(id: string): void;
    selectedStudyId: string;
    shouldBeDisabled: boolean;
}

interface CourseOverviewState {
    selectedElectiveCourses: Course[]
}

export class CourseOverview extends React.Component<CourseOverviewProps, CourseOverviewState>{
    private totalEctsAdded = 0;

    private constructor() {
        super();
        this.state = { selectedElectiveCourses: [] };
    }

    private componentWillMount() {
        this.mapCourseIdsToObjects(this.props.selectedElectiveCourses);
    }

    private componentWillReceiveProps(nextProps: CourseOverviewProps) {
        this.mapCourseIdsToObjects(nextProps.selectedElectiveCourses);
    }

    private removeCourse(courseId: string) {
        this.props.deSelectCourse(courseId);
    }

    private mapCourseIdsToObjects(courseIds: string[]) {
        let courseArray: Course[] = [];

        _.map(courseIds, (courseId: string) => {
            courseArray.push(_.find(courses, (course: Course) => {
                return course.id === courseId;
            }));
        })

        this.setState({ selectedElectiveCourses: courseArray });
    }

    private isCourseMandatoryInStudy(courseId: string) {
        const study = _.find(studies, (study) => { return study.id === this.props.selectedStudyId });

        return study.basicCourses.indexOf(courseId) > -1;
    }

    private getCourseBlocks(course: Course) {
        let courseClassName = course.ects === 15 ? "half" : "quart";

        courseClassName = + this.isCourseMandatoryInStudy(course.id) ? courseClassName : courseClassName + " can-be-removed";

        return (
            <div key={course.id} onClick={() => { this.removeCourse(course.id) } } className={"course " + courseClassName}><p className="name">{course.name}</p></div>
        );
    }

    public render() {
        return (
            <div className={this.props.shouldBeDisabled === true ? "course-overview disabled" : "course-overview"}>
                <h2 className="headline">Semesterplan</h2>
                <div className="overview">
                    <div className="year-description">
                        <div className="year"><p>1. år</p></div>
                        <div className="year"><p>2. år</p></div>
                        <div className="year"><p>3. år</p></div>
                    </div>
                    <div className="semester fall">
                        <div className="semester-headline">
                            <p>Efterår</p>
                        </div>
                        <div className="semester-description">
                            <div className="semester-row">
                                <p className="semester-header">1. semester</p>
                            </div>
                            <div className="semester-row">
                                <p className="semester-header">3. semester</p>
                            </div>
                            <div className="semester-row">
                                <p className="semester-header">5. semester</p>
                            </div>
                        </div>

                        {_.map(this.state.selectedElectiveCourses.filter((electiveCourse: Course) => { return _.includes(electiveCourse.semesterType, semesterType.fall) }), (course) => { return this.getCourseBlocks(course); })}
                    </div>
                    <div className="semester spring">
                        <div className="semester-headline">
                            <p>Forår</p>
                        </div>
                        <div className="semester-description">
                        <div className="semester-row">
                            <p className="semester-header">2. semester</p>
                        </div>
                        <div className="semester-row">
                            <p className="semester-header">4. semester</p>
                        </div>
                        <div className="semester-row">
                            <p className="semester-header">6. semester</p>
                        </div>
                    </div>
                        {_.map(this.state.selectedElectiveCourses.filter((electiveCourse: Course) => { return _.includes(electiveCourse.semesterType, semesterType.spring) }), (course) => { return this.getCourseBlocks(course); })}
                    </div>
                </div>
            </div>
        );
    }
}