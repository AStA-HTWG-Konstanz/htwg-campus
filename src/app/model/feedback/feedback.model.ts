export class Feedback {

    public os: string;
    public category: number;
    public message: string;

    constructor(os: string, category: number, message: string) {
        this.os = os;
        this.category = category;
        this.message = message;
    }

}