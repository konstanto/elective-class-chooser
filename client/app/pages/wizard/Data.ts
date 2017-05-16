export interface Study {
    id: string;
    name: string;
    basicCourses: string[];
}

export interface Course {
    id: string;
    name: string;
    ects: number;
    externalCensor: boolean;
    graded: boolean;
    semesterType: semesterType[];
    link?: string;
    courseInfo?: string,
    belongingStudy?: string;
}

export enum semesterType {
    fall,
    spring
}

export const studies: Study[] = [{
    id: "1",
    name: "Kommunikation og IT",
    basicCourses: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
}, {
    id: "2",
    name: "Retorik",
    basicCourses: ["19", "20", "21", "42", "43", "44", "45", "46", "48", "47"]
}, {
    id: "3",
    name: "Filosofi",
    basicCourses: ["49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
}, {
    id: "4",
    name: "Film- og medievidenskab",
    basicCourses: ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"]
}, {
    id: "5",
    name: "Pædagogik",
    basicCourses: ["70", "71", "72", "73", "74", "75", "76", "77"]
}];

export const courses: Course[] = [{
    id: "0a",
    name: "Bachelorprojekt",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    courseInfo: "http://kurser.ku.dk/course/hkmb00251u/2017-2018"
}, {
    id: "0b",
    name: "Bachelorprojekt",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    courseInfo: "http://kurser.ku.dk/course/hkmb00251u/2017-2018"
}, {
    id: "1",
    name: "Grundlæggende datalogi",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00161u/2017-2018",
    belongingStudy: "1"
}, {
    id: "2",
    name: "Grundlæggende kommunikationsteori",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00151u/2017-2018",
    belongingStudy: "1"
}, {
    id: "3",
    name: "Empiriske undersøgelsesmetoder",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00174u/2017-2018",
    belongingStudy: "1"
}, {
    id: "4",
    name: "1. årsprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00176u/2017-2018",
    belongingStudy: "1"
}, {
    id: "5",
    name: "Interaktionsdesign",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00182u/2017-2018",
    belongingStudy: "1"
}, {
    id: "6",
    name: "Analyse, design og regulering af IT-infrastruktur",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_og_it_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00191u/2017-2018",
    belongingStudy: "1"
}, {
    id: "7",
    name: "Fagets Videnskabsteori",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00201u/2017-2018",
    belongingStudy: "1"
}, {
    id: "8",
    name: "Audiovisuel kommunikation",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00211u/2017-2018",
    belongingStudy: "1"
}, {
    id: "9",
    name: "Kommunikation i kontekst",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00221u/2016-2017",
    belongingStudy: "1"
}, {
    id: "10",
    name: "Designprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00231u/2016-2017",
    belongingStudy: "1"
}, {
    id: "11",
    name: "Projektstyring og kravsspecificering",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00241u/2016-2017",
    belongingStudy: "1"
}, {
    id: "13",
    name: "Projektorienteret forløb efterår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    courseInfo: "http://kurser.ku.dk/course/hfmk03414u/2017-2018",
    belongingStudy: "4"
}, {
    id: "14",
    name: "Projektorienteret forløb forår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    courseInfo: "http://kurser.ku.dk/course/hfmk03414u/2017-2018",
    belongingStudy: "4"
},
{
    id: "19",
    name: "Retorisk teori og analyse",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://kurser.ku.dk/course/hrtb00802u/2017-2018",
    courseInfo: "http://kurser.ku.dk/course/hrtb00802u/2017-2018",
    belongingStudy: "2"
}, {
    id: "20",
    name: "Retorisk skrivning, sprog og stil",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/HRTB00811U/2017-2018",
    belongingStudy: "2"
}, {
    id: "21",
    name: "Retorisk skrivning og rådgivning",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00821u/2016-2017",
    belongingStudy: "2"
}, {
    id: "22",
    name: "Retorik i samfundet: Temastudium",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00882u/2017-2018",
    belongingStudy: "2"
}, {
    id: "24",
    name: "Teoretisk filosofi: Bevidsthedsfilosofi og metafysik",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00462u/2016-2017",
    belongingStudy: "3"
}, {
    id: "26",
    name: "Filosofisk Æstetik",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00511u/2016-2017",
    belongingStudy: "3"
}, {
    id: "27",
    name: "Fænomenologi og eksistensfilosof",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00521u/2016-2017",
    belongingStudy: "3"
}, {
    id: "28",
    name: "Anvendt filosofi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00631u/2017-2018",
    belongingStudy: "3"
}, {
    id: "29",
    name: "Film- og mediehistorie",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb10501u/2017-2018",
    belongingStudy: "4"
}, {
    id: "31",
    name: "Filmhistorie inkl. tilvalg",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00682u/2017-2018",
    belongingStudy: "4"
}, {
    id: "32",
    name: "Professioner, vidensformer og anvendelse",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    belongingStudy: "5"
}, {
    id: "36",
    name: "Læring i arbejdslivet - individ og organisation",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10161u/2016-2017",
    belongingStudy: "5"
}, {
    id: "39",
    name: "Fordybelse i særligt studeret emne",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    belongingStudy: "5"
}, {
    id: "42",
    name: "Argumentation",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/HRTB00832U/2017-2018",
    belongingStudy: "2"
}, {
    id: "43",
    name: "Stemmebrug",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00842u/2017-2018",
    belongingStudy: "2"
}, {
    id: "44",
    name: "Fortælling og oplæsning",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00851u/2017-2018",
    belongingStudy: "2"
}, {
    id: "45",
    name: "Videnskabsteori",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00861u/2017-2018",
    belongingStudy: "2"
}, {
    id: "46",
    name: "Retorisk kritik",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00871u/2017-2018",
    belongingStudy: "2"
}, {
    id: "47",
    name: "Taleværksted og - rådgivning",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00821u/2016-2017",
    belongingStudy: "2"
}, {
    id: "48",
    name: "Retorik i samfundet: Temastudium",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00821u/2016-2017",
    belongingStudy: "2"
}, {
    id: "49",
    name: "Etik og politisk filosofi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00601u/2017-2018",
    belongingStudy: "3"
}, {
    id: "50",
    name: "Antikkens og middelalderens filosofi",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfi%C3%8500611u/2017-2018",
    belongingStudy: "3"
}, {
    id: "51",
    name: "Argumentationsteori og metode",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00622u/2017-2018",
    belongingStudy: "3"
}, {
    id: "52",
    name: "Anvendt filosofi / Formel logik",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00631u/2017-2018",
    belongingStudy: "3"
}, {
    id: "53",
    name: "Renæssancens og nyere tids filosofi",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00652u/2017-2018",
    belongingStudy: "3"
}, {
    id: "54",
    name: "Erkendelsesteori og bevidsthedsfilosofi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00661u/2017-2018",
    belongingStudy: "3"
}, {
    id: "55",
    name: "Fænomenologi, hermenutik og dekonstruktion",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00671u/2017-2018",
    belongingStudy: "3"
}, {
    id: "56",
    name: "Sprogfilosofi",
    ects: 7.5,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00682u/2017-2018",
    belongingStudy: "3"
}, {
    id: "57",
    name: "Videnskabsfilosofi",
    ects: 7.5,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00692u/2017-2018",
    belongingStudy: "3"
}, {
    id: "58",
    name: "Metafysik / Filosofisk æstetik",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00702u/2017-2018",
    belongingStudy: "3"
}, {
    id: "59",
    name: "Metaetik / Værklæsning",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00722u/2017-2018",
    belongingStudy: "3"
}, {
    id: "60",
    name: "Kultur og Kommunikationsteori",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00641u/2017-2018",
    belongingStudy: "4"
}, {
    id: "61",
    name: "Introduktion til audiovisuel teori og analyse",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00651u/2017-2018",
    belongingStudy: "4"
}, {
    id: "62",
    name: "Mediehistorie",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00661u/2017-2018",
    belongingStudy: "4"
}, {
    id: "63",
    name: "Fiktionsteori- og analyse",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00672u/2017-2018",
    belongingStudy: "4"
}, {
    id: "64",
    name: "Filmhistorie",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00682u/2017-2018",
    belongingStudy: "4"
}, {
    id: "65",
    name: "Audiovisuel formidling: fiktion og fakta",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00693u/2017-2018",
    belongingStudy: "4"
}, {
    id: "66",
    name: "Audiovisuel formidling: web",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00701u/2017-2018",
    belongingStudy: "4"
}, {
    id: "67",
    name: "Audiovisuel formidling: fri produktion",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00711u/2017-2018",
    belongingStudy: "4"
}, {
    id: "68",
    name: "Film- og Mediesociologi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb10522u/2017-2018",
    belongingStudy: "4"
}, {
    id: "69",
    name: "Faktateori og -analyse",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00732u/2017-2018",
    belongingStudy: "4"
}, {
    id: "70",
    name: "Pædagogikken aktuelt",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hp%C3%86b00351u/2016-2017",
    belongingStudy: "5"
}, {
    id: "71",
    name: "Pædagogiskkens historie",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hp%C3%86b00461u/2017-2018",
    belongingStudy: "5"
}, {
    id: "72",
    name: "Pædagogisk sociologi og uddannelsessociologi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10152u/2017-2018",
    belongingStudy: "5"
}, {
    id: "73",
    name: "Pædagogisk videnskabsteori og forskningsmetode",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hp%C3%86b00381u/2016-2017",
    belongingStudy: "5"    
}, {
    id: "74",
    name: "Didaktik, curriculumteori og curriculumsociologi",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hp%C3%86b00391u/2017-2018",
    belongingStudy: "5"
}, {
    id: "75",
    name: "Psykologiske temaer i pædagogik",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10141u/2016-2017",
    belongingStudy: "5"
}, {
    id: "76",
    name: "Komparativ pædagogik og globalisering",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10151u/2016-2017",
    belongingStudy: "5"
}, {
    id: "77",
    name: "Pædagogisk forskningspraksis",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10202u/2017-2018",
    belongingStudy: "5"
}
];