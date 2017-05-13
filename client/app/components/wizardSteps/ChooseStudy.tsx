import "./ChooseStudy.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

import { Study } from "../../pages/wizard/Data";

interface ChooseStudyProps {
    study: string;
    onChange(value: string): void;
    options: Study[]
}

export class ChooseStudy extends React.Component<ChooseStudyProps, void>{
    private onChangeEvent(element: HTMLSelectElement) {
        this.props.onChange(element.value)
    }

    public render() {
        return (
            <div className="choose-study">
                <div className="choose-study-content">
                    <div className="ku-logo"></div>
                    <h1>Skal du vælge valgfag?</h1>
                    <p className="subtext">Brug Valgfagsvælgeren til at gennemse, <br />hvilke valgfag der er tilgængelige for dig på MEF.</p>
                    <select tabIndex={1} value={this.props.study} onChange={(element) => { this.onChangeEvent(element.currentTarget) } }>
                        <option value={""}>-- Vælg studie --</option>
                        {this.props.options.map((study) => { return <option key={study.id} value={study.id}>{study.name}</option> })}
                    </select>
                </div>
            </div>
        );
    }
}