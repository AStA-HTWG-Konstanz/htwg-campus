import { OpeningDay } from "./openingHours/openingDay";
import { Special } from "./specials/special";
import { Beverage } from "./beverages/beverage";

export class EndlichtContent {
    openingHours: Array<OpeningDay>
    specials: Array<Special>
    beverages: Array<Beverage>
    constructor(openingHours: Array<OpeningDay>, specials: Array<Special>, beverages: Array<Beverage>) {
        this.openingHours = openingHours
        this.specials = specials;
        this.beverages = beverages;
    }
}