import { settings } from './setting';
import { store } from './store';

const canvas = document.createElement("canvas");
export const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

if (ctx) {
    ctx.imageSmoothingEnabled = false;
}

export const init_canvas = (query: any, _w: number, _h: number) => {

    settings.screen.w = _w;
    settings.screen.h = _h;

    document.querySelector(query).innerHTML = '';
    document.querySelector(query).appendChild(canvas);

    document.addEventListener("keydown", ({ code }) => {
        store.k = code;
    });
    document.addEventListener("keyup", () => {
        store.k = "";
    });

    canvas.width = _w;
    canvas.height = _h;
}

export const clear = () => {
    if (!ctx) {
        return false;
    }
    ctx.clearRect(0, 0, settings.screen.w, settings.screen.h);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, settings.screen.w, settings.screen.h);
}

export const text = (text: string, center: boolean, location: {
    x: number,
    y: number
}) => {
    if (!ctx) {
        return false;
    }
    ctx.font = "14px Segoe UI";
    ctx.textAlign = "left";
    ctx.fillStyle = "#000";

    const { x, y } = location;

    if (center) {
        ctx.textAlign = "center";
    }
    ctx.fillText(`${text}`, x, y);
}

export const draw = () => {
    clear();
    store.sprites.forEach(s => {
        s.draw();
    });
}