import "./Legal.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";

export class Legal extends React.Component<void, void>{
    public render() {
        return (
            <div className="legal">
                <h1>Juridisk</h1>
                <p>Valgfagsoverblikket, som Valgfagsvælgeren tilbyder de studerende, er kun vejledende, og den studerende skal søge en studievejleders hjælp, for en nøjagtig viden omkring universitetspolitik og præcise muligheder. Vi søger at give de studerende et nemt overblik over valgfag, men nye valgfag kan være tilføjet, og nuværende valgfag kan være ændret.</p>
                <p>Vi tager forbehold for stavefejl, samt informationer, som kan have ændret sig siden udgivelsen af de pågældende officielle dokumenter - herunder studieordninger.</p>
            </div>
            );
    }
}