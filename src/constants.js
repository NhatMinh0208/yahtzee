export const ACTION_UPDSCREEN = '1';
export const ACTION_SCORE = '2';
export const ACTION_TOGGLE_DICE = '3';

export const SCREEN_TITLE = '1001';
export const SCREEN_GAME = '1002';
export const SCREEN_HELP = '1003';
export const SCREEN_CREDITS = '1004';

export const PHASE_START_OF_GAME = '2000';
export const PHASE_IDLE = '2001';
export const PHASE_ROLLING = '2002';
export const PHASE_END_OF_GAME = '2003';
export const PHASE_PICK_JOKER = '2004';

export const SCORE_1 = '3001';
export const SCORE_2 = '3002';
export const SCORE_3 = '3003';
export const SCORE_4 = '3004';
export const SCORE_5 = '3005';
export const SCORE_6 = '3006';
export const SCORE_3_OF_A_KIND = '3007';
export const SCORE_4_OF_A_KIND = '3008';
export const SCORE_FULL_HOUSE = '3009';
export const SCORE_SMALL_STRAIGHT = '3010';
export const SCORE_LARGE_STRAIGHT = '3011';
export const SCORE_YAHTZEE = '3012';
export const SCORE_CHANCE = '3013';
export const SCORE_TOTAL = '3014';

export const SCORE_LABELS = {
    '3001': 'Ones',
    '3002': 'Twos',
    '3003': 'Threes',
    '3004': 'Fours',
    '3005': 'Fives',
    '3006': 'Sixes',
    '3007': 'Three of a Kind',
    '3008': 'Four of a Kind',
    '3009': 'Full House',
    '3010': 'Small Straight',
    '3011': 'Large Straight',
    '3012': 'Yahtzee',
    '3013': 'Chance',
    '3014': 'Total',
}

export const SCORE_COLUMN = {
    '3001': 0,
    '3002': 0,
    '3003': 0,
    '3004': 0,
    '3005': 0,
    '3006': 0,
    '3007': 1,
    '3008': 1,
    '3009': 1,
    '3010': 1,
    '3011': 1,
    '3012': 1,
    '3013': 1,
    '3014': 0,
}

export const DICECOUNT = 5;