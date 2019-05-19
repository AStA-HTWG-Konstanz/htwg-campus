import { LecturesPerDay } from './lectures/LecturesPerDay';
export class Schedule {
    lectures: LecturesPerDay[];
    constructor(lectures: LecturesPerDay[]) {
        this.lectures = lectures;
    }
}