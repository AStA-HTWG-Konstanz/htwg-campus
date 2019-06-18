export class Balance {
    private balance: any;
    print: string;
    constructor(balance: { print: string }) {
        this.print = balance.print;
    }
}