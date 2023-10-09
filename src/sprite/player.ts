import { Sprite } from "./super";
import { store } from "../store";

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

export const player: any = new Player();
store.sprites.push(player);

export const player_get_attribute = (name: string) => {
    return player.attributes[name] || player[name];
}

export const player_set_attribute = (name: string, value: any) => {
    if (name === "location" || name === "size" || name === "vector") {
        player[name] = value;
    } else {
        player.attributes[name] = value;
    }
}
