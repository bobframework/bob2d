import { store } from '../store.js';
import { Enemy } from "./enemy.js";

export const factory = {
    make_enemy: () => {
        const enemy = new Enemy();
        store.sprites.push(enemy);
        return enemy;
    },
    make_food: () => {

    },
    make_bullet: () => {

    }
}