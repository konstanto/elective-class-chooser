import "./ChooseYear.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface ChooseStudyProps {
    startingYear: string;
    semester: string;
    onChangeStartingYear(value: string): void;
    onChangeSemester(value: string): void;
}

export class ChooseYear extends React.Component<ChooseStudyProps, void>{
    private onChangeStartingYear(element: HTMLSelectElement) {
        this.props.onChangeStartingYear(element.value)
    }

    private onChangeSemester(element: HTMLSelectElement) {
        this.props.onChangeSemester(element.value)
    }

    public render() {
        return (
            <div className="choose-year">
                <h2>Hvilket år startede du studie?</h2>
                <select value={this.props.startingYear} onChange={(element) => { this.onChangeStartingYear(element.currentTarget) } }>
                    <option value={null}>-- Vælg år --</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </select>

                <h2>Hvilket semester er du på nu?</h2>
                <select value={this.props.semester} onChange={(element) => { this.onChangeSemester(element.currentTarget) } }>
                    <option value={null}>-- Vælg semester --</option>
                    <option value="5">5. semester</option>
                    <option value="4">4. semester</option>
                    <option value="3">3. semester</option>
                    <option value="2">2. semester</option>
                    <option value="1">1. semester</option>
                </select>
            </div>
        );
    }
}