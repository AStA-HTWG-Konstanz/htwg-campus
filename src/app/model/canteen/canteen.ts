import { Menu } from "./menu/menu"
export class Canteen {
    
    public menu: Array<Menu>

    constructor(menu: Array<Menu> ) {
        this.menu = menu;
    }

}