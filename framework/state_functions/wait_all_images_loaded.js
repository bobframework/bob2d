import { images } from '../res.js';
import { clear, text } from '../canvas.js';
import { settings } from '../setting.js';
import { store } from '../store.js';

export const wait_all_images_loaded = () => {
    const total = images.length;
    const loaded_count = images.filter((id, img) => { return img.width != 0 }).length;
    clear();
    text(`${loaded_count}/${total}`);

    if (loaded_count > 0 && loaded_count - total == 0) {
        if (settings.auto_start) {
            store.state = 'main_looping';
        } else {
            store.state = 'wait_user_start';
        }
    }

    if (total == 0) {
        if (settings.auto_start) {
            store.state = 'main_looping';
        } else {
            store.state = 'wait_user_start';
        }
    }
}