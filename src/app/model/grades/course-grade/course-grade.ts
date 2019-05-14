export class CourseGrade {
    course: string;
    grade: string;
    name: string;
    ects: string;
    passed: boolean;
    bachelor: boolean;
    master: boolean;
    constructor(
        course: string,
        name: string,
        grade: string,
        ects: string,
        passed: boolean,
        bachelor: boolean,
        master: boolean
    ) {
        this.course = course;
        this.name = name;
        this.grade = grade;
        this.ects = ects;
        this.passed = passed;
        this.bachelor = bachelor;
        this.master = master;
    }
}
