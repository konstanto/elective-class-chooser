import "./Rules.less";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router";

export class Rules extends React.Component<void, void>{
    public render() {
        return (
            <div className="rules">
                <h1>Valgfag - Hvilke krav skal jeg være opfylde?</h1>

                <h2>Studieordninger</h2>
                <p>Din uddannelse følger den pågældende studieordning, der var tilknyttet da du startede til studie. Med Valgfagsvælgeren finder vi nemt og hurtigt den studieordning, som passer til dit valgfag.</p>

                <h2>ECTS i bacheloruddannelsen</h2>
                <p>ECTS står for "European Credit Transfer System".</p>
                <p>Din uddannelse måles i ECTS-point. Et semester på KU svarer til 30 ECTS-point. Hvert fag tæller et bestemt antal ECTS-point, og du skal derfor vælge fag, så det svarer sig til den normerede tid på 30 ECTS.</p>
                <p>Når du finder valgfag via vores hjemmeside, skal du være opmærksom på, at Valgfagsvælgeren ikke tager højde for en studieplan, hvor der tages 45 ECTS-point på et år.</p>

                <h2>Censor</h2>
                <p>Mindst 1/3 af din samlede uddannelsesprøver skal aflægges som eksterne prøver, dvs. med bedømmelse af en ekstern censor.
det betyder altså at 2/3 af dine eksamener skal bedømmes af en intern censor.</p>

                <h2>Bedømmelse</h2>
                <p>Mindst 2/3 af din samlede uddannelse bedømmes med karakter og højst 1/3 som ”bestået/ikke bestået”.</p>

                <h2>Tilmelding</h2>
                <p>Du tilmelder dig bachelortilvalg på Det Humanistiske Fakultet via Selvbetjeningen i undervisningstilmeldingsperioden. HUSK, at dine tilmeldinger er bindende, når semesteret er begyndt.</p>

                <h2>Dispensationer</h2>
                <p><b>BEMÆRK</b><br />
                    Valgfagsvælgeren tager ikke højde for studerende, som har fået dispensation fra studiet. Du kan dog stadig søge efter valgfag, men bemærk at Valgfagsvælgerens vejledende studieplan kan være misvisende.</p>

                <p>Er du stadig usikker på, om du har husket alt?<br />
                    Vi har samlet ovenstående informationer ud fra KUs officielle hjemmesider: <a href="https://intranet.ku.dk/kommunikationogit_ba/tilvalg/ba-tilvalg/Sider/default.aspx">https://intranet.ku.dk/kommunikationogit_ba/tilvalg/ba-tilvalg/Sider/default.aspx</a></p>
            </div>);
    }
}