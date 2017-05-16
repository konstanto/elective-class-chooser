import "./FurtherProcessDialog.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';
import * as _ from "lodash";

import { Course } from "../../pages/wizard/Data";

interface FurtherProcessDialogProps {
    onClose(): void;
    selectedCourses: Course[];
}

export class FurtherProcessDialog extends React.Component<FurtherProcessDialogProps, void>{
    private goToKuNet(){
        window.open("https://intranet.ku.dk/Sider/default.aspx", "_blank");
    }
    
    public render() {
        return (
            <div className="further-process-dialog">
                <div className="modal">
                    <div className="description-view">
                        <div className="text-content">
                            <div className="top">
                                <h2>Du har fundet alle dine valgfag</h2>
                                <p>Godt arbejde!</p>
                                <div className="selectedCourses">
                                    <p><b>Du har valgt disse valgfag:</b></p>
                                    {_.map(this.props.selectedCourses, (course) => {
                                        return (<p><a target="_blank" href={course.courseInfo}>{course.name}</a></p>);
                                    })}
                                </div>

                            </div>
                            <p><b>Du har ikke ansøgt endnu</b></p>
                            <p>For at ansøge om de fag du har valgt skal du bruge selvbetjening på KU Net.</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button onClick={() => { this.props.onClose() } }>Tilbage</button>
                        <button className="default-button" onClick={() => { this.goToKuNet() } }>Gå til KUnet</button>
                    </div>
                </div>
            </div>
        );
    }
}