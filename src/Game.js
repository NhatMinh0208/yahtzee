import React from 'react';
import { TitleScreen } from './TitleScreen';
import { GameScreen } from './GameScreen';
import { HelpScreen } from './MiscScreens';
import { CreditsScreen } from './MiscScreens';
import * as myConsts from './constants';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        screen: state.screen
    }
}

class Game_P extends React.Component {
    render() {
        switch (this.props.screen) {
            case myConsts.SCREEN_TITLE:
                return <TitleScreen />
            case myConsts.SCREEN_GAME:
                return <GameScreen />
            case myConsts.SCREEN_HELP:
                return <HelpScreen />
            case myConsts.SCREEN_CREDITS:
                return <CreditsScreen />
            default: return <div></div>
        }
    }
}

export const Game = connect(mapStateToProps)(Game_P);
