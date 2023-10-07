import { loop } from './state_functions/index.js';
import { settings } from './setting.js';
export { settings } from './setting.js';
export { store } from './store.js';
export { init_canvas } from './canvas.js';

export { player_get_attribute, player_set_attribute } from './sprite/player.js';

export * from './res.js';

export { factory } from "./sprite/index.js";

export const set_imgs = (...imgs) => {
    imgs.forEach((id, src) => {

    });
}

export const start = () => {
    settings.init();
    loop();
}
