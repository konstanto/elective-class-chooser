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
}

export enum semesterType {
    fall,
    spring
}

export const studies: Study[] = [{
    id: "1",
    name: "Kommunikation og IT",
    basicCourses: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
}, {
    id: "2",
    name: "Retorik",
    basicCourses: ["19", "20", "21", "22"]
}, {
    id: "3",
    name: "Filosofi",
    basicCourses: ["23", "24", "25", "26", "27", "28"]
}, {
    id: "4",
    name: "Film- og medievidenskab",
    basicCourses: ["29", "30", "31"]
}, {
    id: "5",
    name: "Pædagogik",
    basicCourses: ["32", "33", "34", "35", "36", "37", "38", "39", "40", "41"]
}];

export const courses: Course[] = [{
    id: "1",
    name: "Grundlæggende datalogi",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://kurser.ku.dk"
}, {
    id: "2",
    name: "Grundlæggende kommunikationsteori",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "3",
    name: "Empiriske undersøgelsesmetoder",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "4",
    name: "1. årsprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "5",
    name: "Interaktionsdesign",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "6",
    name: "Analyse, design og regulering af IT-infrastruktur",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_og_it_ba.pdf"
}, {
    id: "7",
    name: "Videnskabsteori",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "8",
    name: "Audiovisuel kommunikation",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "9",
    name: "Kommunikation i kontekst",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "10",
    name: "Designprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "11",
    name: "Projektstyring og kravsspecificering",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf"
}, {
    id: "12",
    name: "Bachelorprojekt",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall]
}, {
    id: "13",
    name: "Projektorienteret forløb efterår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall]
}, {
    id: "14",
    name: "Projektorienteret forløb forår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring]
}, {
    id: "15",
    name: "Humanistisk entrepreneurship",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring]
},
{
    id: "19",
    name: "Retorisk teori og analyse",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://kurser.ku.dk/course/hrtb00802u/2017-2018"
}, {
    id: "20",
    name: "Retorisk skrivning og rÂdgivning",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf"
}, {
    id: "21",
    name: "Taleværksted og -rådgivning",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf"
}, {
    id: "22",
    name: "Retorik i samfundet: Temastudium",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf"
}, {
    id: "23",
    name: "Logik 1 og praktisk filosofi 1",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "24",
    name: "Teoretisk filosofi: Bevidsthedsfilosofi og metafysik",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "25",
    name: "Værklæsning",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"

}, {
    id: "26",
    name: "Filosofisk Æstetik",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "27",
    name: "Fænomenologi og eksistensfilosof",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "28",
    name: "Anvendt filosofi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "29",
    name: "Film- og mediehistorie",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "30",
    name: "Fiktionsteori og -analyse",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "31",
    name: "Film- og mediesociologi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf"
}, {
    id: "32",
    name: "Professioner, vidensformer og anvendelse",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "33",
    name: "Professioner, vidensformer og anvendelse",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "34",
    name: "Psykologiske temaer i pædagogik",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "35",
    name: "Komparativ pædagogik og globalisering",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "36",
    name: "Læring i arbejdslivet ñ individ og organisation",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "37",
    name: "Læring i arbejdslivet ñ individ og organisation",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "38",
    name: "Didaktik, curriculumteori og curriculumsociologi",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "39",
    name: "Fordybelse i særligt studeret emne",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "40",
    name: "Pædagogisk sociologi og uddannelsessociologi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "41",
    name: "Pædagogisk forskningspraksis",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}
];