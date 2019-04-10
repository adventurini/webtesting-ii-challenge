import React, { Fragment, Component } from 'react'

class Display extends Component {


    render() {
        return (
            <Fragment>
                <h5>
                    Batter #<code>{this.props.atBat}</code> at bat
                    <br/>
                    Inning: <code>{this.props.inning}</code>
                    <br />
                    Strikeouts: <code>{this.props.numStrikeouts}</code>
                    <br />
                    Hits: <code>{this.props.hits}</code>
                    <br />
                    Foul balls: <code>{this.props.foulBalls}</code>
                </h5>
                <section className='display'>
                    <code>{this.props.balls}</code>
                    <code>{this.props.strikes}</code>
                </section>
                    <code>{this.props.walk ? 
                        <>Walk!</> : <></>
                    }</code>
                    <code>{this.props.strikeout ? 
                        <>Strikeout!</> : <></>
                    }</code>
                
                
            </Fragment>
        );
    }
}

export default Display