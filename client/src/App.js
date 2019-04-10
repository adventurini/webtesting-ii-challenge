import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
    atBat: 1,
    balls: 0,
    strikes: 0,
    strikeout:false,
    walk:false,
    numStrikeouts: 0,
    numWalks: 0,
    inning:1,
    hits:0,
    foulBalls:0
  }

  hitBall=()=> {
    if(this.state.balls = 3){
      this.setState({...this.state, balls: 0, strikeout: false, walk:true, atBat:this.state.atBat + 1})
    }
    this.setState({
      ...this.state, balls: this.state.balls+1, strikeout: false, walk:false
    })
  }

  hitStrike = () => {
    if(this.state.strikes === 2){
      if(this.state.numStrikeouts ===2){
        this.setState({
          ...this.state, hits:0, foulBalls:0, strikes:0, balls: 0, strikeout: true, walk:false, atBat: 1, numStrikeouts: 0, inning: this.state.inning+1
        })
      }
      this.setState({...this.state, strikes:0, strikeout: true, walk:false, atBat: this.state.atBat+ 1, numStrikeouts: this.state.numStrikeouts+1})
    }
    this.setState({...this.state, strikes:this.state.strikes+1, strikeout:false, walk:false})
  }

  hitFoul = () => {
    if (this.state.strikes === 2) {
      return this.setState({
        ...this.state,
        walk: false,
        strikeout: false,
        foulBalls: this.state.foulBalls + 1,
        strikes: 2
      })
    }
    this.setState({
      ...this.state,
      foulBalls: this.state.foulBalls + 1,
      strikes: this.state.strikes + 1,
      strikeout: false,
      walk: false,
    })
  }

  hitHit = () => {
    this.setState({
      ...this.state,
      hits: this.state.hits + 1,
      atBat: this.state.atBat + 1,
      strikeout: false,
      walk: false,
    })
  }

  render() {
    return (
      <div className="App">
      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Play ball!</h3>
            <Dashboard 
              hitBall={this.hitBall} 
              hitStrike={this.hitStrike} 
              hitFoul={this.hitFoul}
              hitHit={this.hitHit}
            />
            <Display 
              balls={this.state.balls} 
              strikes={this.state.strikes} 
              walk={this.state.walk} 
              strikeout={this.state.strikeout} 
              atBat={this.state.atBat}
              inning={this.state.inning}
              numStrikeouts={this.state.numStrikeouts}
              hits={this.state.hits}
              foulBalls={this.state.foulBalls}
            />
          </header>
        </div>
        </div>
    );
  }
}

export default App;
