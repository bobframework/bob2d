import { store } from '../store.js';
import { text } from '../canvas.js';
import { settings } from '../setting.js';
import { player } from '../sprite/player.js';

const collision_detection = () => {
    const enemys = store.sprites.filter(sprite => sprite.type === "enemy");
    const bullets = store.sprites.filter(sprite => sprite.type === "bullet");

    enemys.forEach(enemy => {
        if (enemy.location.x < player.location.x + player.size.w * 0.75 &&
            enemy.location.x + enemy.size.w * 0.75 > player.location.x &&
            enemy.location.y < player.location.y + player.size.h * 0.75 &&
            enemy.location.y + enemy.size.h * 0.75 > player.location.y) {
            player.attributes.life -= enemy.attributes.attack;
            enemy.attributes.life -= player.attributes.attack;
        }

        bullets.forEach(bullet => {
            if (enemy.location.x < bullet.location.x + bullet.size.w * 0.75 &&
                enemy.location.x + enemy.size.w * 0.75 > bullet.location.x &&
                enemy.location.y < bullet.location.y + bullet.size.h * 0.75 &&
                enemy.location.y + enemy.size.h * 0.75 > bullet.location.y) {
                bullet.attributes.life -= enemy.attributes.attack;
                enemy.attributes.life -= bullet.attributes.attack;
            }
        });

    });

}

export const main_looping = () => {
    store.time += 1;
    settings.on_time_update(store.time);

    if (store.k === "KeyP") {
        store.k = "";
        store.state = 'paused';
    }

    if (store.k === "") {
        if (player.attributes.can_userctrl) {
            player.vector.x = 0;
            player.vector.y = 0;
        }
    }

    if (store.k === "KeyW") {
        if (player.attributes.can_userctrl) {
            player.vector.x = 0;
            player.vector.y = -1;
        }

    }
    if (store.k === "KeyS") {
        if (player.attributes.can_userctrl) {
            player.vector.x = 0;
            player.vector.y = 1;
        }

    }
    if (store.k === "KeyA") {
        if (player.attributes.can_userctrl) {
            player.vector.x = -1;
            player.vector.y = 0;
        }

    }
    if (store.k === "KeyD") {
        if (player.attributes.can_userctrl) {
            player.vector.x = 1;
            player.vector.y = 0;
        }

    }
    if (store.k === "KeyJ") {
        store.k = "";
        settings.on_j();
    }
    if (store.k === "KeyK") {
        store.k = "";
        settings.on_k();
    }

    store.sprites.forEach(s => {
        s.update();
    });

    text(`${store.time} m`, 10, 10);

    collision_detection();

    store.sprites.forEach((s, i) => {
        if (s.attributes.life < 1) {
            if (s.type === "player") {
                //game over
                store.state = 'wait_user_restart';
                return false;
            } else {
                store.sprites.splice(i, 1);
            }
        }
    });
}