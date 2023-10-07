import { store } from '../store.js';
import { text } from '../canvas.js';
export const paused = () => {
    text(`Paused`);
    if (store.k === "KeyP") {
        store.k = "";
        store.state = 'main_looping';
        return false;
    }
}