import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as myConsts from './constants.js';
function screenReducer(
    state = myConsts.SCREEN_TITLE,
    action
    )  {
    switch(action.type)
    {
        case myConsts.ACTION_UPDSCREEN:
            return action.screen;
        default: return state;
    }
}

const mainReducer = combineReducers({
    screen: screenReducer
});

export const store = configureStore({
    reducer: mainReducer
});
