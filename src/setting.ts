export enum LocationType {
    Center,
    Pos
}

export enum ScoreType {
    KilledEnemy,
    Time
}

export const settings: {
    auto_start: boolean;
    screen: {
        w: number;
        h: number;
    }
    init: Function;
    on_time_update: Function;
    on_collision: Function;
    on_j: Function;
    on_k: Function;
    score_location_type: LocationType;
    score_location: {
        x: number,
        y: number
    };
    score_format: string;
    score_type: ScoreType
} = {
    auto_start: false,
    screen: {
        w: 0,
        h: 0
    },
    score_location_type: LocationType.Center,
    score_location: {
        x: 10,
        y: 10
    },
    score_format: "",
    score_type: ScoreType.KilledEnemy,
    init: () => { },
    on_time_update: () => { },
    on_collision: () => { },
    on_j: () => { },
    on_k: () => { }
}