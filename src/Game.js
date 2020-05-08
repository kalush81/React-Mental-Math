import React from 'react';

const Game = (props) => {
    
    const makeNewValues = (len) => {
        const arr = new Array(len).fill(0);
        return arr.map(val => val = Math.floor(Math.random() * 100));
    };
    const values = makeNewValues(3)
    const [v1, v2, v3] = values
    const correctAnswer = values.reduce((a,b) => a + b);
    const proposedAnswer = values.reduce((a,b) => a + b) + Math.floor(Math.random() * 3);

	return (
      <div>
      	<div className='equation'>
      		  <p className="text">{`${v1} + ${v2} + ${v3} = ${proposedAnswer}`}</p>
      	</div>
		<button onClick={(event) => props.handleAnswer(correctAnswer == proposedAnswer, event)}>True</button>
        <button onClick={(event) => props.handleAnswer(correctAnswer == proposedAnswer, event)}>False</button>
      </div>
    )
}

export default Game;