import { Sprite } from "./super";
export class Enemy extends Sprite {
    constructor() {
        super();
        this.attributes.can_outofscreen = true;
        this.type = "enemy";
        this.vector.x = 0;
        this.vector.y = 0;
    }
    update() {
        super.update();
    }
}