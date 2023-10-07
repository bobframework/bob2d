import { Sprite } from "./super.js";
import { store } from "../store.js";

export class Player extends Sprite {
    constructor() {
        super();
        this.attributes.can_outofscreen = false;
        this.type = "player";
    }
    update() {
        super.update();
    }
}

export const player = new Player();
store.sprites.push(player);

export const player_get_attribute = (name) => {
    return player.attributes[name] || player[name];
}

export const player_set_attribute = (name, value) => {
    if (name === "location" || name === "size" || name === "vector") {
        player[name] = value;
    } else {
        player.attributes[name] = value;
    }
}
