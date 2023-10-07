import { get_image } from '../res.js';
import { ctx } from '../canvas.js';
import { settings } from '../setting.js';

export class Sprite {
    constructor() {

        this.type = "";//player/enemy/food/

        this.location = {
            x: 0,
            y: 0
        }

        this.size = {
            w: 0,
            h: 0
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