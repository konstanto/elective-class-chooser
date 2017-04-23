import "./ChooseStudy.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface ChooseStudyProps {
    study: string;
    onChange(value: string): void;
}

export class ChooseStudy extends React.Component<ChooseStudyProps, void>{
    private onChangeEvent(element: HTMLSelectElement){
        this.props.onChange(element.value)
    }
    
    public render() {
        return (
            <div className="choose-study">
                <h1>Skal du vælge valgfag?</h1>
                <h2>– Få et hurtigt overblik her</h2>
                <select value={this.props.study} onChange={(element) => {this.onChangeEvent(element.currentTarget)}}>
                    <option value={""}>-- Vælg studie --</option>
                    <option value="1">Kommuikation og IT</option>
                    <option value="2">Film og medievidenskab</option>
                </select>
            </div>
        );
    }
}