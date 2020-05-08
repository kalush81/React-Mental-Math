import React from 'react';

const Score = (props) => {
	return (
    <React.Fragment>
    	<p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
      </p>
      <button onClick={props.resetGame}>Reset</button>
      </React.Fragment>
    )
}

export default Score