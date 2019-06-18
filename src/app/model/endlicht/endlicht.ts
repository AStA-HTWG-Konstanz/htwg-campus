export class Endlicht {
    special: { name: string, price: string };
    beverages: { name: string, price: string }[];
    constructor(private openingHours: any, special: any, beverages: any) {
        this.special = special;
        this.beverages = beverages;
    }
}