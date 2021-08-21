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
            <div className='Title'>Risky Rollers</div>

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
            <div className='Title'>Risky Rollers</div>

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
                <em>Risky Rollers</em> is a fun little game all about taking risks and rolling high!
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
                Each standard game of <em>Risky Rollers</em> is played over 15 rounds. <br />
                In each round, you are given 3 random numbers from 1 to 20. After 
                choosing one of them, we roll another random number from 1 to 20. 
                If the rolled number is greater or equal to your chosen number, you win 
                the same number of points as your chosen number. If it's less though, you win nothing! <br />
                Try your best to win as many points as possible in this game of risk and rolls!
            </div>
        </div>
    }
}

export const CreditsScreen = connect(mapStateToProps, mapDispatchToProps)(CreditsScreen_P);
export const HelpScreen = connect(mapStateToProps, mapDispatchToProps)(HelpScreen_P);