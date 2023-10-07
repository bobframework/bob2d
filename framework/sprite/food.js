import { Sprite } from "./super.js";
export class Food extends Sprite {
    constructor() {
        super();
        this.attributes.can_outofscreen = true;
        this.type = "food";
        this.vector.x = -1;
        this.attributes.attack = 0;
    }
    update() {
        super.update();
    }
}