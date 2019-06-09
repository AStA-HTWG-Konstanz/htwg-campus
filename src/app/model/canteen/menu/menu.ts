import  { Meal } from "./meal/meal"
export class Menu {
    
    public date: string;
    public meals: Array<Meal>;

    constructor(date: string, meals: Array<Meal>) {
        this.date = date;
        this.meals = meals;
    }

}