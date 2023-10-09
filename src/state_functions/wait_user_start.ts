import { store, State } from '../store';
import { clear, text } from '../canvas';
import { settings } from '../setting';
export const wait_user_start = () => {
    clear();
    text(`Press S to Start`, true, {
        x: settings.screen.w / 2,
        y: settings.screen.h / 1.7
    });
    if (store.k === "KeyS") {
        store.k = "";
        store.state = State.main_looping;
        return false;
    }
}