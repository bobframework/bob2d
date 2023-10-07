import * as Sprite from './sprite.js';

import { ctx } from './canvas.js';
import { loop } from './state_functions/index.js';
import { settings } from './setting.js';
export { settings } from './setting.js';
import { store } from './store.js';
export { store } from './store.js';
export { init_canvas } from './canvas.js';

import { player } from './player.js';

export * from './res.js';
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

export const factory = {
    make_enemy: () => {
        const enemy = new Sprite.Enemy(screen.w, screen.h - 10, 10, 10);
        store.sprites.push(enemy);
        return enemy;
    },
    make_food: () => {

    },
    make_bullet: () => {

    }
}

export const set_imgs = (...imgs) => {
    imgs.forEach((id, src) => {

    });
}

export const start = () => {
    settings.init();
    loop();
}
