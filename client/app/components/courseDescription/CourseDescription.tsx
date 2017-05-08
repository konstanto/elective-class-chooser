import "./CourseDescription.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface CourseDescriptionProps {
    courseId: string;
    courseName: string;
    courseDescriptionLink: string;
    onSelectCourse(courseId: string): void;
    onClose(): void;
}

export class CourseDescription extends React.Component<CourseDescriptionProps, void>{
    public render() {
        return (
            <div className="course-description">
                <div className="modal">
                <div className="course-title">
                    <h2>{this.props.courseName}</h2>
                </div>
                <div className="description-view">
                    <iframe src={this.props.courseDescriptionLink}></iframe>
                </div>
                <div className="action-buttons">
                    <button onClick={()=>{this.props.onClose()}}>Cancel</button>
                    <button className="default-button" onClick={()=>{this.props.onSelectCourse(this.props.courseId)}}>Select</button>
                </div>
                </div>
            </div>
        );
    }
}