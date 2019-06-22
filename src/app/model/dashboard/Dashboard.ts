import { MainTile } from "./mainTile/mainTile";

export class Dashboard {
    tiles: MainTile[];
    constructor(tiles: MainTile[]) {
        this.tiles = tiles
    }
}