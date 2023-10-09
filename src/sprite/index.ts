import { store } from '../store';
import { Enemy } from "./enemy";
import { Bullet } from "./bullet";
import { Food } from "./food";

export const factory = {
    make_enemy: () => {
        const enemy = new Enemy();
        store.sprites.push(enemy);
        return enemy;
    },
    make_food: () => {
        const food = new Food();
        store.sprites.push(food);
        return food;
    },
    make_bullet: () => {
        const bullet = new Bullet();
        store.sprites.push(bullet);
        return bullet;
    }
}