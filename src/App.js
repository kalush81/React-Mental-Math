import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";
import Score from "./Score";

const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    levelname: 'easy',
    level: 3,
    numCorrect,
    numQuestions,
  };

  handleLevelChange = (e) => {
    const levelname = e.target.options[e.target.selectedIndex].dataset.level;
    this.setState({
      level: Number(e.target.value),
      levelname
    })
  };

  handleSubmitLevel = () => {};

  handleAnswer = (buljen, event) => {
    const answer = event.target.textContent;
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
    }));
    if ((answer === "True" && buljen) || (answer === "False" && !buljen)) {
      this.setState((prevState) => ({ numCorrect: prevState.numCorrect + 1 }));
    }
  };

  resetGame = () => {
    this.setState({
      numCorrect: 0,
      numQuestions: 0,
      levelname: 'easy',
      level: 3
    })
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

          <form onSubmit={this.handleSubmitLevel}>
            <label>
              <h4 style={{display: 'inline'}}>Difficulty level</h4>
              <select
                datalevel={this.state.levelname}
                value={this.state.level}
                onChange={this.handleLevelChange}
              >
                <option data-level='easy' value={3}>easy</option>
                <option data-level='medium' value={4}>medium</option>
                <option data-level='hard' value={6}>hard</option>
              </select>
            </label>
          </form>

          <Game handleAnswer={this.handleAnswer} level={this.state.level} levelname={this.state.levelname}/>
          <Score
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}
            resetGame={this.resetGame}
          />
        </div>
      </div>
    );
  }
}

export default App;
