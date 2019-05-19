export class Lecture {
    name: string;
    startTime: string;
    endTime: string;
    room: string;
    category: string;
    constructor(
        name: string,
        startTime: string,
        endTime: string,
        room: string,
        category: string
    ) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.room = room;
        this.category = category;
    }

}