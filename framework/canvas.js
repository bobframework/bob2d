import { settings } from './setting.js';
import { store } from './store.js';

const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

export const init_canvas = (query, _w, _h) => {

    settings.screen.w = _w;
    settings.screen.h = _h;

    document.querySelector(query).innerHTML = '';
    document.querySelector(query).appendChild(canvas);

    document.addEventListener("keydown", ({ code }) => {
        store.k = code;
    });
    document.addEventListener("keyup", ({ code }) => {
        store.k = "";
    });

    canvas.width = _w;
    canvas.height = _h;
}

export const clear = () => {
    ctx.clearRect(0, 0, settings.screen.w, settings.screen.h);
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, settings.screen.w, settings.screen.h);
}

export const text = (text) => {
    ctx.font = "14px Segoe UI";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.fillText(`${text}`, settings.screen.w / 2, settings.screen.h / 1.7);
}

export const draw = () => {
    clear();
    store.sprites.forEach(s => {
        s.draw();
    });
}