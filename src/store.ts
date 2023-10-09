import { Sprite } from "./sprite/super";

export enum State {
    wait_images_loading,
    main_looping,
    paused,
    wait_user_start,
    wait_user_restart
}

export const store: {
    k: string;
    time: number;
    state: State;
    sprites: Sprite[];
} = {
    k: "",
    time: 0,
    state: State.wait_images_loading,
    sprites: []
}