import { store } from '../store.js';
import { text } from '../canvas.js';
import { player } from '../sprite/player.js';
import { settings } from '../setting.js';

export const wait_user_restart = () => {
    text(`Game Over`);
    if (store.k === "KeyR") {
        store.k = "";
        //restartakdkk
        settings.init();

        store.sprites.forEach((s, i) => {
            if (s.type != "player") {
                store.sprites.splice(i, 1);
            } else {

            }
        });

        store.sprites.forEach((s, i) => {
            if (s.type != "player") {
                store.sprites.splice(i, 1);
            } else {

            }
        });

        store.state = 'main_looping';
    }
}