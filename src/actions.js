import * as myConsts from './constants.js';

export function update_screen(screen_no) {
    return {
        type: myConsts.ACTION_UPDSCREEN,
        screen: screen_no,
    }
}

export function score(score_type) {
    return {
        type: myConsts.ACTION_SCORE,
        scoreType: score_type,
    }
}

export function toggle_dice(index) {
    return {
        type: myConsts.ACTION_TOGGLE_DICE,
        index: index,
    }
}



export function roll_dice() {
    return {
        type: myConsts.ACTION_ROLL_DICE,
    }
}