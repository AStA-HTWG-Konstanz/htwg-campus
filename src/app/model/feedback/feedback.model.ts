export class Feedback {

    public os: string;
    public category: number;
    public message: string;
    public device: string;

    constructor(os: string, category: number, message: string, device: string) {
        this.os = os;
        this.category = category;
        this.message = message;
        this.device = device;
    }

}