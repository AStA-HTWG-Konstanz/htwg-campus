import { Lecture } from './lecture/Lecture';
export class LecturesPerDay {
    date: string;
    lectures: Lecture[];
    selected: boolean = false;
    constructor(
        date: string,
        lectures: Lecture[]
    ) {
        this.date = date;
        this.lectures = lectures;
    }
}