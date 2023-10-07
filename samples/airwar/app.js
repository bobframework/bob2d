import { init_canvas, load_image, settings, player_get_attribute, player_set_attribute, factory, start } from '/framework/index.js';

init_canvas("#app", 300, 300);

load_image(
    {
        id: "player",
        src: "./player.png"
    },
    {
        id: "ufo",
        src: "./ufo.png"
    }
);

const make_enemy = () => {

    function randomInteger(min, max) {
        // returns integer between min and max
        return Math.floor((Math.random() * max) + min);
    }

    const enemy = factory.make_enemy();
    enemy.location.x = randomInteger(0, 300 - 20);
    enemy.location.y = -20;
    enemy.size = { w: 40, h: 20 };
    enemy.vector.y = 2;
    enemy.on_update = (e) => {
        if (e.location.y >= 300) {
            e.attributes.life = 0;
        }
    }
    enemy.attributes.img_id = "ufo";
}

settings.init = () => {
    player_set_attribute("can_userctrl", true);
    player_set_attribute("can_outofscreen", false);
    player_set_attribute("size", { w: 25, h: 25 });
    player_set_attribute("location", { x: 150 - 25 / 2, y: 250 });
    player_set_attribute("attack", 0);
    player_set_attribute("life", 1);
    player_set_attribute("img_id", "player");
    make_enemy();
}

settings.on_time_update = (_t) => {
    if (_t % 100 == 0) {
        make_enemy();
    }

    if (player_get_attribute("location").y <= 10) {
        player_set_attribute("vector", { x: 0, y: 1 });
    }

    if (player_get_attribute("location").y >= 50) {
        player_set_attribute("vector", { x: 0, y: 0 });
    }
}

settings.on_j = () => {
    if (player_get_attribute("location").y >= 50) {
        player_set_attribute("vector", { x: 0, y: -1 });
    }
}

settings.on_k = () => {
    const bullet = factory.make_bullet();
    bullet.size.w = 2;
    bullet.size.h = 10;
    bullet.location.x = player_get_attribute("location").x + player_get_attribute("size").w / 2 - 1;
    bullet.location.y = player_get_attribute("location").y;
    bullet.vector.x = 0;
    bullet.vector.y = -2;
    bullet.on_update = (e) => {
        if (e.location.y <= -10) {
            e.attributes.life = 0;
        }
    }
    bullet.attributes.attack = 1;
}

settings.auto_start = true;

start();
