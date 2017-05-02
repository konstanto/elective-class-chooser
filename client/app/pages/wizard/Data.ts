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
}

export enum semesterType {
    summer,
    winter
}

export const studies: Study[] = [{
    id: "1",
    name: "Kommunikation og IT",
    basicCourses: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
}, {
    id: "2",
    name: "Film og medievidenskab",
    basicCourses: []
}];

export const courses: Course[] = [{
    id: "1",
    name: "Grundlæggende datalogi",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.summer]
}, {
    id: "2",
    name: "Grundlæggende kommunikationsteori",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.summer]
}, {
    id: "3",
    name: "Empiriske undersøgelsesmetoder",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "4",
    name: "1. årsprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "5",
    name: "Interaktionsdesign",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "6",
    name: "Analyse, design og regulering af IT-infrastruktur",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.summer]
}, {
    id: "7",
    name: "Videnskabsteori",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.summer]
}, {
    id: "8",
    name: "Audiovisuel kommunikation",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.summer]
}, {
    id: "9",
    name: "Kommunikation i kontekst",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "10",
    name: "Designprojekt",
    ects: 7.5,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "11",
    name: "Projektstyring og kravsspecificering",
    ects: 7.5,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.winter]
}, {
    id: "12",
    name: "Bachelorprojekt",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.summer]
}, {
    id: "13",
    name: "Projektorienteret forløb forår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.summer]
}, {
    id: "14",
    name: "Projektorienteret forløb efterår",
    ects: 15,
    externalCensor: false,
    graded: false,
    semesterType: [semesterType.winter]
}, {
    id: "15",
    name: "Humanistisk entrepreneurship",
    ects: 15,
    externalCensor: false,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "16",
    name: "Humanistisk entrepreneurship 1",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "17",
    name: "Humanistisk entrepreneurship 2",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.winter]
}, {
    id: "18",
    name: "Humanistisk entrepreneurship 3",
    ects: 15,
    externalCensor: true,
    graded: true,
    semesterType: [semesterType.winter]
}];