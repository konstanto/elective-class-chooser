import "./FurtherProcessDialog.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router';

interface FurtherProcessDialogProps {
    onStartOver(): void;
    onClose(): void;
}

export class FurtherProcessDialog extends React.Component<FurtherProcessDialogProps, void>{
    public render() {
        return (
            <div className="further-process-dialog">
                <div className="modal">
                    <div className="description-view">
                        <div className="text-content">
                            <div className="top">
                                <h2>Du har fundet alle dine valgfag</h2>
                                <p>Godt arbejde!</p>
                            </div>
                            <p><b>Du har ikke ansøgt endnu</b></p>
                            <p>For at ansøge om de fag du har valgt skal du bruge selvbetjening på KU Net.</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button onClick={() => { this.props.onStartOver() } }>Start forfra</button>
                        <button className="default-button" onClick={() => { this.props.onClose() } }>Okay</button>
                    </div>
                </div>
            </div>
        );
    }
}