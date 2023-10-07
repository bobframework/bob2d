import { store } from '../store.js';

import { clear, text, draw } from '../canvas.js';

import { player } from '../player.js';

import { wait_all_images_loaded } from './wait_all_images_loaded.js';
import { wait_user_start } from './wait_user_start.js';
import { main_looping } from './main_looping.js';
import { paused } from './pause.js';
import { wait_user_restart } from './wait_user_restart.js';

export const loop = () => {
    switch (store.state) {
        case 'wait_images_loading':
            wait_all_images_loaded();
            break;
        case 'main_looping':
            main_looping();
            break;
        case 'wait_user_start':
            wait_user_start();
            break;
        case 'wait_user_restart':
            wait_user_restart();
            break;
        case 'paused':
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