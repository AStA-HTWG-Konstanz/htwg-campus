export class MainTile {
    name: string
    desc: string
    navigate: string
    imageSrc: string
    inactive: boolean
    hasDesc: boolean = false;

    constructor(name: string, desc: string, navigate: string, imageSrc: string, inactive: boolean) {
        this.name = name;
        this.desc = desc;
        this.navigate = navigate;
        this.imageSrc = imageSrc;
        this.inactive = inactive;
    }

    setDesc(desc: string) {
        this.desc = desc;
        this.hasDesc = true;
    }
}