import { store } from '../store.js';
import { text } from '../canvas.js';
import { player } from '../player.js';

export const wait_user_restart = () => {
    text(`Game Over`);
    if (store.k === "KeyR") {
        store.k = "";
        //restart
        player.attributes.life = 1;
        player.vector.y = 0;
        player.location.y = 50;

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