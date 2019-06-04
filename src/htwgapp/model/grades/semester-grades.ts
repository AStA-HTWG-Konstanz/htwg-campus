import { CourseGrade } from "./course-grade/course-grade";
export class SemesterGrades {
    semesterIdentifier: string;
    semesterPerformance: CourseGrade[];
    constructor(
        semesterIdentifier: string,
        semesterPerformance: CourseGrade[]
    ) {
        this.semesterIdentifier = semesterIdentifier;
        this.semesterPerformance = semesterPerformance;
    }
}
