import { connect } from 'react-redux';
import React from 'react';
import { update_screen, score, toggle_dice, roll_dice } from './actions';
import * as myConsts from './constants';

function mapStateToProps(state) {
    return {
        gameState: state.gameState,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeScreen : (screen) => dispatch(update_screen(screen)),
        doScore: (score_type) => dispatch(score(score_type)),
        toggleDice: (idx) => dispatch(toggle_dice(idx)),
        rollDice: () => dispatch(roll_dice()),
    }
}

function createScoreboardTile(obj, scoreHandler) {
    return <div className='Scoreboard-tile'>
        <button className='Scoreboard-tile-name' onClick={() => {scoreHandler(obj.type)}}>
            {myConsts.SCORE_LABELS[obj.type]}
        </button>
        <div className='Scoreboard-tile-scores'>
            {
                (obj.type === myConsts.SCORE_TOTAL) 
                ? <div className='Scoreboard-tile-scoretile'>
                    {obj.score}
                </div>
                :
                obj.score.map((num) => {
                    return <div className='Scoreboard-tile-scoretile'>
                        {num}
                    </div>
                })
            }
        </div>
    </div>
}

class GameScreen_P extends React.Component {
    
    render() { 
    const scoreboardUpper = this.props.gameState.scoreboard.map((obj) => {
        if (myConsts.SCORE_COLUMN[obj.type] === 0) 
        return createScoreboardTile(obj, this.props.doScore);
        else return null;
    });
    const scoreboardLower = this.props.gameState.scoreboard.map((obj) => {
        if (myConsts.SCORE_COLUMN[obj.type] === 1) 
        return createScoreboardTile(obj, this.props.doScore);
        else return null;
    });
    const diceTiles = this.props.gameState.dice.map((num, idx) => {
        return <button className= {(this.props.gameState.keep[idx])?'Dice-tile-keep':'Dice-tile'} onClick={() => this.props.toggleDice(idx)}>
            {num}
        </button>
    })
    return <div>
        <button className='Button' onClick={() => this.props.changeScreen(myConsts.SCREEN_TITLE)} style={{
            position: 'relative',
            width: '400px',
            height: '56px',
            top: '0px',
            left: '-600px',
            fontSize: '45px',
        }}>
            Quit to Title Screen
        </button>
        <div className='Scoreboard'>
            {scoreboardUpper}
        </div>
        <div className='Scoreboard' style={{
            top: '-642px',
            left: '390px',
        }}>
            {scoreboardLower}
        </div>
        
        <div className='Dice-box'>
            {diceTiles}
        </div>

        <div className='Rolls-indicator'>
            Rolls left: {this.props.gameState.roundLimit - this.props.gameState.round}
        </div>


        <button className="Button" onClick={this.props.rollDice} style={{
            width: '300px',
            height: '50px',
            fontSize: '40px',
            position: 'relative',
            top: '-900px',
            left: '400px',
        }}>
            Roll!
        </button>
    </div>
    }
}

export const GameScreen = connect(mapStateToProps, mapDispatchToProps)(GameScreen_P);