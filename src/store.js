import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as myConsts from './constants.js';


function screenReducer(
    state = myConsts.SCREEN_TITLE,
    action
    )  {
    switch(action.type) {
        case myConsts.ACTION_UPDSCREEN:
            return action.screen;
        default: return state;
    }
}

const defaultGameState = {
    round: 0,
    score: 0,
    phase: myConsts.PHASE_START_OF_GAME,
    roundNumbers: [null, null, null],
    rolledNumber: null,
}

function gameStateReducer(
    state = {
        round: 0,
        score: 0,

    },
    action) {
    switch (action.type) {
        case myConsts.ACTION_UPDSCREEN:
            if (action.screen === myConsts.SCREEN_GAME)
                return defaultGameState;
            else
                return state;
        default:
            return state;
    }
}

const mainReducer = combineReducers({
    screen: screenReducer,
    gameState: gameStateReducer,
});

export const store = configureStore({
    reducer: mainReducer
});
