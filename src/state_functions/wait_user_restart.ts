import { store, State } from '../store';
import { text } from '../canvas';
import { settings } from '../setting';
import { player } from '../sprite/player';

export const wait_user_restart = () => {
    text(`Game Over`, true, {
        x: settings.screen.w / 2,
        y: settings.screen.h / 1.7
    });
    if (store.k === "KeyR") {
        store.k = "";
        //restart

        player.score = 0;
        store.time = 0;

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

        store.state = State.main_looping;
    }
}