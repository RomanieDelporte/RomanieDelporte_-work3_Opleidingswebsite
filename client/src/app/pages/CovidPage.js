import React from 'react'

import './CovidPage.scss';

const CovidPage = () => {
    return (
        <div className="container mx-auto p-8 covid_guide ">
                 <h1 className="text-3xl mb-2">Coronamaatregelen</h1>
            <div className="covid_guide__text px-1 mt-5">
                <p>De maatregelen beïnvloeden de oorspronkelijk voorziene werkwijze en planning van studenten en van medewerkers.<br></br>We willen iedereen goed informeren over de stand en zaken en de te verwachten wijzigingen.</p>
                <p>We werken nauw samen met de bevoegde overheidsinstanties en onderwijskoepels om snel te kunnen reageren.</p>
            </div>
            <div className="px-5 mt-2 covid_guide__list">
                <ul>
                    <li>Opleidingen staan in voor de communicatie over de verdere concrete invulling hiervan voor studenten.</li>
                    <li>Medewerkers krijgen vervolgcommunicatie via het expertisenetwerk waarin ze werken of via de diensthoofden</li>
                </ul>
            </div>
            <div className="mt-20 covid_guide__info">
                <h3>Wat te doen bij (vermoeden van ) besmetting of na quarantaine?</h3>
                <div className="mt-4 row">
                    <p className="px-3 mt-2 covid_guide__guidelines">Het is belangrijk dat je dan de hogeschool zo snel mogelijk<br></br> <span>op de hoogte brengt.</span> Wij maken erover dat deze informatie <br></br>vertrouwelijk behandeld wordt.</p>
                <div className="col-12 col-lg-7 order-lg-2 pl-lg-5 covid_guide__guidebox">
                        <p>1. Breng ons telefonisch op de hoogte of vul het online formulier in.</p>
                <div className="px-8 mt-2 covid_guide__form">
                        <ul>
                            <li>Bel jouw opleidingssecretariaat of het algemeen nummer (092349000).Onze medewerkers zullen samen met jou telefonisch een meldingsformulier overlopen om alles zo snel mogelijk in kaart te brengen.</li>
                            <li className="mt-2">Je kan de hogeschool ook verwittigen via dit <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=6oDgtrmteUyTA23Pgm-4VDYB6RY1dr9NgFrmjgboDYtUNlJQTDM4RVkxUVdLSDcwOTYwVVlaMFkzUC4u" target="_blank" rel="noopener noreferrer">intern meldingsformulier</a></li>
                        </ul>
                </div>
                    <p>2. Na intern overleg met onder andere de preventiedienst en je opleidingshoofd word je gecontacteerd door je opleiding om verdere afspraken te maken.</p>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row covid_guide__measures">
                    <h3 className=" mt-5 covid_guide_guidelines">We sommen de belangrijkste maatregelen voor studenten kort voor je op (algemeen kader):</h3>
                    <div className="px-8 mt-2 covid_guide__import">
                        <ul>
                            <li>Afstandonderwerijs is de norm voor de meeste onderwijsactiviteiten</li>
                            <li>Vanaf 30 november kan een beperkt aantal gerichte onderwijsactiviteiten op de campus plaats vinden.</li>
                            <li>De campussen blijven geopend en beperkt toegankelijk</li>
                            <li>De afstands en hygiëneregels en de algemene mondmaskerplicht op de campus blijven gelden.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default CovidPage;