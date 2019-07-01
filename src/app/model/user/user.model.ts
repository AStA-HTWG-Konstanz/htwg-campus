export class User {

    public username: string;
    public password: string;
    public student: boolean = true;

    constructor(username: string, password: string, student?: boolean) {
        this.username = username;
        this.password = password;
        if (student) {
            this.student = student
        }
    }

}