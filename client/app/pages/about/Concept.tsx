import "./Concept.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";

export class About extends React.Component<void, void>{
    public render() {
        return (
            <div className="concept">
                <h1>Koncept</h1>
                <p>Er du også ved at drukne i formaliteter? Det var vi!</p>

                <p>Derfor har vi besluttet, at det skal være nemmere for bachelorstuderende at vælge valgfag på KU.</p>

                <p>Det skal være nemmere at:</p>
                <ul>
                    <li>planlægge resten af din studietid</li>
                    <li>tage vigtige fremtidsbeslutninger</li>
                    <li>finde valgfag og informationerne omkring dem</li>
                    <li>forstå hvilke valgfag du kan tage på baggrund af dit studiets krav</li>
                </ul>

                <h2>Hvad er Valgfagsvælgeren?</h2>
                <p>En effektiv og overskuelige måde at finde de valgfag, som foruden interessen, også passer til din studieordning dermed planlægge dit videre studieforløb.</p>
                <p>Ikke nok med at du kan få overblik over dit næste semester, vi giver dig mulighed for at se dit studie i et større perspektiv. Hvordan ser resten af dit studietid ud? Og hvordan kan du planlægge det på bedste vis?</p>
            </div>);
    }
}