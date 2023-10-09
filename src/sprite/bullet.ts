import { Sprite } from "./super";
export class Bullet extends Sprite {
    constructor() {
        super();
        this.attributes.can_outofscreen = true;
        this.type = "bullet";
        this.vector.x = -1;
    }
    update() {
        super.update();
    }
}