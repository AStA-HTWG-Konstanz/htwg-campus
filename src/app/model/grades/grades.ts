import { SemesterGrades } from "./semester-grades";
export class Grades {
    grades: SemesterGrades[]
    constructor(
        grades: SemesterGrades[]
    ) {
        this.grades = grades;
    }
}
