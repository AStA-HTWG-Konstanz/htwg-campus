export class MainTile {
    name: string
    desc: string = "";
    hasSecDesc: boolean = false;
    secDesc: string = "";
    navigate: string
    imageSrc: string
    inactive: boolean
    deactivate: boolean = false

    constructor(name: string, desc: string, navigate: string, imageSrc: string, inactive: boolean) {
        this.name = name;
        this.desc = desc;
        this.navigate = navigate;
        this.imageSrc = imageSrc;
        this.inactive = inactive;
    }
}