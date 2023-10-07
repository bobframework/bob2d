import { store } from '../store.js';
import { clear, text } from '../canvas.js';
export const wait_user_start = () => {
    clear();
    text(`Press S to Start`);
    if (store.k === "KeyS") {
        store.k = "";
        store.state = 'main_looping';
        return false;
    }
}