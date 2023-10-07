import { get_image } from './res.js';
import { settings } from './setting.js';
import { ctx } from './canvas.js';

class Sprite {
    constructor(_x, _y, _w, _h) {

        this.type = "";//player/enemy/food/

        this.location = {
            x: _x,
            y: _y
        }

        this.size = {
            w: _w,
            h: _h
        }

        this.vector = {
            x: 0,
            y: 0
        }

        this.attributes = {
            name: null,
            img_id: null,
            color: "#000",
            can_outofscreen: true,
            can_userctrl: true,
            life: 1,
            attack: 1
        }

        this.data = {

        }

    }

    set_size(_w, _h) {
        this.size = {
            w: _w,
            h: _h
        }
    }

    set_location(_x, _y) {
        this.location = {
            x: _x,
            y: _y
        }
    }

    set_vector(_x, _y) {
        this.vector = {
            x: _x,
            y: _y
        }
    }

    update() {
        this.location.x += this.vector.x;
        this.location.y += this.vector.y;

        if (!this.attributes.can_outofscreen) {

            if (this.location.x <= 0) {
                this.location.x = 0;
                this.vector.x = 0;
            }
            if (this.location.x + this.size.w >= settings.screen.w) {
                this.location.x = settings.screen.w - this.size.w;
                this.vector.x = 0;
            }
            if (this.location.y <= 0) {
                this.location.y = 0;
                this.vector.y = 0;
            }
            if (this.location.y + this.size.h >= settings.screen.h) {
                this.location.y = settings.screen.h - this.size.h;
                this.vector.y = 0;
            }
        }
    }
    draw() {

        if (this.attributes.img_id) {
            const img = get_image(this.attributes.img_id);
            ctx.drawImage(img, this.location.x, this.location.y, this.size.w, this.size.h);
        } else {
            ctx.fillStyle = this.attributes.color;
            ctx.fillRect(this.location.x, this.location.y, this.size.w, this.size.h);
        }

        // ctx.font = "10px serif";
        // ctx.textAlign = "center";
        // ctx.fillStyle = "#000";
        // ctx.fillText(this.attributes.life, this.location.x, this.location.y);
    }
}

export class Player extends Sprite {
    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
        this.attributes.can_outofscreen = false;
        this.type = "player";
    }
    update() {
        super.update();
    }
}

export class Enemy extends Sprite {
    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
        this.attributes.can_outofscreen = true;
        this.type = "enemy";
        this.vector.x = -1;
        this.vector.y = 0;
    }
    update() {
        super.update();
    }
}

export class Bullet extends Sprite {
    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
        this.attributes.can_outofscreen = true;
        this.type = "bullet";
        this.vector.x = -1;
    }
    update() {
        super.update();
    }
}

export class Food extends Sprite {
    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
        this.attributes.can_outofscreen = true;
        this.type = "food";
        this.vector.x = -1;
        this.attributes.attack = 0;
    }
    update() {
        super.update();
    }
}