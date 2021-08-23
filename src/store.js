import { combineReducers, configureStore } from '@reduxjs/toolkit';
import * as myConsts from './constants';
import { defaultScoreboard } from './constants';
import { clone } from './utils';

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
    roundLimit: 3,
    phase: myConsts.PHASE_IDLE,
    dice: [0,0,0,0,0],
    keep: [0,0,0,0,0],
    scoreboard: defaultScoreboard,
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
        case myConsts.ACTION_SCORE: {
            let newState = clone(state);
            if ((state.phase === myConsts.PHASE_IDLE || state.phase === myConsts.PHASE_PICK_JOKER) 
                && (action.scoreType !== myConsts.SCORE_TOTAL)
                && (newState.round > 0)) {
                newState.round = 0;
                newState.dice = [0,0,0,0,0];
                newState.keep = [0,0,0,0,0];
                for (let i = 0;i< newState.scoreboard.length;i++) if (newState.scoreboard[i].type === action.scoreType) {
                    newState.scoreboard[i].score.push(1);
                }
                newState.scoreboard[newState.scoreboard.length-1].score = 0;
                for (let g in newState.scoreboard) if (newState.scoreboard[g].type !== myConsts.SCORE_TOTAL)
                for (let gg in newState.scoreboard[g].score) {                
                    newState.scoreboard[newState.scoreboard.length-1].score += newState.scoreboard[g].score[gg];
                }
            }
            return newState;
        }
        case myConsts.ACTION_TOGGLE_DICE: {
            let newState = clone(state);
            if (newState.round > 0) {
                newState.keep[action.index] = 1 - newState.keep[action.index];
            }
            return newState;
        }
        case myConsts.ACTION_ROLL_DICE: {
            let newState = clone(state);
            if (newState.round < newState.roundLimit) {
                for (let i = 0; i < myConsts.DICECOUNT; i++) {
                    if (newState.keep[i] === 0) newState.dice[i] = 1 + Math.floor(6*Math.random());
                }
                newState.round++;
            }
            return newState;
        }
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
