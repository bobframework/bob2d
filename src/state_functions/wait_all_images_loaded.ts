import { images } from '../res';
import { clear, text } from '../canvas';
import { settings } from '../setting';
import { store, State } from '../store';

export const wait_all_images_loaded = () => {
    const total = images.length;
    const loaded_count = images.filter(({ img }) => { return img.width != 0 }).length;
    clear();
    text(`${loaded_count}/${total}`, true, {
        x: settings.screen.w / 2,
        y: settings.screen.h / 1.7
    });

    console.log("auto", settings.auto_start);

    if ((loaded_count > 0 && loaded_count - total == 0) || total === 0) {
        if (settings.auto_start) {
            store.state = State.main_looping;
        } else {
            store.state = State.wait_user_start;
        }
    }
}