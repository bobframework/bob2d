import { Sprite } from "./super.js";
export class Enemy extends Sprite {
    constructor() {
        super();
        this.attributes.can_outofscreen = true;
        this.type = "enemy";
        this.vector.x = -1;
        this.vector.y = 0;
    }
    update() {
        super.update();
    }
}