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

 class CreditsScreen_P extends React.Component {
    render() {
        return <div>
            <div className='Title'>Yahtzee</div>

            <button className='Button' onClick={() => this.props.changeScreen(myConsts.SCREEN_TITLE)} style={{
                position: 'relative',
                width: '450px',
                height: '56px',
                top: '690px',
                left: '00px',
                fontSize: '45px',
            }}>
                Return to Title Screen
            </button>
            <div className='Normal-text' style={{
                top: '50px',
            }}>
                Created by Normie28
            </div>
            <div className='Normal-text' style={{
                top: '70px',
            }}>
                With help from libraries: React, Redux
            </div>
        </div>
    }
}


class HelpScreen_P extends React.Component {
    render() {
        return <div>
            <div className='Title'>Yahtzee</div>

            <button className='Button' onClick={() => this.props.changeScreen(myConsts.SCREEN_TITLE)} style={{
                position: 'relative',
                width: '450px',
                height: '56px',
                top: '690px',
                left: '00px',
                fontSize: '45px',
            }}>
                Return to Title Screen
            </button>
            <div className='Normal-text' style={{
                top: '50px',
                left: '150px',
                width: '1300px',
            }}>
                <em>Yahtzee</em> is a fun party game where you try to make the best scoring out of your dice!<br />
                This web version allows you to play the game without needing physical dice.
            </div>
            <div className='Section-label' style={{
                top: '70px',
                left: '-20px',
            }}>
                Rules
            </div>
            <div className='Normal-text' style={{
                top: '120px',
                left: '100px',
                width: '1400px',
            }}>
                To be added in later.
            </div>
        </div>
    }
}

export const CreditsScreen = connect(mapStateToProps, mapDispatchToProps)(CreditsScreen_P);
export const HelpScreen = connect(mapStateToProps, mapDispatchToProps)(HelpScreen_P);