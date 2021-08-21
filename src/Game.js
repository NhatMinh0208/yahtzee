import React from 'react';
import {TitleScreen} from './TitleScreen';
import * as myConsts from './constants';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return {
        screen: state.screen
    }
}



class Game_P extends React.Component {
    render() {
        if (this.props.screen === myConsts.SCREEN_TITLE)
        return <div>
            <TitleScreen />
        </div>;
        else return <div></div>;
    }
}

export const Game = connect(mapStateToProps)(Game_P);
