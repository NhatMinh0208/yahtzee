import { connect } from 'react-redux';
import React from 'react';
import { update_screen } from './actions';
import * as myConsts from './constants';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeScreen : (screen) => dispatch(update_screen(screen))
    }
}

class GameScreen_P extends React.Component {
    render() { 
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
    </div>
    }
}

export const GameScreen = connect(mapStateToProps, mapDispatchToProps)(GameScreen_P);