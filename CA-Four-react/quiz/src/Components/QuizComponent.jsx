import React, { useState } from 'react';
import questions from '../questions';

function Quiz({ setScore, pageProp }) {
  const [state, setState] = useState(0);
  const [darkmode, setDarkMode] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkmode) => !prevDarkmode);
  };

  const handleOptionClick = (selectedOptionId) => {
    const isCorrect = questions[state].options[selectedOptionId].isCorrect;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    next();
  };

  const next = () => {
    setState((prevState) => prevState + 1);

    if (state + 1 === questions.length) {
      pageProp(2);
    }
  };

  const highlightText = () => {
    setHighlight(true);
  };

  const removeHighlight = () => {
    setHighlight(false);
  };

  console.log(questions[state].text);

  return (
    <>
      <div className='body2' style={darkmode ? { background: "#f1efe7" } : { background: "#3f3f3f" }}>
        <div className='quizbox' style={darkmode?{}:{background:"#f2eef7"}}>
          <div className='nav'>
            <h1 className='topic'>Question no: {state + 1} / {questions.length}</h1>
            <button className='dark' onClick={toggleDarkMode} style={darkmode ? { color: "#f1ebd4", background: "#3f3f3f" } : { color: "#3f3f3f", background: "#f1ebd4" }}>{darkmode ? 'DARK' : 'LIGHT'}</button>
          </div>
          <div className='question' style={highlight ? { color: "#ff0000" } : { color: "#001EFF" }}>
            {state + 1}. {questions[state].text}
          </div>
          <div className='block1'>
            {questions[state].options.map((option, index) => (
              <button
                key={index}
                className={`op${index + 1}`}
                onClick={() => handleOptionClick(index)}
                style={darkmode ? { background: "#EDE5FD", color: "#48596a" } : { background: "#48596a", color: "#EDE5FD" }}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className='choice'>
            <button className='btns high' onClick={highlightText}>
              Highlight
            </button>
            <button className='btns remove' onClick={removeHighlight}>
              Remove Highlight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
