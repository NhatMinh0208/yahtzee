import { createStore } from '@reduxjs/toolkit';
import * as myConsts from './constants.js';
const mainReducer = (
    state = {
    screen: myConsts.SCREEN_TITLE,
    },
    action
    ) => {
    return state;
}

export const store = createStore(mainReducer);
