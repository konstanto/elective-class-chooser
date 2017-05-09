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
    courseInfo?: string
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
    basicCourses: ["32", "33", "34", "35", "36", "38", "39", "40", "41"]
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
    courseInfo: "http://kurser.ku.dk/course/hkmb00161u/2017-2018"
}, {
    id: "2",
    name: "Grundlæggende kommunikationsteori",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00151u/2017-2018"
}, {
    id: "3",
    name: "Empiriske undersøgelsesmetoder",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00174u/2017-2018"
}, {
    id: "4",
    name: "1. årsprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00176u/2017-2018"
}, {
    id: "5",
    name: "Interaktionsdesign",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00182u/2017-2018"
}, {
    id: "6",
    name: "Analyse, design og regulering af IT-infrastruktur",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_og_it_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00191u/2017-2018"
}, {
    id: "7",
    name: "Fagets Videnskabsteori",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00201u/2017-2018"
}, {
    id: "8",
    name: "Audiovisuel kommunikation",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00211u/2017-2018"
}, {
    id: "9",
    name: "Kommunikation i kontekst",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00221u/2016-2017"
}, {
    id: "10",
    name: "Designprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00231u/2016-2017"
}, {
    id: "11",
    name: "Projektstyring og kravsspecificering",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/kommunikation/kommunikation_it_batv_2012.pdf",
    courseInfo: "http://kurser.ku.dk/course/hkmb00241u/2016-2017"
}, {
    id: "13",
    name: "Projektorienteret forløb efterår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    
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
    link: "http://kurser.ku.dk/course/hrtb00802u/2017-2018",
    courseInfo: "http://kurser.ku.dk/course/hrtb00802u/2017-2018"
}, {
    id: "20",
    name: "Retorisk skrivning og rÂdgivning",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_ba.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00821u/2017-2018"
}, {
    id: "21",
    name: "Taleværksted og -rådgivning",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00892u/2017-2018"
}, {
    id: "22",
    name: "Retorik i samfundet: Temastudium",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/retorik/retorik_batv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hrtb00882u/2017-2018"
}, {
    id: "23",
    name: "Argumentationsteori og metode (Logik 1)",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00621u/2016-2017"
}, {
    id: "24",
    name: "Teoretisk filosofi: Bevidsthedsfilosofi og metafysik",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00462u/2016-2017"
}, {
    id: "25",
    name: "Værklæsning (AFLYST)",
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
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00511u/2016-2017"
}, {
    id: "27",
    name: "Fænomenologi og eksistensfilosof",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00521u/2016-2017"
}, {
    id: "28",
    name: "Anvendt filosofi",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/filosofi/filosofi_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfib00631u/2017-2018"
}, {
    id: "29",
    name: "Film- og mediehistorie", 
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf"
}, {
    id: "30",
    name: "Fiktionsteori og -analyse",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",   
    courseInfo: "http://kurser.ku.dk/course/hfmb10512u/2017-2018"
}, {
    id: "31",
    name: "Filmhistorie inkl. tilvalg",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/film_medievidenskab/film_og_medievidenskab_gymtv.pdf",
    courseInfo: "http://kurser.ku.dk/course/hfmb00682u/2017-2018"
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
    name: "MANGLER Professioner, vidensformer og anvendelse",    
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
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10141u/2016-2017"
}, {
    id: "35",
    name: "Komparativ pædagogik og globalisering",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10151u/2016-2017"
}, {
    id: "36",
    name: "Læring i arbejdslivet - individ og organisation",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10161u/2016-2017"
},  {
    id: "38",
    name: "Didaktik, curriculumteori og curriculumsociologi",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.fall],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf"
}, {
    id: "39",
    name: "MANGLER Fordybelse i særligt studeret emne",  
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
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10152u/2017-2018"
}, {
    id: "41",
    name: "Pædagogisk forskningspraksis",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.spring],
    link: "http://hum.ku.dk/uddannelser/aktuelle_studieordninger/paedagogik/paedagogik_batv_2015.pdf",
    courseInfo: "http://kurser.ku.dk/course/hpÆb10202u/2017-2018"
}
];