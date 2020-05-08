import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';


const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
  	numCorrect,
    numQuestions,
  }
  handleAnswer = (buljen, event) => {
    console.log(buljen)
    const answer = event.target.textContent;
    this.setState(prevState => (
      {numQuestions: prevState.numQuestions + 1}
    ))
    if ( (answer === 'True' && buljen) || (answer === 'False' && !buljen) ) {
      console.log('correct !')
      this.setState(prevState => (
        {numCorrect: prevState.numCorrect + 1}
      ))
    }
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
      	<div className="game">
          <h2>Mental Math</h2>
          <Game handleAnswer={this.handleAnswer}/>
    	    <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div> 
      </div>
    );
  }
}

export default App;
