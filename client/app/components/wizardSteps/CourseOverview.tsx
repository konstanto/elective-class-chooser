import "./CourseOverview.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import * as _ from "lodash";

import { Study, Course, semesterType, courses } from "../../pages/wizard/Data";

interface CourseOverviewProps {
    semester: string
    selectedElectiveCourses: string[];
    deSelectCourse(id: string): void;
}

interface CourseOverviewState {
    selectedElectiveCourses: Course[]
}

export class CourseOverview extends React.Component<CourseOverviewProps, CourseOverviewState>{
    private constructor(){
        super();
        this.state = {selectedElectiveCourses: []};
    }
    
    private componentWillMount() {
        this.mapCourseIdsToObjects(this.props.selectedElectiveCourses);
    }

    private componentWillReceiveProps(nextProps: CourseOverviewProps) {
        this.mapCourseIdsToObjects(nextProps.selectedElectiveCourses);
    }

    private removeCourse(courseId: string){
        this.props.deSelectCourse(courseId);
    }

    private mapCourseIdsToObjects(courseIds: string[]) {
        let courseArray: Course[] = [];
        
        _.map(courseIds, (courseId: string) => {
            courseArray.push(_.find(courses, (course: Course) => {
                return course.id === courseId;
            }));
        })

        this.setState({selectedElectiveCourses: courseArray});
    }

    private getCourseBlocks(course: Course) {
        const courseClassName = course.ects === 15 ? "half" : "quart";
        
        return (<div key={course.id} onClick={() => {this.removeCourse(course.id)}} className={"course " + courseClassName}><p className="name">{course.name}</p></div>);
    }

    public render() {
        return (
            <div className="course-overview">
                <div className="semester summer">
                    {_.map(this.state.selectedElectiveCourses.filter((electiveCourse: Course) => { return _.includes(electiveCourse.semesterType, semesterType.summer) }), (course) => { return this.getCourseBlocks(course); })}
                </div>
                <div className="semester winter">
                    {_.map(this.state.selectedElectiveCourses.filter((electiveCourse: Course) => { return _.includes(electiveCourse.semesterType, semesterType.winter) }), (course) => { return this.getCourseBlocks(course); })}
                </div>
            </div>
        );
    }
}