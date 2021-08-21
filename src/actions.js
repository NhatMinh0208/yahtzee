import * as myConsts from './constants.js';
export function update_screen(screen_no) {
    return {
        type: myConsts.ACTION_UPDSCREEN,
        screen: screen_no,
    }
}