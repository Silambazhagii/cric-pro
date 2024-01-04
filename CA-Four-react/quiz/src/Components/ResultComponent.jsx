import React from 'react';

function ResultComponent(props) {
    const percentage =(props.score/5)*100

    const startQuiz = () => {
        props.setScore(0);
        props.pageProp(1); 
      };

      const home =()=>{
        props.setScore(0);
        props.pageProp(0);
      }
  return (
    <>
      <div className='body3'>
        <h1 className='score'>Your Scored : {props.score} - {percentage}%</h1>
        <div className='box'>
          <button className='playagain' onClick={startQuiz}>PLAY AGAIN</button>
          <button className='quit'onClick={home}>QUIT</button>
        </div>
      </div>
    </>
  );
}

export default ResultComponent;
