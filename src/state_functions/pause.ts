import { store, State } from '../store';
import { text } from '../canvas';
import { settings } from '../setting';
export const paused = () => {
    text(`Paused`, true, {
        x: settings.screen.w / 2,
        y: settings.screen.h / 1.7
    });
    if (store.k === "KeyP") {
        store.k = "";
        store.state = State.main_looping;
        return false;
    }
}