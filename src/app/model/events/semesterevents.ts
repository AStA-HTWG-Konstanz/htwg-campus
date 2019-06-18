export class SemesterEvents {
    events: { title: string, eventDate: string }[];
    constructor(events: any) {
        this.events = events;
    }
}