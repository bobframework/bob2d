import { init_canvas, load_image, settings, LocationType, ScoreType, player_get_attribute, player_set_attribute, factory, start } from 'bob2d';

init_canvas("#app", 300, 80);

load_image(
    {
        id: "dino",
        src: "./images/dino.png"
    },
    {
        id: "x",
        src: "./images/x.png"
    }
);

const make_enemy = () => {
    const enemy = factory.make_enemy();
    enemy.location.x = 300;
    enemy.location.y = 48;
    enemy.size = { w: 20, h: 28 };
    enemy.vector.x = -2;
    enemy.attributes.img_id = "x";
    enemy.on_update = (e) => {
        if (e.location.x <= -20) {
            e.attributes.life = 0;
        }
    }
}

// settings.auto_start = true;

settings.init = () => {
    player_set_attribute("can_userctrl", false);
    player_set_attribute("can_outofscreen", false);
    player_set_attribute("size", { w: 25, h: 25 });
    player_set_attribute("location", { x: 10, y: 50 });
    player_set_attribute("life", 1);
    player_set_attribute("attack", 0);
    player_set_attribute("img_id", "dino");
    make_enemy();
}

settings.on_time_update = (_t: number) => {
    if (_t % 20 == 0) {
        player_set_attribute("color", "#f00");
    }
    if (_t % 40 == 0) {
        player_set_attribute("color", "#000");
    }
    if (_t % 200 == 0) {
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

settings.score_location_type = LocationType.Center;
settings.score_format = "{{score}} m";
settings.score_type = ScoreType.Time;

start();
