import { State, store } from '../store';

import { draw } from '../canvas';


import { wait_all_images_loaded } from './wait_all_images_loaded';
import { wait_user_start } from './wait_user_start';
import { main_looping } from './main_looping';
import { paused } from './pause';
import { wait_user_restart } from './wait_user_restart';

export const loop = () => {
    switch (store.state) {
        case State.wait_images_loading:
            wait_all_images_loaded();
            break;
        case State.main_looping:
            main_looping();
            break;
        case State.wait_user_start:
            wait_user_start();
            break;
        case State.wait_user_restart:
            wait_user_restart();
            break;
        case State.paused:
            paused();
            break;
        default:
            break;
    }
    requestAnimationFrame(() => {
        draw();
        loop();
    });
}