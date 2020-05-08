import React from "react";

const Game = (props) => {
  const { level, levelname, handleAnswer } = props;

  const makeNewValues = (len) => {
    const arr = new Array(len).fill(0);
    return arr.map((val) => (val = Math.floor(Math.random() * 100)));
  };

  const values = makeNewValues(level);
  //const [v1, v2, v3] = values;
  const correctAnswer = values.reduce((a, b) => a + b);

  const proposedAnswer =
    values.reduce((a, b) => a + b) +
    Math.floor(Math.random() * 3);

  return (
    <div>
      <div className="level">
        <p>your level is: {levelname}</p>
      </div>
      <div className="equation">
        <p className="text">{ values.map((el, idx) => {
            if (idx === values.length -1) {
                return (`${el} = `)
            }
            return (`${el} + \n`)
        }  )} {proposedAnswer}</p>
        
      </div>
      <button
        onClick={(event) =>
          handleAnswer(correctAnswer == proposedAnswer, event)
        }
      >
        True
      </button>
      <button
        onClick={(event) =>
          handleAnswer(correctAnswer == proposedAnswer, event)
        }
      >
        False
      </button>
    </div>
  );
};

export default Game;
