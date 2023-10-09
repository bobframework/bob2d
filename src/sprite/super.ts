import { get_image } from '../res';
import { ctx } from '../canvas';
import { settings } from '../setting';

export class Sprite {
    score: number;
    type: string;
    location: { x: number; y: number; };
    size: { w: number; h: number; };
    vector: { x: number; y: number; };
    attributes: { name: string | null; img_id: string | null; color: string; can_outofscreen: boolean; can_userctrl: boolean; life: number; attack: number; };
    data: {};
    constructor() {

        this.score = 0;

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
    on_update(_x: Sprite) { }

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

        this.on_update(this);
    }
    draw() {
        if (ctx) {
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
}