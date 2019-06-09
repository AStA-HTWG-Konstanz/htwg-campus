export class scheduleUser {
    
    public username: string;
    public password: string;
    public student: boolean;

    constructor(username: string, password: string, student: boolean) {
        this.username = username;
        this.password = password;
        this.student = student;
    }

}