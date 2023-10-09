import { loop } from './state_functions/index';
import { settings } from './setting';
export * from './setting';
export { store } from './store';
export { init_canvas } from './canvas';

export { player_get_attribute, player_set_attribute } from './sprite/player';

export * from './res';

export { factory } from "./sprite/index";

export const start = () => {
    settings.init();
    loop();
}
